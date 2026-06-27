// src\components\sections\CaseStudies.tsx
"use client";

import ProjectImageModal from "@/components/ui/ProjectImageModal";
import { projectsData } from "@/data/portfolio";

import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Images,
} from "lucide-react";

import { useState } from "react";

type PortfolioProject = (typeof projectsData)[number];

type ImageModalState = {
  projectTitle: string;
  projectCategory: string;
  images: string[];
  initialIndex: number;
};

function getProjectImages(project: PortfolioProject) {
  return Array.from(
    new Set(
      [
        project.coverUrl,
        project.thumbnailUrl,
        ...(project.galleryUrls ?? []),
      ].filter(Boolean) as string[]
    )
  );
}

export default function CaseStudies() {
  const [selectedProjectId, setSelectedProjectId] = useState(
    projectsData[0].id
  );

  const [
    selectedGalleryImage,
    setSelectedGalleryImage,
  ] = useState<string | null>(null);

  const [imageModal, setImageModal] =
    useState<ImageModalState | null>(null);

  const selectedProject =
    projectsData.find(
      (project) => project.id === selectedProjectId
    ) ?? projectsData[0];

  const selectedProjectIndex = Math.max(
    0,
    projectsData.findIndex(
      (project) => project.id === selectedProject.id
    )
  );

  const galleryImages = Array.from(
    new Set(
      (
        selectedProject.galleryUrls ?? []
      ).filter(
        (image): image is string =>
          typeof image === "string" &&
          image.trim().length > 0
      )
    )
  );

  const currentGalleryImage =
    selectedGalleryImage &&
    galleryImages.includes(
      selectedGalleryImage
    )
      ? selectedGalleryImage
      : galleryImages[0] ?? null;

  const selectedCover =
    selectedProject.coverUrl ??
    selectedProject.thumbnailUrl ??
    "";

  function selectPreviousProject() {
    const previousIndex =
      selectedProjectIndex === 0
        ? projectsData.length - 1
        : selectedProjectIndex - 1;

    setSelectedProjectId(
      projectsData[previousIndex].id
    );
  }

  function selectNextProject() {
    const nextIndex =
      selectedProjectIndex ===
      projectsData.length - 1
        ? 0
        : selectedProjectIndex + 1;

    setSelectedProjectId(
      projectsData[nextIndex].id
    );
  }

  function openProjectImageModal(
    project: PortfolioProject,
    imageUrl?: string
  ) {
    const images =
      getProjectImages(project);

    if (images.length === 0) {
      return;
    }

    const requestedIndex = imageUrl
      ? images.indexOf(imageUrl)
      : 0;

    setImageModal({
      projectTitle: project.title,
      projectCategory:
        project.category,
      images,
      initialIndex:
        requestedIndex >= 0
          ? requestedIndex
          : 0,
    });
  }

  return (
    <>
      <section
        id="projetos"
        className="
          editorial-section
          relative
          scroll-mt-28
          overflow-hidden
        "
      >
        {/* Fundo da seção */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
          "
        >
          <div
            className="
              editorial-number
              absolute
              right-[-0.04em]
              top-[0.28em]
              opacity-50
            "
          >
            01
          </div>

          <div
            className="
              soft-dots
              absolute
              right-[-10rem]
              top-20
              h-[34rem]
              w-[34rem]
              opacity-35
            "
          />

          <div
            className="
              absolute
              bottom-[12%]
              left-[-12rem]
              h-[34rem]
              w-[34rem]
              rounded-full
              bg-[color:var(--accent-2)]/[0.055]
              blur-[135px]
            "
          />
        </div>

        <div
          className="
            portfolio-container
            relative z-10
          "
        >
          {/* Cabeçalho editorial */}
          <div
            className="
              mb-12
              grid gap-8
              border-b
              border-[color:var(--line-soft)]
              pb-8

              lg:grid-cols-[1fr_auto]
              lg:items-end

              xl:mb-16
            "
          >
            <div className="max-w-4xl">
              <div
                className="
                  mb-5
                  flex items-center
                  gap-3
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

                <p className="tech-label">
                  Projetos / sistemas aplicados
                </p>
              </div>

              <h2
                className="
                  section-title
                  max-w-[13ch]
                  text-[color:var(--text)]
                "
              >
                Projetos tratados como
                <span className="text-gradient">
                  {" "}protagonistas.
                </span>
              </h2>

              <p
                className="
                  section-description
                  mt-6
                "
              >
                Selecione um sistema para conhecer
                o problema, a solução construída,
                o impacto e as tecnologias usadas
                em cada case.
              </p>
            </div>

            <div
              className="
                flex items-center
                justify-between
                gap-5

                lg:flex-col
                lg:items-end
              "
            >
              <div
                className="
                  flex items-end
                  gap-2
                  font-mono
                "
              >
                <span
                  className="
                    text-4xl
                    font-semibold
                    tracking-[-0.08em]
                    text-[color:var(--text)]

                    sm:text-5xl
                  "
                >
                  {String(
                    selectedProjectIndex + 1
                  ).padStart(2, "0")}
                </span>

                <span
                  className="
                    pb-1
                    text-xs
                    font-semibold
                    tracking-[0.16em]
                    text-[color:var(--muted)]
                  "
                >
                  /{" "}
                  {String(
                    projectsData.length
                  ).padStart(2, "0")}
                </span>
              </div>

              <div
                className="
                  flex items-center
                  gap-2
                "
              >
                <button
                  type="button"
                  onClick={
                    selectPreviousProject
                  }
                  aria-label="Selecionar projeto anterior"
                  className="
                    grid h-11 w-11
                    place-items-center
                    rounded-full
                    border
                    border-[color:var(--line)]
                    bg-[color:var(--panel)]
                    text-[color:var(--muted)]

                    transition
                    hover:-translate-y-0.5
                    hover:border-[color:var(--accent)]
                    hover:text-[color:var(--accent)]
                  "
                >
                  <ArrowLeft size={17} />
                </button>

                <button
                  type="button"
                  onClick={
                    selectNextProject
                  }
                  aria-label="Selecionar próximo projeto"
                  className="
                    grid h-11 w-11
                    place-items-center
                    rounded-full
                    border
                    border-[color:var(--line)]
                    bg-[color:var(--panel)]
                    text-[color:var(--muted)]

                    transition
                    hover:-translate-y-0.5
                    hover:border-[color:var(--accent)]
                    hover:text-[color:var(--accent)]
                  "
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>

          {/* Seletor horizontal */}
          <div
            className="
              mb-7
              flex gap-3
              overflow-x-auto
              pb-3

              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
            role="tablist"
            aria-label="Projetos disponíveis"
          >
            {projectsData.map(
              (project, index) => {
                const isSelected =
                  project.id ===
                  selectedProject.id;

                return (
                  <button
                    key={project.id}
                    type="button"
                    role="tab"
                    aria-selected={
                      isSelected
                    }
                    aria-controls="selected-project-panel"
                    onClick={() =>
                      setSelectedProjectId(
                        project.id
                      )
                    }
                    className={`
                      group relative
                      min-w-[230px]
                      overflow-hidden
                      rounded-[1.45rem]
                      border
                      p-3
                      text-left

                      transition-all
                      duration-300

                      sm:min-w-[260px]

                      ${
                        isSelected
                          ? `
                            border-[color:var(--accent)]
                            bg-[color:var(--panel-raised)]
                            shadow-[0_18px_48px_color-mix(in_srgb,var(--accent)_13%,transparent)]
                          `
                          : `
                            border-[color:var(--line)]
                            bg-[color:var(--panel)]
                            hover:-translate-y-1
                            hover:border-[color:var(--line-strong)]
                            hover:bg-[color:var(--panel-strong)]
                          `
                      }
                    `}
                  >
                    <div
                      className={`
                        pointer-events-none
                        absolute inset-0
                        bg-gradient-to-br
                        ${project.accent}

                        transition-opacity
                        duration-300

                        ${
                          isSelected
                            ? "opacity-[0.13]"
                            : "opacity-0 group-hover:opacity-[0.07]"
                        }
                      `}
                    />

                    <div
                      className="
                        relative z-10
                        flex items-center
                        gap-3
                      "
                    >
                      <div
                        className="
                          relative
                          h-16 w-16
                          shrink-0
                          overflow-hidden
                          rounded-[1rem]
                          border
                          border-[color:var(--line)]
                          bg-[color:var(--bg-deep)]
                        "
                      >
                        {project.thumbnailUrl ? (
                          <img
                            src={
                              project.thumbnailUrl
                            }
                            alt=""
                            className="
                              h-full w-full
                              object-cover
                              transition-transform
                              duration-500
                              group-hover:scale-105
                            "
                          />
                        ) : (
                          <div
                            className={`
                              grid h-full w-full
                              place-items-center
                              bg-gradient-to-br
                              ${project.accent}
                            `}
                          >
                            <span
                              className="
                                font-display
                                text-lg
                                font-bold
                                text-white
                              "
                            >
                              {project.shortTitle
                                .slice(0, 2)
                                .toUpperCase()}
                            </span>
                          </div>
                        )}

                        <div
                          className="
                            absolute inset-0
                            bg-gradient-to-t
                            from-black/35
                            to-transparent
                          "
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div
                          className="
                            flex items-center
                            justify-between
                            gap-3
                          "
                        >
                          <span
                            className={`
                              font-mono
                              text-[8px]
                              font-semibold
                              uppercase
                              tracking-[0.18em]

                              ${
                                isSelected
                                  ? "text-[color:var(--accent)]"
                                  : "text-[color:var(--subtle)]"
                              }
                            `}
                          >
                            Project{" "}
                            {String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <span
                            className={`
                              h-1.5 w-1.5
                              rounded-full

                              ${
                                isSelected
                                  ? `
                                    bg-[color:var(--accent)]
                                    shadow-[0_0_12px_var(--accent)]
                                  `
                                  : `
                                    bg-[color:var(--line-strong)]
                                  `
                              }
                            `}
                          />
                        </div>

                        <h3
                          className="
                            mt-2 truncate
                            font-display
                            text-base
                            font-bold
                            tracking-[-0.035em]
                            text-[color:var(--text)]
                          "
                        >
                          {project.shortTitle}
                        </h3>

                        <p
                          className="
                            mt-1 truncate
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.12em]
                            text-[color:var(--muted)]
                          "
                        >
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`
                        absolute
                        bottom-0 left-1/2
                        h-[2px]
                        -translate-x-1/2
                        rounded-full
                        bg-[color:var(--accent)]
                        shadow-[0_0_12px_var(--accent)]

                        transition-all
                        duration-300

                        ${
                          isSelected
                            ? "w-[72%] opacity-100"
                            : "w-0 opacity-0"
                        }
                      `}
                    />
                  </button>
                );
              }
            )}
          </div>

          {/* Projeto selecionado */}
          <AnimatePresence mode="wait">
            <motion.article
              id="selected-project-panel"
              key={selectedProject.id}
              role="tabpanel"
              aria-live="polite"
              initial={{
                opacity: 0,
                y: 24,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -18,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 0.38,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                overflow-hidden
                rounded-[2rem]
                border
                border-[color:var(--line)]
                bg-[color:var(--panel)]
                shadow-[0_32px_100px_var(--shadow-deep)]

                sm:rounded-[2.5rem]
              "
            >
              {/* Palco principal */}
              <div
                className="
                  grid

                  lg:grid-cols-[minmax(0,1.22fr)_minmax(360px,0.78fr)]
                "
              >
                {/* Imagem principal */}
                <button
                  type="button"
                  onClick={() =>
                    openProjectImageModal(
                      selectedProject,
                      selectedCover
                    )
                  }
                  disabled={!selectedCover}
                  aria-label={`Expandir imagens do projeto ${selectedProject.shortTitle}`}
                  className="
                    group
                    relative
                    min-h-[390px]
                    overflow-hidden
                    text-left

                    disabled:cursor-default

                    sm:min-h-[500px]
                    lg:min-h-[610px]
                  "
                >
                  {selectedCover ? (
                    <motion.img
                      key={selectedCover}
                      src={selectedCover}
                      alt={
                        selectedProject.title
                      }
                      initial={{
                        opacity: 0,
                        scale: 1.035,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.55,
                      }}
                      className="
                        absolute inset-0
                        h-full w-full
                        object-cover

                        transition-transform
                        duration-700

                        group-hover:scale-[1.025]
                      "
                    />
                  ) : (
                    <div
                      className={`
                        absolute inset-0
                        bg-gradient-to-br
                        ${selectedProject.accent}
                        opacity-25
                      `}
                    />
                  )}

                  <div
                    className="
                      soft-grid
                      absolute inset-0
                      opacity-20
                    "
                  />

                  <div
                    className="
                      absolute inset-0

                      bg-[linear-gradient(180deg,rgba(4,16,18,0.08)_0%,rgba(4,16,18,0.18)_38%,rgba(4,16,18,0.92)_100%)]
                    "
                  />

                  <div
                    className="
                      absolute inset-x-0 top-0
                      flex items-start
                      justify-between
                      gap-4
                      p-5

                      sm:p-7
                    "
                  >
                    <span
                      className="
                        rounded-full
                        border
                        border-white/15
                        bg-black/35
                        px-4 py-2

                        font-mono
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-white/80

                        backdrop-blur-xl
                      "
                    >
                      {selectedProject.status}
                    </span>

                    {selectedCover && (
                      <span
                        className="
                          flex items-center
                          gap-2
                          rounded-full
                          border
                          border-white/15
                          bg-black/35
                          px-4 py-2

                          font-mono
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-white/75

                          opacity-0
                          backdrop-blur-xl
                          transition-opacity

                          group-hover:opacity-100
                        "
                      >
                        <Images size={13} />
                        Expandir
                      </span>
                    )}
                  </div>

                  <div
                    className="
                      absolute
                      bottom-0 left-0 right-0
                      p-6

                      sm:p-8
                      lg:p-10
                    "
                  >
                    <div
                      className="
                        mb-4
                        flex items-center
                        gap-3
                      "
                    >
                      <span
                        className="
                          font-mono
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.22em]
                          text-[color:var(--accent)]
                        "
                      >
                        Case{" "}
                        {String(
                          selectedProjectIndex +
                            1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span
                        aria-hidden="true"
                        className="
                          h-px w-10
                          bg-white/25
                        "
                      />

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-white/65
                        "
                      >
                        {selectedProject.category}
                      </span>
                    </div>

                    <h3
                      className="
                        max-w-[10ch]
                        font-display
                        text-5xl
                        font-bold
                        leading-[0.9]
                        tracking-[-0.07em]
                        text-white

                        sm:text-6xl
                        lg:text-7xl
                      "
                    >
                      {selectedProject.shortTitle}
                    </h3>
                  </div>
                </button>

                {/* Conteúdo principal */}
                <div
                  className="
                    relative
                    flex flex-col
                    justify-between
                    border-t
                    border-[color:var(--line)]

                    bg-[color:var(--panel-strong)]
                    p-6

                    sm:p-8

                    lg:border-l
                    lg:border-t-0
                    lg:p-9
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      right-[-5rem]
                      top-[-4rem]
                      h-52 w-52
                      rounded-full
                      bg-[color:var(--accent)]/10
                      blur-[70px]
                    "
                  />

                  <div className="relative z-10">
                    <div
                      className="
                        flex items-center
                        justify-between
                        gap-5
                      "
                    >
                      <p className="tech-label">
                        Case completo
                      </p>

                      <span
                        className="
                          font-mono
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-[color:var(--subtle)]
                        "
                      >
                        ID /
                        {selectedProject.id}
                      </span>
                    </div>

                    <h4
                      className="
                        mt-7
                        font-display
                        text-3xl
                        font-bold
                        leading-[1.02]
                        tracking-[-0.055em]
                        text-[color:var(--text)]

                        sm:text-4xl
                      "
                    >
                      {selectedProject.title}
                    </h4>

                    <p
                      className="
                        mt-6
                        text-base
                        leading-8
                        text-[color:var(--muted)]
                      "
                    >
                      {selectedProject.solution}
                    </p>

                    <div
                      className="
                        mt-8
                        flex flex-wrap
                        gap-2
                      "
                    >
                      {selectedProject.technologies
                        .slice(0, 5)
                        .map((technology) => (
                          <span
                            key={
                              technology
                            }
                            className="
                              rounded-full
                              border
                              border-[color:var(--line)]
                              bg-[color:var(--bg-deep)]/35
                              px-3 py-1.5

                              font-mono
                              text-[8px]
                              font-semibold
                              uppercase
                              tracking-[0.15em]
                              text-[color:var(--muted)]
                            "
                          >
                            {technology}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div
                    className="
                      relative z-10
                      mt-10
                      grid gap-3
                    "
                  >
                    <a
                      href={
                        selectedProject.repoUrl
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="
                        group
                        flex min-h-14
                        items-center
                        justify-between
                        gap-4
                        rounded-full
                        border
                        border-[color:var(--line-strong)]
                        px-5

                        text-xs
                        font-extrabold
                        uppercase
                        tracking-[0.14em]
                        text-[color:var(--text)]

                        transition
                        hover:border-[color:var(--accent)]
                        hover:bg-[color:var(--accent)]
                        hover:text-[color:var(--ink)]
                      "
                    >
                      <span
                        className="
                          flex items-center
                          gap-3
                        "
                      >
                        <Code2 size={17} />
                        Ver código
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="
                          transition-transform
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </a>

                    {selectedProject.demoUrl && (
                      <a
                        href={
                          selectedProject.demoUrl
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="
                          group
                          flex min-h-14
                          items-center
                          justify-between
                          gap-4
                          rounded-full
                          bg-[color:var(--accent)]
                          px-5

                          text-xs
                          font-extrabold
                          uppercase
                          tracking-[0.14em]
                          text-[color:var(--ink)]

                          shadow-[0_16px_42px_color-mix(in_srgb,var(--accent)_20%,transparent)]

                          transition
                          hover:-translate-y-0.5
                          hover:bg-[color:var(--accent-hover)]
                        "
                      >
                        <span
                          className="
                            flex items-center
                            gap-3
                          "
                        >
                          <ExternalLink
                            size={17}
                          />
                          Abrir sistema
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="
                            transition-transform
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                          "
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Problema, solução e impacto */}
              <div
                className="
                  grid
                  border-t
                  border-[color:var(--line)]

                  md:grid-cols-3
                "
              >
                {[
                  {
                    index: "01",
                    label: "Problema",
                    content:
                      selectedProject.problem,
                  },
                  {
                    index: "02",
                    label: "Solução",
                    content:
                      selectedProject.solution,
                  },
                  {
                    index: "03",
                    label: "Impacto",
                    content:
                      selectedProject.impact,
                  },
                ].map(
                  (
                    item,
                    index
                  ) => (
                    <div
                      key={item.label}
                      className={`
                        relative
                        min-h-[230px]
                        p-6

                        sm:p-8

                        ${
                          index > 0
                            ? `
                              border-t
                              border-[color:var(--line)]
                              md:border-l
                              md:border-t-0
                            `
                            : ""
                        }
                      `}
                    >
                      <div
                        className="
                          mb-8
                          flex items-center
                          justify-between
                          gap-4
                        "
                      >
                        <span
                          className="
                            font-mono
                            text-[9px]
                            font-semibold
                            tracking-[0.2em]
                            text-[color:var(--accent)]
                          "
                        >
                          {item.index}
                        </span>

                        <span
                          className="
                            h-px w-12
                            bg-[color:var(--line-strong)]
                          "
                        />
                      </div>

                      <h5
                        className="
                          font-display
                          text-xl
                          font-bold
                          tracking-[-0.04em]
                          text-[color:var(--text)]
                        "
                      >
                        {item.label}
                      </h5>

                      <p
                        className="
                          mt-4
                          text-sm
                          leading-7
                          text-[color:var(--muted)]
                        "
                      >
                        {item.content}
                      </p>
                    </div>
                  )
                )}
              </div>

              {/* Destaques e stack */}
              <div
                className="
                  grid
                  border-t
                  border-[color:var(--line)]

                  lg:grid-cols-[1.2fr_0.8fr]
                "
              >
                <div
                  className="
                    p-6

                    sm:p-8
                    lg:p-10
                  "
                >
                  <div
                    className="
                      mb-7
                      flex items-center
                      justify-between
                      gap-4
                    "
                  >
                    <div>
                      <p className="tech-label">
                        Recursos principais
                      </p>

                      <h5
                        className="
                          mt-3
                          font-display
                          text-2xl
                          font-bold
                          tracking-[-0.045em]
                          text-[color:var(--text)]
                        "
                      >
                        O que este sistema entrega.
                      </h5>
                    </div>

                    <span
                      className="
                        hidden
                        font-mono
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[color:var(--subtle)]

                        sm:block
                      "
                    >
                      Features /
                      {String(
                        selectedProject
                          .highlights
                          .length
                      ).padStart(2, "0")}
                    </span>
                  </div>

                  <ul
                    className="
                      grid gap-px
                      overflow-hidden
                      rounded-[1.35rem]
                      border
                      border-[color:var(--line-soft)]
                      bg-[color:var(--line-soft)]

                      sm:grid-cols-2
                    "
                  >
                    {selectedProject.highlights.map(
                      (
                        highlight,
                        index
                      ) => (
                        <li
                          key={highlight}
                          className="
                            flex min-h-24
                            items-start
                            gap-4
                            bg-[color:var(--panel-strong)]
                            p-5
                          "
                        >
                          <span
                            className="
                              mt-0.5
                              font-mono
                              text-[8px]
                              font-semibold
                              tracking-[0.18em]
                              text-[color:var(--accent)]
                            "
                          >
                            {String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <span
                            className="
                              text-sm
                              font-semibold
                              leading-6
                              text-[color:var(--text)]
                            "
                          >
                            {highlight}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div
                  className="
                    border-t
                    border-[color:var(--line)]
                    bg-[color:var(--bg-deep)]/22
                    p-6

                    sm:p-8

                    lg:border-l
                    lg:border-t-0
                    lg:p-10
                  "
                >
                  <p className="tech-label">
                    Stack técnica
                  </p>

                  <h5
                    className="
                      mt-3
                      font-display
                      text-2xl
                      font-bold
                      tracking-[-0.045em]
                      text-[color:var(--text)]
                    "
                  >
                    Tecnologias aplicadas.
                  </h5>

                  <div
                    className="
                      mt-7
                      flex flex-wrap
                      gap-2
                    "
                  >
                    {selectedProject.technologies.map(
                      (
                        technology,
                        index
                      ) => (
                        <span
                          key={technology}
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[color:var(--line)]
                            bg-[color:var(--panel)]
                            px-3 py-2
                          "
                        >
                          <span
                            className="
                              font-mono
                              text-[7px]
                              font-semibold
                              tracking-[0.16em]
                              text-[color:var(--accent)]
                            "
                          >
                            {String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <span
                            className="
                              text-[10px]
                              font-bold
                              uppercase
                              tracking-[0.12em]
                              text-[color:var(--muted)]
                            "
                          >
                            {technology}
                          </span>
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Galeria */}
              {galleryImages.length > 0 && (
                <div
                  className="
                    border-t
                    border-[color:var(--line)]
                    p-6

                    sm:p-8
                    lg:p-10
                  "
                >
                  <div
                    className="
                      mb-7
                      flex flex-col
                      justify-between
                      gap-5

                      sm:flex-row
                      sm:items-end
                    "
                  >
                    <div>
                      <p className="tech-label">
                        Interface em uso real
                      </p>

                      <h5
                        className="
                          mt-3
                          font-display
                          text-3xl
                          font-bold
                          tracking-[-0.05em]
                          text-[color:var(--text)]
                        "
                      >
                        Screenshots do sistema.
                      </h5>
                    </div>

                    <div
                      className="
                        flex items-center
                        gap-2
                        rounded-full
                        border
                        border-[color:var(--line)]
                        bg-[color:var(--panel)]
                        px-4 py-2

                        font-mono
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[color:var(--muted)]
                      "
                    >
                      <Images size={14} />

                      {galleryImages.length} imagem
                      {galleryImages.length > 1
                        ? "s"
                        : ""}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (!currentGalleryImage) {
                        return;
                      }

                      openProjectImageModal(
                        selectedProject,
                        currentGalleryImage
                      );
                    }}
                    className="
                      group
                      relative
                      w-full
                      overflow-hidden
                      rounded-[1.6rem]
                      border
                      border-[color:var(--line)]
                      bg-[color:var(--bg-deep)]
                      text-left
                    "
                  >
                    <AnimatePresence mode="wait">
                      {currentGalleryImage && (
                        <motion.img
                          key={currentGalleryImage}
                          src={currentGalleryImage}
                        alt={`${selectedProject.shortTitle} — captura da interface`}
                        initial={{
                          opacity: 0,
                          scale: 1.02,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.985,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                          max-h-[560px]
                          w-full
                          object-contain
                        "
                      />
                    )}
                  </AnimatePresence>

                    <span
                      className="
                        pointer-events-none
                        absolute
                        right-4 top-4

                        flex items-center
                        gap-2
                        rounded-full
                        border
                        border-white/15
                        bg-black/45
                        px-3 py-2

                        font-mono
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-white

                        opacity-0
                        backdrop-blur-xl
                        transition-opacity

                        group-hover:opacity-100
                      "
                    >
                      <Images size={13} />
                      Expandir
                    </span>
                  </button>

                  {galleryImages.length > 1 && (
                    <div
                      className="
                        mt-4
                        flex gap-3
                        overflow-x-auto
                        pb-2

                        [scrollbar-width:none]
                        [&::-webkit-scrollbar]:hidden
                      "
                    >
                      {galleryImages.map(
                        (
                          imageUrl,
                          index
                        ) => {
                          const isActive =
                            currentGalleryImage ===
                            imageUrl;

                          return (
                            <button
                              key={
                                imageUrl
                              }
                              type="button"
                              onClick={() =>
                                setSelectedGalleryImage(
                                  imageUrl
                                )
                              }
                              aria-label={`Selecionar screenshot ${index + 1}`}
                              className={`
                                relative
                                h-24
                                min-w-[150px]
                                overflow-hidden
                                rounded-[1rem]
                                border
                                p-1

                                transition

                                ${
                                  isActive
                                    ? `
                                      border-[color:var(--accent)]
                                      bg-[color:var(--accent)]/10
                                      shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_18%,transparent)]
                                    `
                                    : `
                                      border-[color:var(--line)]
                                      bg-[color:var(--panel)]
                                      hover:border-[color:var(--line-strong)]
                                    `
                                }
                              `}
                            >
                              <img
                                src={imageUrl}
                                alt=""
                                className="
                                  h-full w-full
                                  rounded-[0.75rem]
                                  object-cover
                                "
                              />

                              <span
                                className="
                                  absolute
                                  left-2 top-2
                                  rounded-full
                                  bg-black/55
                                  px-2 py-1

                                  font-mono
                                  text-[7px]
                                  font-semibold
                                  text-white

                                  backdrop-blur-xl
                                "
                              >
                                {String(
                                  index + 1
                                ).padStart(
                                  2,
                                  "0"
                                )}
                              </span>
                            </button>
                          );
                        }
                      )}
                    </div>
                  )}
                </div>
              )}
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      <ProjectImageModal
        open={Boolean(imageModal)}
        projectTitle={
          imageModal?.projectTitle ?? ""
        }
        projectCategory={
          imageModal?.projectCategory ??
          ""
        }
        images={
          imageModal?.images ?? []
        }
        initialIndex={
          imageModal?.initialIndex ?? 0
        }
        onClose={() =>
          setImageModal(null)
        }
      />
    </>
  );
}
