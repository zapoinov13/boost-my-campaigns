import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Check, Play } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import yuriyUrl from "@/assets/yuriy.png";
import logoUrl from "@/assets/markvision-logo.png";
import { trackMetaLead } from "@/lib/meta-pixel";

const WHATSAPP_URL =
  "https://wa.me/77472842595?text=" +
  encodeURIComponent(
    "Юрий, привет! Хочу узнать подробнее про систему."
  );

const TITLE = "Таргетолог. Зарабатывай в 2–3 раза больше за ту же работу";
const DESCRIPTION =
  "История Юрия из MarkVision AI: как маркетолог с 50+ кейсами автоматизировал креативы, запуски и отчёты, поднял чек и стал работать меньше. Разбор твоей ситуации. Бесплатно, 20–30 минут.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#FFFFFF" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:image", content: yuriyUrl },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: yuriyUrl },
    ],
    links: [
      { rel: "canonical", href: "/" },
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

const PAINS = [
  "Устал сам делать креативы . или платишь дизайнеру и ждёшь по три дня, пока клиент ждёт от тебя.",
  "Тонешь в рекламных кабинетах: при 5–7 клиентах весь день уходит на ручные запуски, оптимизацию и правки.",
  "Каждый вечер . отчёты. Таблицы, скрины, объяснения. И сообщение в 23:40: «А где отчёт за сегодня?»",
  "Хочешь поднять чек, но не понимаешь за что: клиент видит те же запуски, что и у спеца за 100 тысяч.",
  "Больше клиентов взять физически некуда . в сутках 24 часа, и все они уже заняты.",
  "Слышишь со всех сторон про ИИ и автоматизацию, но не знаешь, с чего начать и что из этого реально работает.",
];

const NOW = [
  "Стратегию, сценарии и сайты для рекламы готовит моя система . не я ночами.",
  "Рекламу запускаю в один клик. Без часа в кабинете на каждую кампанию.",
  "Контент-завод присылает мне 5–10 готовых баннеров за 5 минут. Дизайнера в штате больше нет.",
  "Видео для рекламы . тоже на автомате.",
  "Отчёты клиенты получают автоматически. Мои вечера снова мои.",
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

const YOUTUBE_ID = "dQw4w9WgXcQ";

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
        <div className="mx-auto max-w-3xl px-5 pt-6 pb-8 sm:px-8 sm:pt-10 sm:pb-14 md:max-w-5xl md:pt-20 md:pb-24 lg:max-w-6xl lg:px-10 lg:pt-10 lg:pb-12">
          <div className="animate-fade-up flex flex-col gap-6 sm:gap-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-x-12 lg:gap-y-0 xl:gap-x-16 lg:min-h-[calc(100svh-4.5rem)]">
            {/* Headline block */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-5 lg:py-2">
              <div className="space-y-2">
                <h1 className="font-display text-[32px] font-extrabold uppercase tracking-[-0.03em] text-ink leading-[1.06] [font-feature-settings:normal] sm:text-[52px] sm:leading-[1.04] md:text-[64px] lg:text-[46px] lg:leading-[1.05] xl:text-[54px]">
                  <span className="block">Ты таргетолог или</span>
                  <span className="block">
                    у тебя <span className="text-brand">свое агентство?</span>
                  </span>
                </h1>
              </div>

              <div className="h-[2px] w-12 bg-ink" />

              <p className="font-body text-[17px] leading-[1.4] font-medium text-ink/90 text-pretty sm:text-[18px] sm:leading-[1.45] sm:text-xl md:max-w-2xl lg:max-w-none lg:text-[17px] lg:leading-[1.5] xl:text-lg">
                Система для маркетологов, таргетологов и SMM, которая автоматизирует{" "}
                <span className="font-extrabold text-ink">создание контента, запуск рекламы и отчёты</span>{" "}
                . веди больше проектов, делай меньше действий, поднимай чек.
              </p>

              <p className="font-body text-[15px] leading-[1.45] text-ink/70 text-pretty sm:text-[15.5px] sm:leading-[1.5] sm:text-base md:max-w-2xl lg:max-w-none">
                Смотри видео и узнай, как я увеличил свой чек{" "}
                <span className="font-extrabold italic text-ink border-b-2 border-ink">в 3 раза</span>{" "}
                и стал работать меньше.
              </p>

              {/* CTA - desktop only (under text, left column) */}
              <div className="hidden lg:block border-t border-ink/15 pt-5">
                <CTAButton leadSource="hero-desktop">Хочу такую систему</CTAButton>
              </div>
            </div>

            {/* Video block */}
            <div className="flex flex-col gap-2 sm:gap-3 lg:py-2">
              <div className="flex items-center gap-3">
                <span className="block h-2 w-2 rounded-full bg-brand animate-pulse" />
                <span className="text-[12px] font-extrabold uppercase tracking-widest text-ink sm:text-[13px]">
                  Смотри видео
                </span>
              </div>

              <div className="relative w-full border border-ink bg-ink max-sm:aspect-[16/8] sm:aspect-video">
                {videoLoaded ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1`}
                    title="Как работает моя система"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setVideoLoaded(true)}
                    className="group absolute inset-0 h-full w-full overflow-hidden"
                    aria-label="Play video"
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                    />
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="grid h-16 w-16 place-items-center rounded-full bg-brand text-paper shadow-lg transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
                        <Play className="ml-1 h-7 w-7 fill-paper sm:h-8 sm:w-8" strokeWidth={0} />
                      </span>
                    </span>
                  </button>
                )}
                <div className="pointer-events-none absolute bottom-3 right-3">
                  <span className="font-display text-[10px] font-extrabold uppercase tracking-tighter text-paper/60">
                    Video Case / 2025
                  </span>
                </div>
              </div>
            </div>

            {/* CTA - mobile / tablet only */}
            <div className="border-t border-ink/15 pt-4 sm:pt-6 lg:hidden">
              <CTAButton leadSource="hero-mobile">Хочу такую систему</CTAButton>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionBridge variant="to-stone" label="01 · Проблема" />

      {/* ЗНАКОМО */}
      <RevealSection className="bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:max-w-5xl md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <Reveal className="md:sticky md:top-24 md:self-start" delay={0}>
              <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                Знакомо?
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
                Если кивнул хотя бы на два пункта . эта информация для тебя.
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
        </div>
      </RevealSection>

      <SectionBridge variant="to-paper" label="02 · Решение" />

      {/* ЮРИЙ */}
      <RevealSection>
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:max-w-6xl md:py-24">
          <Reveal delay={0}>
            <SectionLabel>Автор</SectionLabel>
            <h2 className="font-display mt-4 text-4xl font-extrabold leading-[0.95] tracking-tight text-balance sm:text-5xl md:text-7xl">
              Меня зовут <span className="text-brand">Юрий</span>.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14">
            <Reveal className="md:sticky md:top-24 md:self-start" delay={100}>
              <figure>
                <div className="relative border border-ink bg-ink">
                  <img
                    src={yuriyUrl}
                    alt="Юрий, IT-предприниматель, маркетолог, резидент Astana Hub"
                    className="block aspect-[2/3] h-auto w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 text-[12px] uppercase tracking-wider text-muted-foreground">
                  Юрий · MarkVision AI
                </figcaption>
              </figure>
            </Reveal>

            <div>
              <Reveal delay={160}>
                <p className="font-display text-[22px] font-semibold leading-[1.25] tracking-tight text-ink text-balance sm:text-[26px]">
                  Я IT-предприниматель, действующий маркетолог и резидент{" "}
                  <span className="text-brand">Astana Hub</span>.
                </p>
              </Reveal>

              <Reveal className="mt-6 space-y-5 text-[16px] leading-[1.65] text-ink/85 sm:text-[17px]" delay={220}>
                <p>
                  Упростил жизнь таргетологам и агентствам. Теперь у них денег больше, а работы в разы меньше.
                </p>
                <p>
                  Собираю систему, где ИИ делает то, на что обычно уходит неделя: стратегия, крео, сайты, оптимизация рекламы. То, за что обычно платят команде из пяти человек, делает один сервис.
                </p>
              </Reveal>

              <Reveal delay={280}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackMetaLead("author-whatsapp")}
                  className="mt-8 block border border-ink bg-stone/60 px-5 py-5 transition-colors hover:bg-stone sm:px-7 sm:py-6"
                >
                  <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Напиши в WhatsApp
                  </p>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-ink sm:text-[17px]">
                    Покажу главное: как система{" "}
                    <span className="font-semibold text-ink">запускает рекламу в пару кликов</span>,{" "}
                    <span className="font-semibold text-ink">создаёт контент на месяц вперёд за полчаса</span>{" "}
                    и <span className="font-semibold text-ink">делает сайты за 5–10 минут</span>.
                  </p>
                </a>
              </Reveal>

              <Reveal delay={340}>
                <figure className="mt-8 border-l-4 border-brand bg-stone/60 px-5 py-5 sm:px-7 sm:py-6">
                  <blockquote className="font-display text-[20px] font-extrabold leading-[1.2] tracking-tight text-ink sm:text-[26px]">
                    Я собрал систему под собственную работу. Не для продажи, для себя.
                  </blockquote>
                </figure>
              </Reveal>

              <Reveal className="mt-10 border-t-2 border-ink pt-6" delay={400}>
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Что у меня сейчас
                </p>
                <ul className="mt-5 grid">
                  {NOW.map((item, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 border-b border-ink/15 py-4 last:border-b-0 sm:gap-5 sm:py-5"
                    >
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center border border-ink bg-ink text-paper">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="min-w-0 text-[15.5px] leading-relaxed text-ink sm:text-[17px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="mt-10 space-y-5 text-[16px] leading-[1.65] text-ink/85 sm:text-[17px]" delay={460}>
                <p>
                  Я сократил штат, веду клиентов дороже и трачу на работу меньше времени. Система обучена на стратегиях из моих кейсов, это не «промты в ChatGPT», это полноценная автоматизация: ИИ-таргетолог и ИИ-маркетолог от практика.
                </p>
              </Reveal>

              <Reveal delay={520}>
                <blockquote className="font-display mt-10 border-l-4 border-brand pl-5 text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
                  Сам маркетолог, но с системой зарабатываю больше и работаю меньше.
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </RevealSection>

      <SectionBridge variant="to-ink" label="03 · Действие" />

      {/* CTA */}
      <RevealSection className="bg-ink text-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:max-w-4xl md:py-24">
          <Reveal delay={0}>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/60">
              <span className="block h-px w-8 bg-paper/40" />
              Если хочешь так же
            </div>
            <h2 className="font-display mt-5 text-4xl font-extrabold leading-[0.98] tracking-tight text-balance sm:text-5xl md:text-7xl">
              Жми кнопку и пиши мне в&nbsp;<span className="text-brand">WhatsApp</span>.
            </h2>
          </Reveal>

          <Reveal className="mt-8 grid gap-6 border-t border-paper/15 pt-6 md:grid-cols-[1.4fr_1fr] md:gap-10" delay={120}>
            <div className="space-y-4 text-[16px] leading-[1.65] text-paper/85 sm:text-[17px]">
              <p>
                Созвонимся на 20–30 минут, разберём твою ситуацию: как устроена твоя работа, где утекает время и что автоматизируется первым.
              </p>
              <p>
                И я покажу, как увеличить твой доход{" "}
                <span className="bg-brand px-1.5 py-0.5 font-semibold text-paper">
                  в 2–3 раза
                </span>{" "}
                . и при этом работать меньше.
              </p>
              <p className="text-paper/70">
                Бесплатно. Без курса и без дожима: посмотришь систему вживую, заберёшь план под свои проекты . а дальше решишь сам.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <CTAButton
                variant="inverse"
                leadSource="footer-whatsapp"
                className="!bg-paper !text-ink !border-paper hover:!bg-brand hover:!text-paper hover:!border-brand"
              >
                Написать в WhatsApp
              </CTAButton>
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
