import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  MessageCircle,
  Check,
  Play,
  Target,
  Wand2,
  Globe,
  Video,
  LineChart,
  Database,
  BarChart3,
  FileBarChart,
  Rocket,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import yuriyUrl from "@/assets/yuriy.png";
import logoUrl from "@/assets/markvision-logo.png";
import videoUrl from "@/assets/hero-video.mp4";
import posterUrl from "@/assets/hero-video-poster.jpg";
import { OG_IMAGE_URL, SITE_URL } from "@/lib/site";
import { trackMetaLead } from "@/lib/meta-pixel";

const WHATSAPP_URL =
  "https://wa.me/77472842595?text=" +
  encodeURIComponent(
    "Юрий, привет! Хочу получить демонстрацию MarkVision AI."
  );

const TITLE = "MarkVision AI — виртуальный ассистент маркетолога";
const DESCRIPTION =
  "Автоматизируйте создание рекламы, контента, отчётов и рутинных задач. Верните до 10 часов в неделю, возьмите ещё 2–3 клиентов и снова занимайтесь стратегией, а не кликами в Ads Manager.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#FFFFFF" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "MarkVision AI" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1280" },
      { property: "og:image:height", content: "800" },
      { property: "og:image:alt", content: "MarkVision AI — виртуальный ассистент маркетолога" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", type: "image/png", href: logoUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Landing,
});

const HERO_FEATURES = [
  "AI-Таргетолог",
  "Контент-завод",
  "Автоматические отчёты",
  "Сквозная аналитика",
  "Запуск рекламы за 1 минуту",
];

const PAINS = [
  "Собираете десятки объявлений вручную.",
  "Каждый вечер собираете отчёты.",
  "Проверяете рекламу даже ночью.",
  "Не можете взять новых клиентов — в сутках просто нет часов.",
  "Креативы заканчиваются быстрее, чем идеи.",
  "Работаете больше — а доход почти не растёт.",
];

const ASSISTANT_DOES = [
  "создаёт и запускает рекламу",
  "делает отчёты для клиентов",
  "создаёт фото и видео креативы",
  "собирает сайты за 5 минут",
  "следит и оптимизирует рекламу",
  "предлагает гипотезы и идеи",
];

const TRANSFORM: Array<{ before: string; after: string }> = [
  { before: "Сам собирал отчёты", after: "Отчёты уходят автоматически" },
  { before: "Ждал дизайнера несколько дней", after: "контент готов\nза 5 минут" },
  { before: "Час запускал рекламу", after: "Запуск в пару кликов" },
  { before: "Работал по вечерам", after: "Освободили вечера для семьи" },
  { before: "5 клиентов — потолок", after: "7–8 клиентов без перегруза" },
  { before: "Держал команду\u00a0\nв штате", after: "Одна система вместо целой команды" },
];

const MODULES: Array<{ icon: typeof Target; title: string; text: string }> = [
  { icon: Target, title: "AI-Таргетолог", text: "Запускает и оптимизирует рекламу 24/7" },
  { icon: Wand2, title: "Контент-завод", text: "Фото и видео креативы на месяц вперёд." },
  { icon: Globe, title: "Создание сайтов", text: "Лендинги под кампанию за 5–10 минут." },
  { icon: Video, title: "Видео AI", text: "Для рекламы без съёмок и монтажа." },
  { icon: LineChart, title: "AI-Аналитик", text: "Гипотезы и выводы, а не просто цифры." },
  { icon: Database, title: "CRM", text: "Лиды и клиенты в одном окне." },
  { icon: BarChart3, title: "Сквозная аналитика", text: "От клика до денег в кассе." },
  { icon: FileBarChart, title: "Автоматические отчёты", text: "Отчёт клиенту каждое утро и вечер — без вашего участия." },
  { icon: Rocket, title: "Управление рекламой", text: "Все кабинеты и клиенты на одном экране" },
];

