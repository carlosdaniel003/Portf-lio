// src/components/sections/Contact.tsx
"use client";

import TurnstileWidget from "@/components/ui/TurnstileWidget";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import Link from "next/link";

import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Code2,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Send,
  ShieldCheck,
} from "lucide-react";

import {
  type FormEvent,
  useCallback,
  useRef,
  useState,
} from "react";

const whatsappUrl =
  "https://wa.me/5592982890208?text=Ol%C3%A1%2C%20Carlos%20Daniel.%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20profissional%2C%20colabora%C3%A7%C3%A3o%20ou%20projeto.";

const professionalSubjects = [
  "Oportunidade profissional",
  "Recrutamento",
  "Colaboração técnica",
  "Dúvida sobre projeto",
  "Networking",
  "Outro",
] as const;

const inputClassName = `
  w-full rounded-[1.15rem]
  border border-[color:var(--line)]
  bg-[color:var(--bg-deep)]/55
  px-4 py-3.5
  text-sm font-semibold
  text-[color:var(--text)]
  outline-none transition-all duration-200
  placeholder:text-[color:var(--muted)]/55
  hover:border-[color:var(--line-strong)]
  focus:border-[color:var(--accent)]
  focus:bg-[color:var(--bg-deep)]/75
  focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_10%,transparent)]
`;

const labelClassName = `
  font-mono text-[8px]
  font-semibold uppercase
  tracking-[0.18em]
  text-[color:var(--muted)]
`;

const revealTransition = {
  duration: 0.58,
  ease: [0.22, 1, 0.36, 1] as const,
};

type SubmitStatus =
  | "idle"
  | "sending"
  | "success"
  | "error";

