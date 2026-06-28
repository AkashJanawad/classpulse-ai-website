import { Send } from 'lucide-react';
import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  organization: '',
  message: '',
  website: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    setStatus({ state: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to send message.');
      }

      setForm(initialForm);
      setStatus({ state: 'success', message: payload.message });
    } catch (error) {
      setStatus({ state: 'error', message: error.message });
    }
  }

  return (
    <form onSubmit={submitForm} className="glass-panel rounded-2xl p-5 sm:p-6">
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" value={form.website} onChange={updateField} tabIndex="-1" autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-white">
          Name
          <input
            required
            name="name"
            value={form.name}
            onChange={updateField}
            className="min-h-12 rounded-lg border border-white/12 bg-white/8 px-4 text-base font-medium text-white outline-none transition placeholder:text-white/35 focus:border-primary focus:ring-4 focus:ring-primary/15"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-white">
          Email
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={updateField}
            className="min-h-12 rounded-lg border border-white/12 bg-white/8 px-4 text-base font-medium text-white outline-none transition placeholder:text-white/35 focus:border-primary focus:ring-4 focus:ring-primary/15"
            placeholder="you@school.org"
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-bold text-white">
        Organization
        <input
          name="organization"
          value={form.organization}
          onChange={updateField}
          className="min-h-12 rounded-lg border border-white/12 bg-white/8 px-4 text-base font-medium text-white outline-none transition placeholder:text-white/35 focus:border-primary focus:ring-4 focus:ring-primary/15"
          placeholder="School, coaching center, or company"
        />
      </label>

      <label className="mt-4 grid gap-2 text-sm font-bold text-white">
        Message
        <textarea
          required
          name="message"
          value={form.message}
          onChange={updateField}
          rows="5"
          className="resize-y rounded-lg border border-white/12 bg-white/8 px-4 py-3 text-base font-medium text-white outline-none transition placeholder:text-white/35 focus:border-primary focus:ring-4 focus:ring-primary/15"
          placeholder="Tell us what you want to build or pilot."
        />
      </label>

      <button
        type="submit"
        disabled={status.state === 'loading'}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-primary/50 bg-primary/16 px-5 text-sm font-bold text-white shadow-violet transition hover:-translate-y-0.5 hover:border-secondary/70 hover:bg-primary/24 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        <Send size={18} aria-hidden="true" />
        {status.state === 'loading' ? 'Sending' : 'Send message'}
      </button>

      {status.message ? (
        <p
          className={`mt-4 text-sm font-semibold ${
            status.state === 'error' ? 'text-coral' : 'text-tertiary'
          }`}
          role="status"
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
