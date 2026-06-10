import { stackData } from "@/data/portfolio";

const workflow = [
  "Entendo o problema real da operação",
  "Desenho uma solução visual e simples de usar",
  "Desenvolvo front-end, back-end e banco de dados",
  "Valido com dados, imagens e cenários reais",
];

export default function Stack() {
  return (
    <section id="stack" className="relative py-24">
      <div className="portfolio-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[color:var(--accent)]">
            Stack & Método
          </p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-[color:var(--text)] sm:text-5xl">
            Tecnologia com contexto técnico e visão de operação.
          </h2>
          <p className="mt-6 text-sm leading-7 text-[color:var(--muted)]">
            Minha base técnica em eletrônica ajuda a conectar software com problemas físicos,
            processos industriais, qualidade, inspeção e rotina de fábrica.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="glass-card rounded-[2rem] p-6 sm:p-8">
            <h3 className="mb-5 text-xl font-black text-[color:var(--text)]">Tecnologias</h3>
            <div className="flex flex-wrap gap-3">
              {stackData.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[color:var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-6 sm:p-8">
            <h3 className="mb-5 text-xl font-black text-[color:var(--text)]">Como eu construo</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {workflow.map((item, index) => (
                <div key={item} className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[color:var(--accent)]">
                    Etapa 0{index + 1}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[color:var(--text)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
