import { useRef, useState, type FormEvent } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import PageMeta from '@/components/seo/page-meta';
import { FadeIn, Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import { toast } from '@/hooks/use-toast';

const APPS_SCRIPT_URL = (import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL ?? '').trim();

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submissionLockRef = useRef(false);

  const validate = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedCompany = company.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      return 'Please enter your full name.';
    }

    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return 'Please enter a valid email address.';
    }

    if (trimmedPhone.replace(/\D/g, '').length < 7) {
      return 'Please enter a valid phone number.';
    }

    if (trimmedCompany.length < 2) {
      return 'Please enter your company name.';
    }

    if (trimmedMessage.length < 15 || !/[.!?]/.test(trimmedMessage)) {
      return 'Write at least a sentence.';
    }

    return null;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitting || submissionLockRef.current) {
      return;
    }

    const validationError = validate();

    if (validationError) {
      setSubmitted(false);
      setError(validationError);
      toast({
        title: 'Missing details',
        description: validationError,
      });
      return;
    }

    if (!APPS_SCRIPT_URL) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setMessage('');
      setError(null);
      toast({
        title: 'Demo submission successful',
        description: 'Your inquiry was captured locally for this preview. Add the Apps Script URL to connect it to a real backend.',
      });
      return;
    }

    submissionLockRef.current = true;
    setSubmitting(true);
    setSubmitted(false);
    setError(null);

    const payload = {
      name: name.trim(),
      email: email.trim(),
      countryCode: '+1',
      phone: phone.trim(),
      company: company.trim(),
      needs: message.trim(),
    };

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      let data: { success?: boolean; message?: string } = {};

      if (responseText) {
        try {
          data = JSON.parse(responseText) as { success?: boolean; message?: string };
        } catch {
          data = {};
        }
      }

      if (!response.ok || data.success === false) {
        throw new Error(data.message || 'Failed to send inquiry.');
      }

      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setMessage('');

      toast({
        title: 'Message sent',
        description: 'Your inquiry was delivered successfully. We will review it and follow up soon.',
      });
    } catch {
      const messageText =
        'We could not send your request right now. Please try again or email us directly at info@vertex-digital.site.';
      setError(messageText);
      toast({
        title: 'Send failed',
        description: messageText,
      });
    } finally {
      submissionLockRef.current = false;
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-foreground min-h-[100dvh] flex flex-col font-sans">
      <PageMeta
        title="Contact Vertex Digital | Let's Build Something That Works"
        description="Have a project in mind? Talk to Vertex Digital about web design, branding, SEO, and growth strategy."
        canonicalPath="/contact"
      />
      <Nav />

      <main className="flex-1 pt-28">
        <Section className="py-20 md:py-28">
          <div className="page-gutter">
            <FadeIn className="max-w-4xl space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.36em] text-[#8F7CFF]">Let&apos;s Talk</p>
              <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
                Have an idea?
                <br />
                Let&apos;s make it happen.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#B7BFCC]">
                Tell us what you&apos;re working on, what you&apos;re trying to achieve, or where you&apos;re stuck. We&apos;ll take it from there.
              </p>
            </FadeIn>
          </div>
        </Section>

        <Section className="pb-16 md:pb-24">
          <div className="page-gutter grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <FadeIn>
              <form
                id="contact-page-form"
                onSubmit={handleSubmit}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-md"
                noValidate
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#765EFF]/20 to-transparent" />

                <div className="space-y-5">
                  <label className="block text-sm font-medium text-[#B0B7C3]">
                    Name
                    <input
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                        setError(null);
                      }}
                      autoComplete="name"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#070707] px-4 py-3 text-white outline-none transition focus:border-[#765EFF] focus:ring-2 focus:ring-[#765EFF]/20"
                      placeholder="Your full name"
                      required
                    />
                  </label>

                  <label className="block text-sm font-medium text-[#B0B7C3]">
                    Email
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        setError(null);
                      }}
                      autoComplete="email"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#070707] px-4 py-3 text-white outline-none transition focus:border-[#765EFF] focus:ring-2 focus:ring-[#765EFF]/20"
                      placeholder="you@company.com"
                      required
                    />
                  </label>

                  <label className="block text-sm font-medium text-[#B0B7C3]">
                    Phone
                    <input
                      type="tel"
                      value={phone}
                      onChange={(event) => {
                        setPhone(event.target.value);
                        setError(null);
                      }}
                      autoComplete="tel"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#070707] px-4 py-3 text-white outline-none transition focus:border-[#765EFF] focus:ring-2 focus:ring-[#765EFF]/20"
                      placeholder="123 456 7890"
                      required
                    />
                  </label>

                  <label className="block text-sm font-medium text-[#B0B7C3]">
                    Company
                    <input
                      value={company}
                      onChange={(event) => {
                        setCompany(event.target.value);
                        setError(null);
                      }}
                      autoComplete="organization"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#070707] px-4 py-3 text-white outline-none transition focus:border-[#765EFF] focus:ring-2 focus:ring-[#765EFF]/20"
                      placeholder="Your company"
                      required
                    />
                  </label>

                  <label className="block text-sm font-medium text-[#B0B7C3]">
                    Project / Message
                    <textarea
                      value={message}
                      onChange={(event) => {
                        setMessage(event.target.value);
                        setError(null);
                      }}
                      rows={5}
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#070707] px-4 py-3 text-white outline-none transition focus:border-[#765EFF] focus:ring-2 focus:ring-[#765EFF]/20"
                      placeholder="(Write at least a sentence)"
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#765EFF] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#8F7CFF] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className={submitting ? 'opacity-40' : ''}>
                      {submitting ? 'Sending...' : 'Start the Conversation'}
                    </span>
                    {submitting ? (
                      <motion.span
                        className="absolute inset-y-0 left-0 flex w-full items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <Mail className="h-5 w-5 animate-pulse text-white" />
                      </motion.span>
                    ) : null}
                  </button>

                  {submitted ? (
                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                      Inquiry sent successfully. We&apos;ll be in touch soon.
                    </div>
                  ) : null}

                  {error ? (
                    <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                      {error}
                    </div>
                  ) : null}
                </div>
              </form>
            </FadeIn>

            <FadeIn className="space-y-4">
              <div className="rounded-[1.75rem] border border-white/10 bg-[#0D0D0D] p-7">
                <h2 className="font-display text-2xl font-bold text-white">Direct Contact</h2>
                <div className="mt-4 space-y-2 text-sm leading-7 text-[#BEC7D4]">
                  <p>
                    Email:{' '}
                    <a className="font-medium text-white transition hover:text-[#8F7CFF]" href="mailto:info@vertex-digital.site">
                      info@vertex-digital.site
                    </a>
                  </p>
                  <p>
                    Website:{' '}
                    <a className="font-medium text-white transition hover:text-[#8F7CFF]" href="https://vertex-digital.site" target="_blank" rel="noreferrer">
                      vertex-digital.site
                    </a>
                  </p>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7">
                <h3 className="font-display text-2xl font-bold text-white">Prefer email?</h3>
                <p className="mt-3 text-sm leading-7 text-[#BEC7D4]">Send us a message directly and we&apos;ll get back to you.</p>
                <a href="mailto:info@vertex-digital.site" className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30">
                  info@vertex-digital.site
                  <ArrowRight size={16} />
                </a>
              </div>
            </FadeIn>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
