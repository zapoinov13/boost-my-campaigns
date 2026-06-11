import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import yuriyAsset from "@/assets/yuriy.png.asset.json";
import logoAsset from "@/assets/markvision-logo.png.asset.json";

const WHATSAPP_URL =
  "https://wa.me/77472842595?text=" +
  encodeURIComponent(
    "Здравствуйте, Юрий! Прочитал статью — хочу разобрать свою ситуацию по таргету."
  );

const TITLE = "Таргетолог — зарабатывай в 2–3 раза больше за ту же работу";
const DESCRIPTION =
  "История Юрия из MarkVision AI: как маркетолог с 50+ кейсами автоматизировал креативы, запуски и отчёты, поднял чек и стал работать меньше. Разбор твоей ситуации — бесплатно, 20–30 минут.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#FFFFFF" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:image", content: yuriyAsset.url },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: yuriyAsset.url },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "icon", type: "image/png", href: logoAsset.url },
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
  "Устал сам делать креативы — или платишь дизайнеру и ждёшь по три дня, пока клиент ждёт от тебя.",
  "Тонешь в рекламных кабинетах: при 5–7 клиентах весь день уходит на ручные запуски, оптимизацию и правки.",
  "Каждый вечер — отчёты. Таблицы, скрины, объяснения. И сообщение в 23:40: «А где отчёт за сегодня?»",
  "Хочешь поднять чек, но не понимаешь за что: клиент видит те же запуски, что и у спеца за 100 тысяч.",
  "Больше клиентов взять физически некуда — в сутках 24 часа, и все они уже заняты.",
  "Слышишь со всех сторон про ИИ и автоматизацию, но не знаешь, с чего начать и что из этого реально работает.",
];

const NOW = [
  "Стратегию, сценарии и сайты для рекламы готовит моя система — не я ночами.",
  "Рекламу запускаю в один клик. Без часа в кабинете на каждую кампанию.",
  "Контент-завод присылает мне 5–10 готовых баннеров за 5 минут. Дизайнера в штате больше нет.",
  "Видео для рекламы — тоже на автомате.",
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
        src={logoAsset.url}
        alt="MarkVision AI"
        className="h-8 w-auto sm:h-9"
        loading="eager"
      />
    </a>
  );
}

function CTAButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "inverse";
  className?: string;
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

