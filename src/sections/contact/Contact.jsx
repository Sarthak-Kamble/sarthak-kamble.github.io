import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../portfolioSlice";
import Footer from "../../components/Footer";
import { Mail, Send } from "lucide-react";
import { socialLinks } from "../../utils/constants";

const fieldBase = (isDark) =>
  `w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors duration-200 ${
    isDark
      ? "border-neutral-800 bg-neutral-900/40 text-white placeholder:text-neutral-600 focus:border-violet-500/40 focus:ring-2 focus:ring-violet-500/15"
      : "border-neutral-200 bg-white/70 text-[#121212] placeholder:text-neutral-400 focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/15"
  }`;

const labelClass = (isDark) =>
  `text-xs font-medium uppercase tracking-widest ${
    isDark ? "text-neutral-500" : "text-neutral-500"
  }`;

const Contact = () => {
  const { theme } = useSelector(selectPortfolioSlice);
  const isDark = theme === "Dark";

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={`relative mx-auto flex h-[100dvh] w-full flex-col overflow-hidden pt-24 font-public-sans lg:w-[60%] lg:border-l lg:border-r ${
        isDark
          ? "border-neutral-800/80 text-white"
          : "border-neutral-100 text-[#121212]"
      }`}
    >
      <section className="flex min-h-0 flex-1 flex-col px-6 pb-2 pt-2">
        <div className="mx-auto flex h-full min-h-0 w-full max-w-4xl flex-col gap-4">
          <div className="shrink-0 flex flex-col gap-1">
            <span
              className={`text-xs font-medium uppercase tracking-widest ${
                isDark ? "text-violet-400" : "text-violet-600"
              }`}
            >
              Contact
            </span>
            <h1
              className={`text-xl font-semibold tracking-tight md:text-2xl ${
                isDark ? "text-white" : "text-[#121212]"
              }`}
            >
              Get in Touch
            </h1>
            <p
              className={`hidden max-w-2xl text-sm leading-relaxed sm:block ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              Have a project in mind or want to say hello? Drop a message below.
            </p>
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-4 lg:flex-row lg:items-stretch">
            <form
              onSubmit={handleSubmit}
              className={`flex min-h-0 flex-1 flex-col gap-3 rounded-xl border p-4 md:p-5 lg:w-[65%] ${
                isDark
                  ? "border-neutral-800 bg-neutral-900/30"
                  : "border-neutral-200 bg-white/50"
              }`}
              noValidate
            >
              <div className="grid shrink-0 grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className={labelClass(isDark)}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className={fieldBase(isDark)}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className={labelClass(isDark)}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={fieldBase(isDark)}
                  />
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-1.5">
                <label htmlFor="contact-subject" className={labelClass(isDark)}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  className={fieldBase(isDark)}
                />
              </div>

              <div className="flex min-h-0 flex-1 flex-col gap-1.5">
                <label htmlFor="contact-message" className={labelClass(isDark)}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project, idea, or question..."
                  className={`${fieldBase(isDark)} min-h-0 flex-1 resize-none`}
                />
              </div>

              <button
                type="submit"
                className={`inline-flex w-full shrink-0 items-center justify-center gap-2 self-start rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                  isDark
                    ? "border-violet-500/30 bg-violet-500/10 text-violet-300 hover:border-violet-500/50 hover:bg-violet-500/15"
                    : "border-violet-400/35 bg-violet-50 text-violet-700 hover:border-violet-400/55 hover:bg-violet-100"
                }`}
              >
                <Send className="h-4 w-4" />
                Send message
              </button>
            </form>

            <aside
              className={`hidden shrink-0 flex-col gap-4 rounded-xl border p-4 h-fit md:p-5 lg:flex lg:w-[35%] ${
                isDark
                  ? "border-neutral-800 bg-neutral-900/30"
                  : "border-neutral-200 bg-white/50"
              }`}
            >
              <div className="flex flex-col gap-2">
                <p className={labelClass(isDark)}>Email</p>
                <a
                  href="mailto:sarthakkamble@0411@gmail.com"
                  className={`inline-flex items-center gap-2 text-sm font-medium leading-snug break-all transition-colors ${
                    isDark
                      ? "text-neutral-300 hover:text-violet-300"
                      : "text-neutral-700 hover:text-violet-600"
                  }`}
                >
                  <Mail className="h-4 w-4 shrink-0 text-violet-500" />
                  sarthakkamble@0411@gmail.com
                </a>
              </div>

              <div
                className={`flex flex-col gap-3 border-t pt-4 ${
                  isDark ? "border-neutral-800" : "border-neutral-200"
                }`}
              >
                <p className={labelClass(isDark)}>Social</p>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map(({ id, label, href, Icon }) => (
                    <a
                      key={id}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`footer-social-link ${
                        isDark
                          ? "footer-social-link--dark"
                          : "footer-social-link--light"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer compact />
    </div>
  );
};

export default Contact;
