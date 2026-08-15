import { expect, test } from "@playwright/test";

const securityHeaders = {
  "content-security-policy": "base-uri 'self'; frame-ancestors 'none'; object-src 'none';",
  "permissions-policy": "camera=(), microphone=(), geolocation=()",
  "referrer-policy": "strict-origin-when-cross-origin",
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
} as const;

test("homepage loads with security headers and no horizontal overflow", async ({
  page,
}) => {
  const response = await page.goto("/");

  expect(response).not.toBeNull();
  expect(response?.ok()).toBeTruthy();

  const headers = response?.headers() ?? {};
  for (const [name, expected] of Object.entries(securityHeaders)) {
    expect(headers[name]).toBe(expected);
  }

  await expect(
    page.getByRole("heading", {
      name: /Helping create better digital experiences/i,
    }),
  ).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalOverflow).toBeFalsy();
});

test("shared navigation uses the agreed labels and order", async ({ page }) => {
  await page.goto("/services");

  const primaryNavigation = page.getByRole("navigation", {
    name: "Primary navigation",
  });
  await expect(primaryNavigation.getByRole("link")).toHaveText([
    "Home",
    "About",
    "Services",
    "Selected Work",
    "Insights",
    "Contact",
  ]);
});

test("skip link moves keyboard users to the main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");

  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();
  await skipLink.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});

test("mobile navigation opens and closes with Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Menu" });
  await trigger.click();
  await expect(page.getByRole("button", { name: "Close" })).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Menu" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
});

test("mobile work carousel updates its position counter", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const status = page.locator(".work-carousel-status");
  await expect(status).toContainText("1 of 2");

  await page.locator(".work-grid").evaluate((element) => {
    const cards = element.querySelectorAll<HTMLElement>("[data-case-study]");
    element.scrollTo({ left: cards[1]?.offsetLeft ?? 0, behavior: "auto" });
    element.dispatchEvent(new Event("scroll"));
  });

  await expect(status).toContainText("2 of 2");
});

test("Hertz case study shows genuine evidence and remains within the viewport", async ({
  page,
}) => {
  await page.setViewportSize({ width: 834, height: 1112 });

  const response = await page.goto("/work/hertz-keyless-rental");

  expect(response).not.toBeNull();
  expect(response?.ok()).toBeTruthy();

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Removing the airport rental queue",
    }),
  ).toBeVisible();

  const evidenceImages = [
    "Hertz app screen capturing the front of a fictional driving licence",
    "Hertz app screen capturing the back of a fictional driving licence",
    "Hertz facial recognition screen using a photograph of a fictional customer",
  ];

  for (const accessibleName of evidenceImages) {
    await expect(
      page.getByRole("img", { name: accessibleName }),
    ).toBeVisible();
  }

  const hasHorizontalOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );

  expect(hasHorizontalOverflow).toBeFalsy();
});

test("Ocado case study explains the research shift without invented artefacts", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });

  const response = await page.goto("/work/ocado-offers");

  expect(response).not.toBeNull();
  expect(response?.ok()).toBeTruthy();

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Rethinking where customers discover offers",
    }),
  ).toBeVisible();
  await expect(page.locator(".cs-reframe")).toBeVisible();
  await expect(page.locator(".cs-decision-journey-step")).toHaveCount(4);
  await expect(
    page.getByText("Research direction", { exact: true }),
  ).toBeVisible();
  await expect(page.locator(".cs-evidence")).toHaveCount(0);

  const hasHorizontalOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );

  expect(hasHorizontalOverflow).toBeFalsy();
});

test("About page keeps its approved content and fits all responsive viewports", async ({
  page,
}) => {
  const viewports = [
    { name: "mobile", width: 390, height: 844 },
    { name: "tablet", width: 834, height: 1112 },
    { name: "desktop", width: 1440, height: 1000 },
  ] as const;

  for (const viewport of viewports) {
    await test.step(viewport.name, async () => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });

      const response = await page.goto("/about");

      expect(response).not.toBeNull();
      expect(response?.ok()).toBeTruthy();

      await expect(
        page.getByRole("heading", {
          level: 1,
          name: "My experience sits between customer understanding, product and growth.",
        }),
      ).toBeVisible();
      await expect(
        page.getByText(
          "I adapt my approach to the business rather than expecting the business to adapt to my process.",
          { exact: true },
        ),
      ).toBeVisible();
      await expect(page.getByRole("heading", { name: "Hertz" })).toBeVisible();
      await expect(
        page.getByRole("heading", { name: "Ocado Technology" }),
      ).toBeVisible();

      const selectedWorkLinks = page.getByRole("link", {
        name: "View selected work",
      });
      await expect(selectedWorkLinks).toHaveCount(1);
      await expect(selectedWorkLinks).toHaveAttribute("href", "/#work");

      const hasHorizontalOverflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth,
      );
      expect(hasHorizontalOverflow).toBeFalsy();
    });
  }
});

test("Services page presents problem-led support across responsive viewports", async ({
  page,
}) => {
  const viewports = [
    { name: "mobile", width: 390, height: 844 },
    { name: "tablet", width: 834, height: 1112 },
    { name: "desktop", width: 1440, height: 1000 },
  ] as const;

  for (const viewport of viewports) {
    await test.step(viewport.name, async () => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });

      const response = await page.goto("/services");

      expect(response).not.toBeNull();
      expect(response?.ok()).toBeTruthy();

      await expect(
        page.getByRole("heading", {
          level: 1,
          name: "I help teams get clear on what matters and confident about what to do next.",
        }),
      ).toBeVisible();

      if (viewport.name === "desktop") {
        const primaryNavigation = page.getByRole("navigation", {
          name: "Primary navigation",
        });
        await expect(
          primaryNavigation.getByRole("link", { name: "Services" }),
        ).toHaveAttribute("aria-current", "page");
      }

      await expect(
        page.getByRole("heading", {
          name: "Something isn’t working and you don’t know why.",
        }),
      ).toBeVisible();
      await expect(
        page.getByRole("heading", {
          name: "You have an idea but aren’t confident it’s right.",
        }),
      ).toBeVisible();
      await expect(
        page.getByRole("heading", {
          name: "There are too many possible priorities.",
        }),
      ).toBeVisible();
      await expect(
        page.getByRole("heading", {
          name: "You want to improve an experience but aren’t sure where to focus.",
        }),
      ).toBeVisible();

      await expect(
        page.getByText("The approach is shaped around the question.", {
          exact: false,
        }),
      ).toBeVisible();
      await expect(
        page.getByRole("heading", {
          name: "Sometimes the problem isn’t one project.",
        }),
      ).toBeVisible();
      await expect(
        page.getByRole("heading", { name: "Tell me what’s happening." }),
      ).toBeVisible();
      await expect(
        page.locator(".services-contact").getByRole("link", {
          name: "Get in touch",
        }),
      ).toHaveAttribute("href", /^mailto:/);

      const hasHorizontalOverflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth,
      );
      expect(hasHorizontalOverflow).toBeFalsy();
    });
  }
});

test("unknown routes use the branded not-found page", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "This page isn’t here" })).toBeVisible();
});
