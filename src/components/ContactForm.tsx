"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import styles from "@/styles/contact.module.css";

type ContactFormProps = {
  endpoint: string;
  email: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

type FormspreeErrorResponse = {
  errors?: Array<{
    message?: string;
  }>;
};

const genericErrorMessage =
  "I couldn’t send that just now. Please try again, or use the email link below.";

function getSafeFormspreeMessage(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const response = payload as FormspreeErrorResponse;
  const message = response.errors?.find(
    (error) => typeof error.message === "string" && error.message.trim(),
  )?.message;

  if (!message) {
    return null;
  }

  const trimmed = message.trim();
  return trimmed.length <= 180 ? trimmed : null;
}

export function ContactForm({ endpoint, email }: ContactFormProps) {
  const statusRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState(genericErrorMessage);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage(genericErrorMessage);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 429) {
          setErrorMessage(
            "There have been too many attempts in a short time. Please wait a moment and try again, or use the email link below.",
          );
        } else {
          let payload: unknown = null;

          try {
            payload = await response.json();
          } catch {
            // Some failed responses do not contain JSON. The generic message is
            // intentionally retained in that case.
          }

          if (response.status === 400 || response.status === 422) {
            const formspreeMessage = getSafeFormspreeMessage(payload);
            if (formspreeMessage) {
              setErrorMessage(formspreeMessage);
            }
          }
        }

        setStatus("error");
        window.requestAnimationFrame(() => statusRef.current?.focus());
        return;
      }

      form.reset();
      setStatus("success");
      window.requestAnimationFrame(() => statusRef.current?.focus());
    } catch {
      setErrorMessage(genericErrorMessage);
      setStatus("error");
      window.requestAnimationFrame(() => statusRef.current?.focus());
    }
  }

  return (
    <div className={styles.formPanel}>
      <p className="eyebrow">Send an enquiry</p>

      <form
        id="enquiry"
        className={styles.form}
        action={endpoint}
        method="POST"
        onSubmit={handleSubmit}
        aria-busy={status === "submitting"}
      >
        <input
          type="hidden"
          name="subject"
          value="New website enquiry from {{ name }}"
        />

        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="contact-website">Leave this field empty</label>
          <input
            id="contact-website"
            name="_gotcha"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-name">Name *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-email">Email *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-company">Company (optional)</label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="contact-message">What are you working through? *</label>
          <textarea id="contact-message" name="message" rows={6} required />
        </div>

        <p className={styles.privacyNotice}>
          I’ll use the information you provide to respond to your enquiry. See
          the <Link href="/privacy">Privacy notice</Link> for details about how
          your information is handled.
        </p>

        <button
          className={`primary-button ${styles.submitButton}`}
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send enquiry"}
        </button>
      </form>

      <div
        ref={statusRef}
        className={styles.status}
        role={status === "error" ? "alert" : "status"}
        aria-live={status === "error" ? "assertive" : "polite"}
        tabIndex={-1}
      >
        {status === "success" && (
      <div className={styles.successMessage}>
        <strong className={styles.successTitle}>Message sent</strong>
        <p>
          Thanks — your message has been sent. I’ll read it and come back to
        you directly.
        </p>
      </div>
    )}
        {status === "error" && (
          <p>
            {errorMessage} Email me at <a href={`mailto:${email}`}>{email}</a>.
          </p>
        )}
      </div>

      {status !== "success" && (
        <p className={styles.reassurance}>
          I’ll read your message and come back to you directly. If it sounds
          like I could help, we can arrange a conversation to explore it
          properly.
        </p>
      )}
    </div>
  );
}