const OBJECTIONS: Array<{ q: string; a: string }> = [
  {
    q: "Я уже работаю через Google Таблицы",
    a: "Отлично. MarkVision AI не заменяет вашу систему — он убирает из неё ручную работу.",
  },
  {
    q: "Я боюсь потерять контроль",
    a: "Все решения остаются за вами. Система только выполняет действия, которые вы утвердили.",
  },
  {
    q: "А Facebook не забанит?",
    a: "Работа идёт через официальные интеграции рекламных кабинетов. Никаких серых схем.",
  },
  {
    q: "Мне дорого",
    a: "Сколько стоит один потерянный клиент? Или 40 часов рутины каждый месяц, которые вы не можете продать?",
  },
];

const CASES: Array<{ label: string; before: string; after: string }> = [
  { label: "Отчёты", before: "7 часов в неделю", after: "15 минут" },
  { label: "Клиенты", before: "5 проектов — потолок", after: "8 проектов спокойно" },
  { label: "Команда", before: "Дизайнер + ассистент", after: "Одна система" },
  { label: "Запуск рекламы", before: "1 час на кампанию", after: "2–3 минуты" },
];

const VALUE_STACK = [
  "свободное время",
  "возможность поднять чек",
  "возможность брать больше клиентов",
  "возможность тестировать больше гипотез",
  "меньше выгорания",
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="/"
      className={"inline-flex items-center gap-2 " + className}
      aria-label="MarkVision AI"
    >
      <img
        src={logoUrl}
        alt="MarkVision AI"
        className="h-9 w-auto sm:h-11"
        loading="eager"
      />
    </a>
  );
}

function CTAButton({
  children,
  variant = "primary",
  className = "",
  leadSource = "whatsapp-cta",
}: {
  children: React.ReactNode;
  variant?: "primary" | "inverse";
  className?: string;
  leadSource?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-brand"
      : "bg-paper text-ink border border-ink hover:bg-ink hover:text-paper";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackMetaLead(leadSource)}
      className={
        "group inline-flex w-full items-center justify-between gap-3 rounded-none px-5 py-4 text-[15px] font-semibold transition-colors sm:w-auto sm:px-7 sm:py-5 sm:text-base " +
        styles +
        " " +
        className
      }
    >
      <span className="inline-flex items-center gap-2.5">
        <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={2.2} />
        <span className="truncate">{children}</span>
      </span>
      <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
      <span className="block h-px w-8 bg-ink/40" />
      {children}
    </div>
  );
}

type BridgeVariant = "to-stone" | "to-paper" | "to-ink" | "to-footer";

