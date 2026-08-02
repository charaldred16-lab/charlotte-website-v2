"use client";

export function SkipLink() {
  const focusMainContent = () => {
    window.requestAnimationFrame(() => {
      document.getElementById("main-content")?.focus();
    });
  };

  return (
    <a className="skip-link" href="#main-content" onClick={focusMainContent}>
      Skip to main content
    </a>
  );
}