function Landing() {
  return (
    <main className="min-h-screen bg-paper text-ink overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3.5 sm:px-8">
          <Logo />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 border border-ink px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-ink hover:text-paper sm:px-4 sm:py-2 sm:text-sm"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO — magazine */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-3xl px-5 pt-10 pb-12 sm:px-8 md:max-w-4xl md:pt-16 md:pb-20">
          <div className="animate-fade-up">
            <h1 className="font-display text-[34px] font-extrabold leading-[1.02] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              Ты таргетолог?
              <br />
              <span className="text-brand">Читай 60 секунд</span> — и реши сам, почему за ту же работу не брать{" "}
              <span className="underline decoration-ink decoration-4 underline-offset-[6px]">
                в 2–3 раза больше
              </span>
              .
            </h1>

            <div className="mt-8 grid gap-6 border-t border-ink/15 pt-6 md:grid-cols-[1.4fr_1fr] md:gap-10">
              <p className="text-[17px] leading-relaxed text-ink/80 text-pretty sm:text-lg">
                Твой чек упёрся <span className="font-semibold text-ink">не в рынок</span>. Он упёрся в рутину. Ниже — как из неё выйти, не уходя из профессии.
              </p>
              <div className="flex flex-col gap-3">
                <CTAButton>Написать в WhatsApp</CTAButton>
                <p className="text-[12px] uppercase tracking-wider text-muted-foreground">
                  20–30 минут · бесплатно · без курса
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ЗНАКОМО — magazine columns */}
      <section className="border-b border-ink/10 bg-stone">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:max-w-5xl md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <div className="md:sticky md:top-24 md:self-start">
              <SectionLabel>Узнаёшь себя?</SectionLabel>
              <h2 className="font-display mt-4 text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                Знакомо?
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
                Если кивнул хотя бы на два пункта — эта информация для тебя.
              </p>
            </div>

            <ol className="grid">
              {PAINS.map((pain, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-b border-ink/15 py-5 first:border-t first:pt-5 sm:gap-6 sm:py-6"
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
      </section>

      {/* ЮРИЙ — magazine feature */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 md:max-w-6xl md:py-24">
          <SectionLabel>Автор</SectionLabel>
          <h2 className="font-display mt-4 text-4xl font-extrabold leading-[0.95] tracking-tight text-balance sm:text-5xl md:text-7xl">
            Меня зовут <span className="text-brand">Юрий</span>.
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14">
            <figure className="md:sticky md:top-24 md:self-start">
              <div className="relative border border-ink bg-stone">
                <img
                  src={yuriyAsset.url}
                  alt="Юрий — маркетолог и автор MarkVision AI"
                  className="block aspect-[3/4] h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-3 text-[12px] uppercase tracking-wider text-muted-foreground">
                <span>Юрий · MarkVision AI</span>
                <span>6 лет · 50+ кейсов</span>
              </figcaption>
            </figure>

            <div>
              <div className="font-display first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[64px] first-letter:font-extrabold first-letter:leading-[0.85] first-letter:text-brand sm:first-letter:text-[88px]">
                <p className="text-[17px] leading-[1.6] text-ink/85 sm:text-lg">
                  6 лет я работаю маркетологом. Специалист по рекламе, за это время собрал больше <span className="font-semibold text-ink">50 кейсов</span> в разных нишах.
                </p>
              </div>

              <div className="mt-6 space-y-5 text-[16px] leading-[1.65] text-ink/85 sm:text-[17px]">
                <p>
                  И все эти годы я жил так же, как ты сейчас. Когда клиентов стало 7–10, я понял, что больше не таргетолог — я заполнятель отчётов. Утром ручные запуски, днём правки, вечером таблицы. Дизайнерам платил и ждал креативы днями.
                </p>
                <p>
                  В какой-то момент мне это надоело, и я собрал систему под собственную работу.{" "}
                  <span className="bg-ink px-1.5 py-0.5 font-semibold text-paper">
                    Не для продажи курса — для себя.
                  </span>
                </p>
              </div>

              {/* Что у меня сейчас */}
              <div className="mt-10 border-t-2 border-ink pt-6">
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
              </div>

              <div className="mt-10 space-y-5 text-[16px] leading-[1.65] text-ink/85 sm:text-[17px]">
                <p>
                  Я сократил штат, веду клиентов дороже и трачу на работу меньше времени. Система обучена на стратегиях из моих кейсов — это не «промты в ChatGPT», это полноценная автоматизация: ИИ-таргетолог и ИИ-маркетолог от практика.
                </p>
                <p>Мои продукты работают в продакшене:</p>

                <ul className="grid gap-0 border border-ink sm:grid-cols-3">
                  {[
                    { name: "MarkVision AI", tag: "AI-маркетолог" },
                    { name: "AI-Таргетолог", tag: "Запуски в клик" },
                    { name: "MarkVision Finance", tag: "Учёт и аналитика" },
                  ].map((p, i) => (
                    <li
                      key={p.name}
                      className={
                        "p-5 " +
                        (i > 0 ? "border-t border-ink sm:border-l sm:border-t-0" : "")
                      }
                    >
                      <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        0{i + 1}
                      </p>
                      <p className="font-display mt-2 text-lg font-extrabold tracking-tight">
                        {p.name}
                      </p>
                      <p className="mt-1 text-sm text-ink/70">{p.tag}</p>
                    </li>
                  ))}
                </ul>

                <p>
                  Плюс решения, которые я собрал клиентам с чеками{" "}
                  <span className="font-semibold text-ink">
                    от 600 тысяч до 2 миллионов тенге
                  </span>
                  .
                </p>
              </div>

              <blockquote className="font-display mt-10 border-l-4 border-brand pl-5 text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
                Хочу делиться инструментами с коллегами — таргетологами и маркетологами.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:max-w-4xl md:py-24">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/60">
            <span className="block h-px w-8 bg-paper/40" />
            Если хочешь так же
          </div>
          <h2 className="font-display mt-5 text-4xl font-extrabold leading-[0.98] tracking-tight text-balance sm:text-5xl md:text-7xl">
            Жми кнопку и пиши мне в&nbsp;<span className="text-brand">WhatsApp</span>.
          </h2>

          <div className="mt-8 grid gap-6 border-t border-paper/15 pt-6 md:grid-cols-[1.4fr_1fr] md:gap-10">
            <div className="space-y-4 text-[16px] leading-[1.65] text-paper/85 sm:text-[17px]">
              <p>
                Созвонимся на 20–30 минут, разберём твою ситуацию: как устроена твоя работа, где утекает время и что автоматизируется первым.
              </p>
              <p>
                И я покажу, как увеличить твой доход{" "}
                <span className="bg-brand px-1.5 py-0.5 font-semibold text-paper">
                  в 2–3 раза
                </span>{" "}
                — и при этом работать меньше.
              </p>
              <p className="text-paper/70">
                Бесплатно. Без курса и без дожима: посмотришь систему вживую, заберёшь план под свои проекты — а дальше решишь сам.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <CTAButton variant="inverse" className="!bg-paper !text-ink !border-paper hover:!bg-brand hover:!text-paper hover:!border-brand">
                Написать в WhatsApp
              </CTAButton>
              <p className="text-[12px] uppercase tracking-wider text-paper/60">
                20–30 минут · бесплатно
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
          <Logo />
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} MarkVision AI · Юрий
          </p>
        </div>
      </footer>
    </main>
  );
}
