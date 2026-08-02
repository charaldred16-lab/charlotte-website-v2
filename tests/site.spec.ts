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

test("unknown routes use the branded not-found page", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "This page isn’t here" })).toBeVisible();
});
