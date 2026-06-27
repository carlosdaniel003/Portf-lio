// src\components\ui\Footer.tsx

import Link from "next/link";

import {
  ArrowUp,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const navigationLinks = [
  {
    label: "Início",
    href: "/#inicio",
  },
  {
    label: "Projetos",
    href: "/#projetos",
  },
  {
    label: "Soluções",
    href: "/#solucoes",
  },
  {
    label: "Sobre",
    href: "/#sobre",
  },
  {
    label: "Contato",
    href: "/#contato",
  },
] as const;

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/carlosdaniel003",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/carlosdaniel003",
    icon: Github,
  },
] as const;

const whatsappUrl =
  "https://wa.me/5592982890208?text=Ol%C3%A1%2C%20Carlos%20Daniel.%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%2C%20projeto%20ou%20oportunidade%20t%C3%A9cnica.";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-[color:var(--line-soft)]
        bg-[color:var(--bg-deepest)]
        text-[color:var(--text)]
      "
    >
      {/* =====================================================
          AMBIENTAÇÃO
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          soft-grid
          pointer-events-none
          absolute inset-0
          opacity-[0.16]

          [mask-image:linear-gradient(to_bottom,black,transparent_82%)]
          [-webkit-mask-image:linear-gradient(to_bottom,black,transparent_82%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-12rem]
          top-[-10rem]

          h-[34rem]
          w-[34rem]

          rounded-full
          bg-[color:var(--accent)]/[0.08]
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-14rem]
          right-[-10rem]

          h-[36rem]
          w-[36rem]

          rounded-full
          bg-[color:var(--accent-2)]/[0.07]
          blur-[140px]
        "
      />

      <div className="portfolio-container relative z-10">
        {/* ===================================================
            LINHA SUPERIOR
            =================================================== */}

        <div
          className="
            flex flex-col
            gap-5

            border-b
            border-[color:var(--line)]

            py-7

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-4">
            <span
              className="
                relative
                grid h-11 w-11
                shrink-0
                place-items-center

                rounded-full
                border
                border-[color:var(--accent)]/45

                bg-[color:var(--accent)]/10

                font-display
                text-sm
                font-bold
                tracking-[-0.05em]
                text-[color:var(--accent)]

                shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_14%,transparent)]
              "
            >
              CD

              <span
                aria-hidden="true"
                className="
                  absolute
                  -right-0.5
                  -top-0.5

                  h-2.5 w-2.5

                  rounded-full
                  border-2
                  border-[color:var(--bg-deepest)]

                  bg-[color:var(--accent)]

                  shadow-[0_0_12px_var(--accent)]
                "
              />
            </span>

            <div>
              <p
                className="
                  font-mono
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[color:var(--accent)]
                "
              >
                Portfolio system
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  font-bold
                  tracking-[-0.02em]
                  text-[color:var(--text)]
                "
              >
                Eletrônica · Software · Inteligência
              </p>
            </div>
          </div>

          <div
            className="
              flex items-center
              gap-3

              rounded-full
              border
              border-[color:var(--line)]

              bg-[color:var(--panel)]
              px-4 py-2

              backdrop-blur-xl
            "
          >
            <span
              className="
                h-2 w-2
                rounded-full
                bg-[color:var(--accent)]
                shadow-[0_0_14px_var(--accent)]
              "
            />

            <span
              className="
                font-mono
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[color:var(--muted)]
              "
            >
              Disponível para projetos e oportunidades
            </span>
          </div>
        </div>

        {/* ===================================================
            CONTEÚDO PRINCIPAL
            =================================================== */}

        <div
          className="
            grid gap-12
            py-14

            sm:py-16
            lg:grid-cols-[minmax(0,1.35fr)_minmax(180px,0.45fr)_minmax(240px,0.62fr)]
            lg:gap-14
            lg:py-20
          "
        >
          {/* Identidade */}
          <div>
            <p className="tech-label">
              Carlos Daniel / Manaus — AM
            </p>

            <h2
              className="
                mt-5
                max-w-[13ch]

                font-display
                text-4xl
                font-bold
                leading-[0.98]
                tracking-[-0.065em]
                text-[color:var(--text)]

                sm:text-5xl
                lg:text-6xl
              "
            >
              Tecnologia aplicada a
              <span className="text-gradient">
                {" "}
                oportunidades de melhoria.
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-2xl

                text-sm
                leading-7
                text-[color:var(--muted)]

                sm:text-base
                sm:leading-8
              "
            >
              Desenvolvedor de sistemas e técnico em eletrônica com atuação em
              software industrial, dashboards, automação, inteligência
              artificial, visão computacional e presença digital.
            </p>

            <div
              className="
                mt-8
                flex flex-wrap
                gap-3
              "
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group
                      inline-flex
                      min-h-11
                      items-center
                      gap-3

                      rounded-full
                      border
                      border-[color:var(--line)]

                      bg-[color:var(--panel)]
                      px-4

                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.13em]
                      text-[color:var(--text)]

                      transition
                      hover:border-[color:var(--accent)]
                      hover:bg-[color:var(--panel-strong)]
                    "
                  >
                    <Icon
                      size={15}
                      strokeWidth={2}
                      className="
                        text-[color:var(--accent)]
                      "
                    />

                    {social.label}

                    <ArrowUpRight
                      size={13}
                      strokeWidth={2.2}
                      className="
                        text-[color:var(--subtle)]
                        transition-transform
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:text-[color:var(--accent)]
                      "
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <p
              className="
                font-mono
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[color:var(--accent)]
              "
            >
              Navegação
            </p>

            <div
              className="
                mt-6
                divide-y
                divide-[color:var(--line-soft)]
                border-y
                border-[color:var(--line-soft)]
              "
            >
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    group
                    flex min-h-12
                    items-center
                    justify-between
                    gap-4

                    py-3

                    text-sm
                    font-semibold
                    text-[color:var(--muted)]

                    transition
                    hover:pl-1
                    hover:text-[color:var(--text)]
                  "
                >
                  <span>{link.label}</span>

                  <span
                    className="
                      font-mono
                      text-[8px]
                      tracking-[0.16em]
                      text-[color:var(--subtle)]

                      transition-colors
                      group-hover:text-[color:var(--accent)]
                    "
                  >
                    {String(index).padStart(2, "0")}
                  </span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Contato */}
          <div>
            <p
              className="
                font-mono
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[color:var(--accent)]
              "
            >
              Contato direto
            </p>

            <div
              className="
                mt-6
                divide-y
                divide-[color:var(--line-soft)]
                border-y
                border-[color:var(--line-soft)]
              "
            >
              <a
                href="mailto:contato@carlosdaniel.dev.br"
                className="
                  group
                  flex items-start
                  gap-4
                  py-5
                "
              >
                <span
                  className="
                    grid h-10 w-10
                    shrink-0
                    place-items-center

                    rounded-[0.9rem]
                    border
                    border-[color:var(--line)]

                    bg-[color:var(--panel)]
                    text-[color:var(--accent)]

                    transition
                    group-hover:border-[color:var(--accent)]
                  "
                >
                  <Mail
                    size={17}
                    strokeWidth={2}
                  />
                </span>

                <span className="min-w-0">
                  <span
                    className="
                      block
                      font-mono
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[color:var(--subtle)]
                    "
                  >
                    E-mail
                  </span>

                  <span
                    className="
                      mt-2 block
                      break-all
                      text-sm
                      font-semibold
                      text-[color:var(--text)]

                      transition-colors
                      group-hover:text-[color:var(--accent)]
                    "
                  >
                    contato@carlosdaniel.dev.br
                  </span>
                </span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  flex items-start
                  gap-4
                  py-5
                "
              >
                <span
                  className="
                    grid h-10 w-10
                    shrink-0
                    place-items-center

                    rounded-[0.9rem]
                    border
                    border-[color:var(--line)]

                    bg-[color:var(--panel)]
                    text-[color:var(--accent)]

                    transition
                    group-hover:border-[color:var(--accent)]
                  "
                >
                  <MessageCircle
                    size={17}
                    strokeWidth={2}
                  />
                </span>

                <span>
                  <span
                    className="
                      block
                      font-mono
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[color:var(--subtle)]
                    "
                  >
                    WhatsApp
                  </span>

                  <span
                    className="
                      mt-2 block
                      text-sm
                      font-semibold
                      text-[color:var(--text)]

                      transition-colors
                      group-hover:text-[color:var(--accent)]
                    "
                  >
                    +55 92 98289-0208
                  </span>
                </span>
              </a>

              <div
                className="
                  flex items-start
                  gap-4
                  py-5
                "
              >
                <span
                  className="
                    grid h-10 w-10
                    shrink-0
                    place-items-center

                    rounded-[0.9rem]
                    border
                    border-[color:var(--line)]

                    bg-[color:var(--panel)]
                    text-[color:var(--accent)]
                  "
                >
                  <MapPin
                    size={17}
                    strokeWidth={2}
                  />
                </span>

                <span>
                  <span
                    className="
                      block
                      font-mono
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[color:var(--subtle)]
                    "
                  >
                    Localização
                  </span>

                  <span
                    className="
                      mt-2 block
                      text-sm
                      font-semibold
                      text-[color:var(--text)]
                    "
                  >
                    Manaus, Amazonas — Brasil
                  </span>

                  <span
                    className="
                      mt-1 block
                      text-xs
                      text-[color:var(--muted)]
                    "
                  >
                    Atendimento local e remoto
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            WORDMARK
            =================================================== */}

        <div
          aria-hidden="true"
          className="
            overflow-hidden
            border-y
            border-[color:var(--line-soft)]
            py-5
          "
        >
          <p
            className="
              whitespace-nowrap

              font-display
              text-[clamp(3.3rem,10vw,9rem)]
              font-bold
              leading-[0.82]
              tracking-[-0.085em]
            "
            style={{
              color:
                "color-mix(in srgb, var(--text) 7%, transparent)",
            }}
          >
            CARLOS DANIEL
          </p>
        </div>

        {/* ===================================================
            LINHA LEGAL
            =================================================== */}

        <div
          className="
            flex flex-col
            gap-5
            py-7

            text-xs
            leading-5
            text-[color:var(--muted)]

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div
            className="
              flex flex-col
              gap-3

              sm:flex-row
              sm:items-center
              sm:gap-6
            "
          >
            <p>
              © {currentYear} Carlos Daniel. Todos os direitos reservados.
            </p>

            <nav
              aria-label="Links legais"
              className="
                flex flex-wrap
                gap-x-5
                gap-y-2
              "
            >
              <Link
                href="/privacidade"
                className="
                  transition
                  hover:text-[color:var(--accent)]
                "
              >
                Política de Privacidade
              </Link>

              <Link
                href="/termos"
                className="
                  transition
                  hover:text-[color:var(--accent)]
                "
              >
                Termos de Uso
              </Link>
            </nav>
          </div>

          <div
            className="
              flex flex-col
              gap-3

              sm:flex-row
              sm:items-center
              sm:gap-5
            "
          >
            <p className="flex items-center gap-2">
              <span
                className="
                  h-1.5 w-1.5
                  rounded-full
                  bg-[color:var(--accent)]
                  shadow-[0_0_10px_var(--accent)]
                "
              />

              Formulário protegido pelo Cloudflare Turnstile
            </p>

            <a
              href="#inicio"
              aria-label="Voltar ao início da página"
              className="
                group
                inline-flex
                h-10 w-10
                items-center
                justify-center

                rounded-full
                border
                border-[color:var(--line)]

                bg-[color:var(--panel)]
                text-[color:var(--text)]

                transition
                hover:border-[color:var(--accent)]
                hover:text-[color:var(--accent)]
              "
            >
              <ArrowUp
                size={16}
                strokeWidth={2.2}
                className="
                  transition-transform
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
