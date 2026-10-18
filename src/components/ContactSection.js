"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  const fieldClass =
    "mt-2 w-full rounded-md border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:border-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-300";

  return (
    <section id="contact" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
      <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        Contact
      </h3>
      <p className="mb-6">
        Have a project or an opportunity in mind? Send me a message and I will
        reply by email.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="hidden" aria-hidden="true">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <label className="block text-sm font-medium text-slate-200">
          Name
          <input
            type="text"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </label>
        <label className="block text-sm font-medium text-slate-200">
          Email
          <input
            type="email"
            name="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
          />
        </label>
        <label className="block text-sm font-medium text-slate-200">
          Message
          <textarea
            name="message"
            required
            minLength={5}
            maxLength={2000}
            rows={5}
            placeholder="How can I help?"
            className={fieldClass}
          />
        </label>
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-md bg-teal-300/10 px-5 py-2 text-sm font-semibold text-teal-300 transition hover:bg-teal-300/20 disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        <p aria-live="polite" className="text-sm">
          {status === "sent" && (
            <span className="text-teal-300">Thank you! Your message has been sent.</span>
          )}
          {status === "error" && <span className="text-red-400">{error}</span>}
        </p>
      </form>
    </section>
  );
}
