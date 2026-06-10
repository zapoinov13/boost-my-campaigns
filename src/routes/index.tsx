import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
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
      { name: "theme-color", content: "#3b6fe8" },
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
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap",
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
        className="h-9 w-auto sm:h-10"
        loading="eager"
      />
    </a>
  );
}

function WhatsAppButton({
  children,
  className = "",
  size = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "lg" | "md";
}) {
  const sizing =
    size === "lg"
      ? "px-6 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg"
      : "px-5 py-2.5 text-sm";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "group inline-flex w-full max-w-sm items-center justify-center gap-2.5 rounded-full bg-brand-gradient font-semibold text-primary-foreground shadow-brand transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] sm:w-auto " +
        sizing +
        " " +
        className
      }
    >
      <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={2.2} />
      <span className="truncate">{children}</span>
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Landing() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
          <Logo />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand hover:text-brand sm:px-4 sm:py-2 sm:text-sm"
          >
            <MessageCircle className="h-4 w-4 text-brand" strokeWidth={2.2} />
            <span className="hidden sm:inline">Связаться</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-gradient opacity-20 blur-3xl animate-blob"
        />
        <div className="relative mx-auto max-w-3xl px-4 pt-12 pb-14 sm:px-6 md:pt-20 md:pb-20">
          <div className="animate-fade-up">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur sm:text-xs">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              Для таргетологов и маркетологов
            </div>

            <h1 className="font-display mt-6 text-center text-[28px] font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Ты таргетолог?{" "}
              <span className="text-gradient-brand">Читай 60 секунд</span> — и
              реши сам, почему за ту же работу не брать{" "}
              <span className="whitespace-nowrap">в 2–3 раза больше</span>.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              Твой чек упёрся не в рынок. Он упёрся в рутину. Ниже — как из неё
              выйти, не уходя из профессии.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10">
              <WhatsAppButton>Написать в WhatsApp</WhatsAppButton>
              <p className="text-[11px] text-muted-foreground sm:text-xs">
                20–30 минут · бесплатно · без курса и без дожима
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ЗНАКОМО */}
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand sm:text-xs">
              Узнаёшь себя?
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Знакомо?
            </h2>
          </div>

          <ul className="mt-10 grid gap-3 sm:gap-4">
            {PAINS.map((pain, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/40 sm:gap-4 sm:p-5"
              >
                <span
                  aria-hidden
                  className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-gradient text-[11px] font-bold text-primary-foreground sm:h-8 sm:w-8 sm:text-xs"
                >
                  {i + 1}
                </span>
                <p className="min-w-0 text-[15px] leading-relaxed text-foreground/90 sm:text-base">
                  {pain}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-brand/25 bg-accent/40 p-5 text-center sm:mt-10 sm:p-6">
            <p className="font-display text-lg font-semibold text-brand sm:text-xl">
              Если кивнул хотя бы на два пункта — эта информация для тебя.
            </p>
          </div>
        </div>
      </section>

      {/* МЕНЯ ЗОВУТ ЮРИЙ */}
      <section className="bg-secondary/50 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <img
                src={yuriyAsset.url}
                alt="Юрий — маркетолог и автор MarkVision AI"
                className="block aspect-[3/4] h-auto w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-white">
                <div className="min-w-0">
                  <p className="truncate text-base font-semibold sm:text-lg">
                    Юрий
                  </p>
                  <p className="truncate text-xs opacity-90 sm:text-sm">
                    Маркетолог · 6 лет · 50+ кейсов
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur sm:text-xs">
                  MarkVision AI
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand sm:text-xs">
              Обо мне
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Меня зовут{" "}
              <span className="text-gradient-brand">Юрий</span>
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-foreground/85 sm:text-base">
              <p>
                6 лет я работаю маркетологом. Специалист по рекламе, за это
                время собрал больше{" "}
                <span className="font-semibold text-brand">50 кейсов</span> в
                разных нишах.
              </p>
              <p>
                И все эти годы я жил так же, как ты сейчас. Когда клиентов
                стало 7–10, я понял, что больше не таргетолог — я заполнятель
                отчётов. Утром ручные запуски, днём правки, вечером таблицы.
                Дизайнерам платил и ждал креативы днями.
              </p>
              <p>
                В какой-то момент мне это надоело, и я собрал систему под
                собственную работу.{" "}
                <span className="font-medium text-foreground">
                  Не для продажи курса — для себя.
                </span>
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-card sm:p-7">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand" strokeWidth={2.2} />
                <p className="font-display text-lg font-bold sm:text-xl">
                  Что у меня сейчас
                </p>
              </div>
              <ul className="mt-5 space-y-4">
                {NOW.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-gradient text-primary-foreground">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="min-w-0 text-[15px] leading-relaxed text-foreground/90 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/85 sm:text-base">
              <p>
                Я сократил штат, веду клиентов дороже и трачу на работу меньше
                времени. Система обучена на стратегиях из моих кейсов — это
                не «промты в ChatGPT», это полноценная автоматизация:
                ИИ-таргетолог и ИИ-маркетолог от практика.
              </p>
              <p>Мои продукты работают в продакшене:</p>

              <ul className="grid gap-2 sm:grid-cols-3">
                {["MarkVision AI", "AI-Таргетолог", "MarkVision Finance"].map(
                  (p) => (
                    <li
                      key={p}
                      className="rounded-xl border border-brand/30 bg-accent/50 px-3 py-2.5 text-center text-sm font-semibold text-brand"
                    >
                      {p}
                    </li>
                  )
                )}
              </ul>

              <p>
                Плюс решения, которые я собрал клиентам с чеками{" "}
                <span className="font-semibold text-foreground">
                  от 600 тысяч до 2 миллионов тенге
                </span>
                .
              </p>
              <p className="font-display border-l-2 border-brand pl-4 text-lg font-semibold text-foreground sm:text-xl">
                Хочу делиться инструментами с коллегами — таргетологами и
                маркетологами.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 py-16 sm:px-6 md:py-24">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-brand-gradient p-8 text-center text-primary-foreground shadow-brand sm:p-12 md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />

          <p className="relative text-[11px] font-medium uppercase tracking-[0.2em] opacity-90 sm:text-xs">
            Если хочешь так же
          </p>
          <h2 className="font-display relative mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Жми кнопку и пиши мне в&nbsp;WhatsApp
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-[15px] leading-relaxed opacity-90 sm:mt-6 sm:text-base">
            Созвонимся на 20–30 минут, разберём твою ситуацию: как устроена
            твоя работа, где утекает время и что автоматизируется первым. И я
            покажу, как увеличить твой доход{" "}
            <span className="font-semibold">в 2–3 раза</span> — и при этом
            работать меньше.
          </p>
          <p className="relative mx-auto mt-3 max-w-xl text-[13px] opacity-80 sm:text-sm">
            Бесплатно. Без курса и без дожима: посмотришь систему вживую,
            заберёшь план под свои проекты — а дальше решишь сам.
          </p>

          <div className="relative mt-8 flex flex-col items-center gap-3 sm:mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full max-w-sm items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-brand shadow-card transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={2.2} />
              <span>Написать в WhatsApp</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-[11px] opacity-80 sm:text-xs">
              20–30 минут · бесплатно
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <Logo />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MarkVision AI · Юрий
          </p>
        </div>
      </footer>
    </main>
  );
}