function SectionBridge({
  variant,
  label,
}: {
  variant: BridgeVariant;
  label?: string;
}) {
  if (!label && variant === "to-footer") {
    return <div className={`section-bridge section-bridge--${variant}`} aria-hidden />;
  }

  return (
    <div className={`section-bridge section-bridge--${variant}`} aria-hidden>
      {label ? (
        <div className="section-bridge__inner">
          <div className="section-bridge__label">
            <span className="section-bridge__line" />
            <span className="section-bridge__dot" />
            <span>{label}</span>
            <span className="section-bridge__dot" />
            <span className="section-bridge__line" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function RevealSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`reveal-section ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </section>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`reveal-item ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

const VIDEO_URL = videoUrl;
const POSTER_URL = posterUrl;

function Landing() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <main className="min-h-screen bg-paper text-ink overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-2.5 sm:px-8 sm:py-3.5">
          <Logo />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackMetaLead("header-whatsapp")}
            className="inline-flex shrink-0 items-center gap-2 border border-ink px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-ink hover:text-paper sm:px-4 sm:py-2 sm:text-sm"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <RevealSection>
        <div className="mx-auto max-w-3xl px-5 pt-8 pb-10 sm:px-8 sm:pt-12 sm:pb-16 md:max-w-5xl md:pt-16 md:pb-20 lg:max-w-6xl lg:px-10">
          <div className="animate-fade-up flex flex-col gap-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-x-14">
            {/* Left: message */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                <span className="block h-px w-8 bg-brand/60" />
                MarkVision AI
              </div>

              <h1 className="font-display text-[clamp(1.75rem,6.5vw,3.25rem)] font-extrabold tracking-[-0.03em] text-ink leading-[1.05] uppercase">
                КАК МАРКЕТОЛОГУ, ТАРГЕТОЛОГУ ИЛИ АГЕНТСТВУ ВЫЙТИ НА 5 000 000+ ТЕНГЕ В МЕСЯЦ&nbsp;
                <br />
                <span className="text-brand">И ПРИ ЭТОМ РАБОТАТЬ МЕНЬШЕ&nbsp;</span>
              </h1>

              <div className="h-[2px] w-12 bg-ink" />

              <p className="font-body text-[17px] leading-[1.5] font-medium text-ink/90 text-pretty sm:text-[18px] sm:leading-[1.55] md:max-w-2xl">
                <span className="font-extrabold text-ink">MarkVision AI</span> — AI-платформа, которая автоматизирует создание рекламы, контента, отчётов и рутинных задач маркетолога.{" "}
                Верните до 10 часов в неделю и возьмите ещё 2–3 клиентов —&nbsp;
                <br />
                без увеличения рабочего дня.
              </p>

              <ul className="grid gap-2.5 sm:grid-cols-2">
                {HERO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] font-semibold text-ink sm:text-[15.5px]">
                    <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center border border-ink bg-ink text-paper">
                      <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="hidden lg:block border-t border-ink/15 pt-5">
                <CTAButton leadSource="hero-desktop">Хочу так же{"\u00A0"}</CTAButton>
              </div>
            </div>

            {/* Right: video */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="block h-2 w-2 rounded-full bg-brand animate-pulse" />
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-ink sm:text-[13px]">
                  Смотреть видео — 2 минуты
                </span>
              </div>

              <div className="relative w-full overflow-hidden border border-ink bg-ink">
                {videoLoaded ? (
                  <video
                    src={VIDEO_URL}
                    poster={POSTER_URL}
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    className="block w-full h-auto"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setVideoLoaded(true)}
                    className="group relative block w-full overflow-hidden"
                    aria-label="Play video"
                  >
                    <img
                      src={POSTER_URL}
                      alt=""
                      loading="eager"
                      decoding="async"
                      className="block w-full h-auto opacity-90 transition-opacity group-hover:opacity-100"
                    />
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-paper shadow-lg transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
                        <Play className="h-7 w-7 fill-paper sm:h-8 sm:w-8" strokeWidth={0} />
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* CTA mobile */}
            <div className="border-t border-ink/15 pt-4 sm:pt-6 lg:hidden">
              <CTAButton leadSource="hero-mobile">Хочу так же{"\u00A0"}</CTAButton>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionBridge variant="to-stone" label="01 · Знакомо?" />

      {/* ЗНАКОМО */}
      <RevealSection className="bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:max-w-5xl md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <Reveal className="md:sticky md:top-24 md:self-start" delay={0}>
              <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                Вы стали маркетологом не ради рутины
              </h2>
              <p className="mt-5 font-display text-[20px] font-semibold leading-tight text-brand sm:text-2xl">
                Теперь ваша работа выглядит так
              </p>
            </Reveal>

            <ol className="grid">
              {PAINS.map((pain, i) => (
                <li
                  key={i}
                  className="reveal-item grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-b border-ink/15 py-5 first:border-t first:pt-5 sm:gap-6 sm:py-6"
                  style={{ "--reveal-delay": `${80 + i * 70}ms` } as CSSProperties}
                >
                  <span className="font-display text-2xl font-extrabold leading-none text-brand tabular-nums sm:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="min-w-0 text-[15.5px] leading-relaxed text-ink sm:text-[17px]">
                    {pain}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <Reveal className="mt-12 border-l-4 border-brand bg-paper px-5 py-5 sm:px-7 sm:py-6" delay={200}>
            <p className="font-display text-[18px] font-extrabold leading-[1.3] text-ink sm:text-[22px]">
              Если узнали себя хотя бы в трёх пунктах — проблема не в вас.
            </p>
            <p className="mt-2 text-[15.5px] leading-relaxed text-ink/75 sm:text-[17px]">
              Просто часть вашей работы давно должна выполнять автоматизация.
            </p>
          </Reveal>
        </div>
      </RevealSection>

      <SectionBridge variant="to-paper" label="02 · Решение" />

      {/* ПРЕДСТАВЬТЕ */}
      <RevealSection>
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:max-w-5xl md:py-28">
          <Reveal delay={0}>
            <SectionLabel>Представьте</SectionLabel>
            <h2 className="font-display mt-4 text-4xl font-extrabold leading-[1.02] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Рядом появился сотрудник, который{" "}
              <span className="text-brand">никогда не устаёт</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {ASSISTANT_DOES.map((task) => (
                <li
                  key={task}
                  className="flex items-start gap-3 border border-ink/15 bg-stone/50 px-4 py-4 text-[15.5px] font-semibold text-ink sm:text-[16px]"
                >
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center border border-ink bg-ink text-paper">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {task}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-10 border-t-2 border-ink pt-6" delay={240}>
            <p className="font-display text-[22px] font-extrabold leading-tight tracking-tight text-ink sm:text-[28px]">
              Это и есть <span className="text-brand">MarkVision AI</span> — виртуальный ассистент маркетолога и центр управления
            </p>
          </Reveal>
        </div>
      </RevealSection>

      <SectionBridge variant="to-stone" label="03 · Что изменится" />

      {/* БЫЛО / СТАЛО */}
      <RevealSection className="bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:max-w-5xl md:py-24">
          <Reveal delay={0}>
            <h2 className="font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Что изменилось после внедрения системы
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch">
              <div className="border-b border-ink/20 py-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink/60">
                Было
              </div>
              <div className="border-b border-ink/20" />
              <div className="border-b border-ink/20 py-3 pl-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand sm:pl-6">
                Стало
              </div>

              {TRANSFORM.map((row, i) => (
                <div key={i} className="contents">
                  <div className="border-b border-ink/15 py-4 pr-3 text-[15.5px] leading-snug text-ink/70 line-through decoration-ink/25 sm:text-[17px]">
                    {row.before}
                  </div>
                  <div className="grid place-items-center border-b border-ink/15 px-2 text-ink/40">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div className="border-b border-ink/15 py-4 pl-4 text-[15.5px] font-semibold leading-snug text-ink sm:pl-6 sm:text-[17px]">
                    {row.after}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </RevealSection>

      <SectionBridge variant="to-paper" label="04 · Автор" />

      {/* ЮРИЙ (короткий, продолжение боли клиента) */}
      <RevealSection>
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:max-w-6xl md:py-24">
          <div className="grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14">
            <Reveal className="md:sticky md:top-24 md:self-start" delay={0}>
              <figure>
                <div className="relative border border-ink bg-ink">
                  <img
                    src={yuriyUrl}
                    alt="Юрий, основатель MarkVision AI"
                    className="block aspect-[2/3] h-auto w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 text-[12px] uppercase tracking-wider text-muted-foreground">
                  FOUNDER · MARKVISION AI
                </figcaption>
              </figure>
            </Reveal>

            <div>
              <Reveal delay={100}>
                <SectionLabel>Почему появилась система</SectionLabel>
                <h2 className="font-display mt-4 text-4xl font-extrabold leading-[0.98] tracking-tight text-balance sm:text-5xl md:text-6xl">
                  Меня зовут <span className="text-brand">Юрий.</span>
                </h2>
              </Reveal>

              <Reveal className="mt-6 space-y-5 text-[16px] leading-[1.65] text-ink/85 sm:text-[17px]" delay={180}>
                <p>
                  Я действующий маркетолог. И однажды понял, что половину рабочего дня трачу{" "}
                  <span className="font-semibold text-ink">не на маркетинг</span> — а на дублирование кампаний, отчёты, таблицы и создание креативов.
                </p>
                <p>
                  Каждый модуль MarkVision AI появился из реальной задачи маркетолога:{" "}
                  сократить рутину, быстрее запускать рекламу, автоматизировать отчёты и освободить время для стратегии.{" "}
                  Сначала эта система работала на меня — а теперь ей могут пользоваться другие специалисты и агентства.
                </p>
              </Reveal>

              <Reveal delay={260}>
                <figure className="mt-8 border-l-4 border-brand bg-stone/60 px-5 py-5 sm:px-7 sm:py-6">
                  <blockquote className="font-display text-[20px] font-extrabold leading-[1.2] tracking-tight text-ink sm:text-[24px]">
                    Я собрал единый&nbsp;<span className="text-brand">Центр управления отделом маркетинга и продаж</span>
                  </blockquote>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionBridge variant="to-stone" label="05 · Что входит" />

      {/* МОДУЛИ */}
      <RevealSection className="bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:max-w-6xl md:py-24">
          <Reveal delay={0}>
            <h2 className="font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Что входит в систему
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink/70 sm:text-[17px]">
              Девять модулей — каждый закрывает свой кусок рутины маркетолога. Работают вместе, а не набором вкладок в браузере.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-px bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className="reveal-item flex flex-col gap-3 bg-paper p-6 sm:p-7"
                  style={{ "--reveal-delay": `${80 + i * 50}ms` } as CSSProperties}
                >
                  <span className="grid h-10 w-10 place-items-center border border-ink bg-ink text-paper">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-[18px] font-extrabold leading-tight tracking-tight text-ink sm:text-[20px]">
                    {m.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink/75 sm:text-[15.5px]">
                    {m.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      <SectionBridge variant="to-paper" label="06 · Экономика" />

      {/* ПОЧЕМУ БОЛЬШЕ ЗАРАБОТАЕТЕ */}
      <RevealSection>
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:max-w-5xl md:py-24">
          <Reveal delay={0}>
            <h2 className="font-display text-4xl font-extrabold leading-[1] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Почему я стал&nbsp;
              <span className="text-brand">зарабатывать больше</span>
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink/70 sm:text-[17px]">
              Не потому что «ИИ». А потому что математика.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
              {[
                { icon: Clock, title: "ЭКОНОМИЯ", value: "10 часов", sub: "в неделю" },
                { icon: Users, title: "БЕРУ", value: "+2 клиентов", sub: "без перегруза" },
                { icon: TrendingUp, title: "УВЕЛИЧИЛ", value: "прибыль", sub: "х2–3 за 3–6 мес" },
              ].map((step, i, arr) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="contents">
                    <div className="border-2 border-ink bg-paper p-6 sm:p-7">
                      <Icon className="h-6 w-6 text-brand" strokeWidth={2} />
                      <p className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink/60">
                        {step.title}
                      </p>
                      <p className="mt-2 font-display text-[26px] font-extrabold leading-none tracking-tight text-ink sm:text-[32px]">
                        {step.value}
                      </p>
                      <p className="mt-1 text-[14px] text-ink/70">{step.sub}</p>
                    </div>
                    {i < arr.length - 1 ? (
                      <div className="grid place-items-center text-brand">
                        <ArrowRight className="h-6 w-6 md:h-8 md:w-8 rotate-90 md:rotate-0" />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 text-[13px] leading-relaxed text-ink/55 sm:text-[13.5px]">
              * Цифры основаны на личном опыте автора и его клиентов за 2024–2026 годы. Результат в вашем случае зависит от ниши, бюджета и того, насколько последовательно вы внедрите систему.
            </p>
          </Reveal>
        </div>
      </RevealSection>

      <SectionBridge variant="to-stone" label="07 · Возражения" />

      {/* ВОЗРАЖЕНИЯ */}
      <RevealSection className="bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:max-w-5xl md:py-24">
          <Reveal delay={0}>
            <h2 className="font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-balance sm:text-5xl md:text-6xl">
              «А что если…»
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink/70 sm:text-[17px]">
              Самые частые сомнения маркетологов — и честные ответы.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {OBJECTIONS.map((o, i) => (
              <div
                key={o.q}
                className="reveal-item flex flex-col gap-3 border border-ink bg-paper p-6 sm:p-7"
                style={{ "--reveal-delay": `${80 + i * 80}ms` } as CSSProperties}
              >
                <p className="font-display text-[17px] font-extrabold leading-snug text-ink sm:text-[19px]">
                  {o.q}
                </p>
                <p className="text-[15.5px] leading-relaxed text-ink/75 sm:text-[16.5px]">
                  {o.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <SectionBridge variant="to-paper" label="08 · Результаты" />

      {/* КЕЙСЫ */}
      <RevealSection>
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:max-w-5xl md:py-24">
          <Reveal delay={0}>
            <h2 className="font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Что уже меняется в реальной работе
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink/70 sm:text-[17px]">
              Мои собственные цифры до и после того, как рутина ушла системе.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-px bg-ink/15 sm:grid-cols-2">
            {CASES.map((c, i) => (
              <div
                key={c.label}
                className="reveal-item flex flex-col gap-4 bg-paper p-6 sm:p-7"
                style={{ "--reveal-delay": `${80 + i * 70}ms` } as CSSProperties}
              >
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-ink/60">
                  {c.label}
                </p>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-ink/50">До</p>
                    <p className="mt-1 font-display text-[18px] font-extrabold leading-tight text-ink/70 line-through decoration-ink/25 sm:text-[20px]">
                      {c.before}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-brand" />
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-brand">После</p>
                    <p className="mt-1 font-display text-[20px] font-extrabold leading-tight tracking-tight text-ink sm:text-[24px]">
                      {c.after}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <SectionBridge variant="to-stone" label="09 · Что вы покупаете" />

      {/* ЦЕННОСТНЫЙ СТЕК */}
      <RevealSection className="bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:max-w-5xl md:py-24">
          <Reveal delay={0}>
            <h2 className="font-display text-4xl font-extrabold leading-[1] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Что вы получаете на самом деле
            </h2>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink/70 sm:text-[17px]">
              Не программу. Не «AI». Не автоматизацию ради автоматизации. Вы получаете:
            </p>
          </Reveal>

          <Reveal delay={140}>
            <ul className="mt-8 grid">
              {VALUE_STACK.map((v, i) => (
                <li
                  key={v}
                  className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 border-b border-ink/15 py-5 first:border-t sm:gap-6 sm:py-6"
                >
                  <span className="font-display text-xl font-extrabold text-brand tabular-nums sm:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[20px] font-extrabold leading-tight text-ink sm:text-[26px]">
                    {v}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </RevealSection>

      <SectionBridge variant="to-ink" label="10 · Выбор" />

      {/* ФИНАЛ */}
      <RevealSection className="bg-ink text-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:max-w-5xl md:py-24">
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/60">
              <span className="block h-px w-8 bg-paper/40" />
              Через год
            </div>
            <h2 className="font-display mt-5 text-4xl font-extrabold leading-[1] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Вы окажетесь в одной из{" "}
              <span className="text-brand">двух точек.</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal delay={120}>
              <div className="h-full border border-paper/25 bg-ink p-6 sm:p-7">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-paper/50">
                  Первая
                </p>
                <p className="mt-4 font-display text-[20px] font-extrabold leading-tight text-paper/85 sm:text-[24px]">
                  Продолжать вручную запускать рекламу, собирать отчёты и работать по вечерам.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="h-full border-2 border-brand bg-brand/10 p-6 sm:p-7">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-brand">
                  Вторая
                </p>
                <p className="mt-4 font-display text-[20px] font-extrabold leading-tight text-paper sm:text-[24px]">
                  Передать рутину системе и заниматься тем, за что клиенты действительно готовы платить.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-10 border-t border-paper/15 pt-8" delay={280}>
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-10">
              <div className="space-y-3 text-[16px] leading-[1.6] text-paper/85 sm:text-[17px]">
                <p className="font-display text-[22px] font-extrabold leading-tight text-paper sm:text-[26px]">
                  Выбор за вами.
                </p>
                <p className="text-paper/70">
                  Созвонимся на 30–40 минут, разберём вашу ситуацию: как устроена работа, где утекает время и что автоматизируется в первую очередь. Бесплатно — без курса и без дожима.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <CTAButton
                  variant="inverse"
                  leadSource="footer-whatsapp"
                  className="!bg-paper !text-ink !border-paper hover:!bg-brand hover:!text-paper hover:!border-brand"
                >
                  Хочу так же{"\u00A0"}
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </RevealSection>

      <SectionBridge variant="to-footer" />

      <footer className="bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
          <Logo />
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} MarkVision AI
          </p>
        </div>
      </footer>
    </main>
  );
}