const contactReasons = [
  {
    icon: BriefcaseBusiness,
    title: "Oportunidades",
    description:
      "Vagas, processos seletivos e conversas sobre atuação profissional.",
  },
  {
    icon: Network,
    title: "Colaborações",
    description:
      "Projetos técnicos, pesquisa, desenvolvimento e troca de conhecimento.",
  },
  {
    icon: Code2,
    title: "Projetos",
    description:
      "Dúvidas sobre sistemas, repositórios e soluções apresentadas no portfólio.",
  },
] as const;

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const formContainerRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken("");
  }, []);

  const handleTurnstileError = useCallback(() => {
    setTurnstileToken("");
    setSubmitStatus("error");
    setStatusMessage(
      "Não foi possível concluir a verificação de segurança."
    );
  }, []);

  function focusContactForm() {
    formContainerRef.current?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "center",
    });

    window.setTimeout(
      () => nameInputRef.current?.focus(),
      shouldReduceMotion ? 0 : 450
    );
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const privacyAccepted =
      formData.get("privacy") === "on";

    if (!turnstileToken) {
      setSubmitStatus("error");
      setStatusMessage(
        "Conclua a verificação de segurança."
      );
      return;
    }

    if (!privacyAccepted) {
      setSubmitStatus("error");
      setStatusMessage(
        "Confirme que está ciente da Política de Privacidade."
      );
      return;
    }

    setSubmitStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          website: formData.get("website"),
          turnstileToken,
          privacyAccepted,
        }),
      });

      const result = (await response
        .json()
        .catch(() => null)) as
        | {
            success?: boolean;
            message?: string;
          }
        | null;

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.message ||
            "Não foi possível enviar a mensagem."
        );
      }

      form.reset();
      setSubmitStatus("success");
      setStatusMessage(
        "Mensagem enviada com sucesso. Responderei pelo e-mail informado."
      );
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar a mensagem."
      );
    } finally {
      setTurnstileToken("");
      setTurnstileResetKey(
        (current) => current + 1
      );
    }
  }

  return (
    <section
      id="contato"
      className="relative scroll-mt-28 overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="editorial-number absolute right-[-0.04em] top-[0.03em] opacity-55">
          04
        </div>
        <div className="soft-grid absolute inset-x-0 bottom-0 h-[55rem] opacity-20 [mask-image:linear-gradient(to_top,black,transparent_88%)] [-webkit-mask-image:linear-gradient(to_top,black,transparent_88%)]" />
        <div className="absolute bottom-[-18rem] left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-[color:var(--accent)]/10 blur-[160px]" />
        <div className="absolute left-[-15rem] top-[34%] h-[34rem] w-[34rem] rounded-full bg-[color:var(--accent-2)]/10 blur-[145px]" />
      </div>

      <div className="portfolio-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={revealTransition}
          className="grid gap-10 border-b border-[color:var(--line-soft)] pb-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)] lg:items-end lg:pb-16"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">
                Contact / 04
              </span>
              <span
                aria-hidden="true"
                className="h-px w-12 bg-gradient-to-r from-[color:var(--accent)] to-transparent"
              />
            </div>

            <h2 className="section-title max-w-[13ch] text-[color:var(--text)]">
              Vamos iniciar uma
              <span className="text-gradient"> conversa profissional.</span>
            </h2>
          </div>

          <div className="lg:border-l lg:border-[color:var(--line)] lg:pl-10">
            <p className="text-base leading-8 text-[color:var(--muted)] sm:text-lg sm:leading-9">
              Entre em contato sobre oportunidades, recrutamento, colaboração
              técnica, networking ou algum projeto apresentado no portfólio.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              <span className="flex items-center gap-2 font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                <Clock3 size={13} className="text-[color:var(--accent)]" />
                Retorno direto
              </span>
              <span className="flex items-center gap-2 font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                <ShieldCheck size={13} className="text-[color:var(--accent-2)]" />
                Dados protegidos
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[minmax(300px,0.4fr)_minmax(0,0.6fr)] lg:items-start xl:gap-12">
          <motion.aside
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              ...revealTransition,
              delay: 0.08,
            }}
            className="relative"
          >
            <div className="lg:sticky lg:top-32">
              <div className="relative overflow-hidden rounded-[2.4rem] border border-[color:var(--line-strong)] bg-[color:var(--panel-strong)] p-7 shadow-[0_30px_90px_var(--shadow-deep)] sm:p-9">
                <div
                  aria-hidden="true"
                  className="soft-grid pointer-events-none absolute inset-0 opacity-20"
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-5">
                    <div className="grid h-14 w-14 place-items-center rounded-[1.15rem] border border-[color:var(--accent)]/45 bg-[color:var(--accent)]/10 text-[color:var(--accent)]">
                      <MessageCircle size={24} strokeWidth={1.9} />
                    </div>
                    <span className="font-display text-6xl font-bold tracking-[-0.09em] text-[color:var(--text)]/10">
                      01
                    </span>
                  </div>

                  <p className="mt-8 tech-label">
                    Canal mais rápido
                  </p>
                  <h3 className="mt-4 max-w-[12ch] font-display text-4xl font-bold leading-[0.98] tracking-[-0.06em] text-[color:var(--text)] sm:text-5xl">
                    Comece pelo contexto.
                  </h3>
                  <p className="mt-6 text-sm leading-7 text-[color:var(--muted)]">
                    Apresente a oportunidade, colaboração ou dúvida. Para serviços
                    de websites e landing pages, use o site de demonstrações e
                    planos apresentado anteriormente.
                  </p>

                  <div className="mt-8 grid gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="primary-action group w-full"
                    >
                      <MessageCircle size={17} strokeWidth={2.2} />
                      Falar no WhatsApp
                      <ArrowRight
                        size={16}
                        strokeWidth={2.4}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>

                    <button
                      type="button"
                      onClick={focusContactForm}
                      className="secondary-action group w-full"
                    >
                      <Mail size={17} strokeWidth={2.2} />
                      Usar formulário
                      <ArrowRight
                        size={16}
                        strokeWidth={2.4}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 divide-y divide-[color:var(--line-soft)] border-y border-[color:var(--line)]">
                {contactReasons.map((reason) => {
                  const Icon = reason.icon;

                  return (
                    <div
                      key={reason.title}
                      className="grid grid-cols-[42px_minmax(0,1fr)] gap-4 py-5"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-[0.9rem] border border-[color:var(--line)] bg-[color:var(--panel)] text-[color:var(--accent)]">
                        <Icon size={16} strokeWidth={2} />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[color:var(--text)]">
                          {reason.title}
                        </p>
                        <p className="mt-1 text-xs leading-6 text-[color:var(--muted)]">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-[color:var(--muted)]">
                <MapPin size={16} className="text-[color:var(--accent)]" />
                Manaus, AM — Brasil
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              ...revealTransition,
              delay: 0.14,
            }}
          >
            <div
              ref={formContainerRef}
              className="relative overflow-hidden rounded-[2.6rem] border border-[color:var(--line-strong)] bg-[color:var(--panel-strong)] shadow-[0_36px_110px_var(--shadow-deep)]"
            >
              <div
                aria-hidden="true"
                className="soft-grid pointer-events-none absolute inset-0 opacity-20"
              />

              <div className="relative z-10 border-b border-[color:var(--line)] p-7 sm:p-9 lg:p-10">
                <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="tech-label">
                      Professional contact
                    </p>
                    <h3 className="mt-4 max-w-[16ch] font-display text-3xl font-bold leading-[1] tracking-[-0.055em] text-[color:var(--text)] sm:text-4xl lg:text-5xl">
                      Apresente o motivo do contato.
                    </h3>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
                      A mensagem será enviada diretamente pelo site para o meu
                      e-mail profissional.
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_14px_var(--accent)]" />
                    <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.17em] text-[color:var(--muted)]">
                      Form online
                    </span>
                  </div>
                </div>
              </div>

              <form
                className="relative z-10 grid gap-0"
                onSubmit={handleSubmit}
              >
                <fieldset className="border-b border-[color:var(--line)] p-7 sm:p-9 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-[125px_minmax(0,1fr)]">
                    <legend className="flex items-start gap-3">
                      <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[color:var(--accent)]">
                        01
                      </span>
                      <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                        Identificação
                      </span>
                    </legend>

                    <div className="grid gap-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <label className="grid gap-2.5">
                          <span className={labelClassName}>Nome</span>
                          <input
                            ref={nameInputRef}
                            type="text"
                            name="name"
                            autoComplete="name"
                            required
                            minLength={2}
                            maxLength={80}
                            placeholder="Seu nome"
                            className={inputClassName}
                          />
                        </label>

                        <label className="grid gap-2.5">
                          <span className={labelClassName}>E-mail</span>
                          <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                            maxLength={160}
                            placeholder="voce@empresa.com"
                            className={inputClassName}
                          />
                        </label>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <label className="grid gap-2.5">
                          <span className={labelClassName}>
                            Empresa ou organização
                          </span>
                          <input
                            type="text"
                            name="company"
                            autoComplete="organization"
                            maxLength={120}
                            placeholder="Opcional"
                            className={inputClassName}
                          />
                        </label>

                        <label className="grid gap-2.5">
                          <span className={labelClassName}>
                            Assunto
                          </span>
                          <select
                            name="subject"
                            required
                            defaultValue=""
                            className={inputClassName}
                          >
                            <option value="" disabled>
                              Selecione
                            </option>
                            {professionalSubjects.map((subject) => (
                              <option key={subject} value={subject}>
                                {subject}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="border-b border-[color:var(--line)] p-7 sm:p-9 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-[125px_minmax(0,1fr)]">
                    <legend className="flex items-start gap-3">
                      <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[color:var(--accent)]">
                        02
                      </span>
                      <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                        Mensagem
                      </span>
                    </legend>

                    <label className="grid gap-2.5">
                      <span className={labelClassName}>Contexto</span>
                      <textarea
                        name="message"
                        required
                        minLength={20}
                        maxLength={3000}
                        rows={7}
                        placeholder="Explique brevemente a oportunidade, colaboração, dúvida ou motivo do contato."
                        className={`${inputClassName} min-h-48 resize-y`}
                      />
                      <span className="text-xs leading-5 text-[color:var(--subtle)]">
                        Inclua as informações necessárias para que eu compreenda o
                        contexto e possa responder de forma objetiva.
                      </span>
                    </label>
                  </div>
                </fieldset>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[9999px] opacity-0"
                >
                  <label>
                    Não preencha este campo
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>

                <fieldset className="p-7 sm:p-9 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-[125px_minmax(0,1fr)]">
                    <legend className="flex items-start gap-3">
                      <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[color:var(--accent)]">
                        03
                      </span>
                      <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                        Segurança
                      </span>
                    </legend>

                    <div className="grid gap-5">
                      <div className="grid gap-2.5">
                        <span className={labelClassName}>
                          Verificação de segurança
                        </span>
                        <div className="overflow-hidden rounded-[1.15rem] border border-[color:var(--line)] bg-[color:var(--bg-deep)]/45 p-4">
                          <TurnstileWidget
                            key={turnstileResetKey}
                            onVerify={handleTurnstileVerify}
                            onExpire={handleTurnstileExpire}
                            onError={handleTurnstileError}
                          />
                        </div>
                      </div>

                      <label className="flex items-start gap-3 rounded-[1.15rem] border border-[color:var(--line)] bg-[color:var(--bg-deep)]/45 p-4 text-sm leading-6 text-[color:var(--muted)]">
                        <input
                          type="checkbox"
                          name="privacy"
                          required
                          className="mt-1 h-4 w-4 shrink-0 accent-[var(--accent)]"
                        />
                        <span>
                          Estou ciente da{" "}
                          <Link
                            href="/privacidade"
                            className="font-bold text-[color:var(--accent)] underline decoration-[color:var(--accent)]/35 underline-offset-4"
                          >
                            Política de Privacidade
                          </Link>
                          .
                        </span>
                      </label>

                      <button
                        type="submit"
                        disabled={submitStatus === "sending"}
                        className="primary-action group w-full disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {submitStatus === "sending" ? (
                          <Loader2
                            size={18}
                            className="animate-spin"
                          />
                        ) : (
                          <Send size={17} strokeWidth={2.2} />
                        )}
                        {submitStatus === "sending"
                          ? "Enviando mensagem"
                          : "Enviar mensagem"}
                        {submitStatus !== "sending" && (
                          <ArrowRight
                            size={16}
                            strokeWidth={2.4}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        )}
                      </button>

                      <AnimatePresence mode="wait">
                        {statusMessage && (
                          <motion.div
                            key={`${submitStatus}-${statusMessage}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            className={`flex items-start gap-3 rounded-[1.15rem] border p-4 text-sm leading-6 ${
                              submitStatus === "success"
                                ? "border-[color:var(--accent)]/35 bg-[color:var(--accent)]/10 text-[color:var(--text)]"
                                : "border-red-400/30 bg-red-400/10 text-red-100"
                            }`}
                          >
                            {submitStatus === "success" ? (
                              <CheckCircle2
                                size={18}
                                className="mt-0.5 shrink-0 text-[color:var(--accent)]"
                              />
                            ) : (
                              <AlertCircle
                                size={18}
                                className="mt-0.5 shrink-0 text-red-300"
                              />
                            )}
                            <span>{statusMessage}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[color:var(--line-soft)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="mailto:contato@carlosdaniel.dev.br"
            className="group flex items-center gap-3 text-sm font-bold text-[color:var(--text)]"
          >
            <Mail size={16} className="text-[color:var(--accent)]" />
            contato@carlosdaniel.dev.br
            <ArrowUpRight
              size={15}
              className="text-[color:var(--subtle)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <p className="text-xs leading-6 text-[color:var(--muted)]">
            Para contratar websites e landing pages, acesse demos.carlosdaniel.dev.br.
          </p>
        </div>
      </div>
    </section>
  );
}
