import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import yuriyAsset from "@/assets/yuriy.png.asset.json";

const WHATSAPP_URL =
  "https://wa.me/77472842595?text=" +
  encodeURIComponent(
    "Здравствуйте, Юрий! Прочитал статью — хочу разобрать свою ситуацию по таргету."
  );

const TITLE =
  "Таргетолог — зарабатывай в 2–3 раза больше за ту же работу";
const DESCRIPTION =
  "История Юрия: как маркетолог с 50+ кейсами автоматизировал креативы, запуски и отчёты, поднял чек и стал работать меньше. Разбор твоей ситуации — бесплатно, 20–30 минут.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
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
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
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
  "Слышишь со всех сторон про ИИ и автоматизацию, но не знаешь, с чего начать и что из этого реально работает, а что — продажа курсов.",
];

const NOW = [
  "Стратегию, сценарии и сайты для рекламы готовит моя система — не я ночами.",
  "Рекламу запускаю в один клик. Без часа в кабинете на каждую кампанию.",
  "Контент-завод присылает мне 5–10 готовых баннеров за 5 минут. Дизайнера в штате больше нет.",
  "Видео для рекламы — тоже на автомате.",
  "Отчёты клиенты получают автоматически. Мои вечера снова мои.",
];

function WhatsAppButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "group inline-flex items-center justify-center gap-3 rounded-full bg-gold-gradient px-8 py-4 text-base font-semibold text-primary-foreground shadow-gold transition-all duration-300 hover:scale-[1.02] hover:shadow-elegant md:text-lg " +
        className
      }
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Landing() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* HERO */}
      <section className="relative bg-hero">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px hairline" />
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="animate-fade-up text-center">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Для таргетологов и маркетологов
            </p>
            <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Ты таргетолог?
              <br />
              <span className="text-gold">Читай 60 секунд</span> —
              <br className="hidden md:block" /> и реши сам, почему за ту же работу не брать{" "}
              <span className="italic">в 2–3 раза больше</span>.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Твой чек упёрся не в рынок. Он упёрся в рутину. Ниже — как из неё
              выйти, не уходя из профессии.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3">
              <WhatsAppButton>Написать в WhatsApp</WhatsAppButton>
              <p className="text-xs text-muted-foreground">
                20–30 минут · бесплатно · без курса и без дожима
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto h-px max-w-3xl hairline" />
      </section>

      {/* ЗНАКОМО */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-5xl">
            Знакомо?
          </h2>
          <ul className="mt-10 space-y-5">
            {PAINS.map((pain, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur-sm transition-colors hover:border-gold/40 md:p-6"
              >
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-gold/40 text-gold"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
                  {pain}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center font-display text-xl italic text-gold md:text-2xl">
            Если кивнул хотя бы на два пункта — эта информация для тебя.
          </p>
        </div>
      </section>

      <div className="mx-auto h-px max-w-3xl hairline" />

      {/* МЕНЯ ЗОВУТ ЮРИЙ */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="lg:sticky lg:top-12 lg:self-start">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-elegant">
              <img
                src={yuriyAsset.url}
                alt="Юрий — маркетолог и автор системы автоматизации"
                className="block h-auto w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <p className="mt-5 text-center text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Юрий · маркетолог · 6 лет в рекламе
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-gold">
              Обо мне
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              Меня зовут Юрий
            </h2>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/90 md:text-lg">
              <p>
                6 лет я работаю маркетологом. Специалист по рекламе, за это
                время собрал больше{" "}
                <span className="font-semibold text-gold">50 кейсов</span> в
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
                <span className="italic text-foreground">
                  Не для продажи курса — для себя.
                </span>
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-gold/25 bg-card/50 p-6 backdrop-blur md:p-8">
              <p className="font-display text-xl text-gold md:text-2xl">
                Что у меня сейчас
              </p>
              <ul className="mt-5 space-y-4">
                {NOW.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Check
                      className="mt-1 h-5 w-5 flex-none text-gold"
                      strokeWidth={2.4}
                    />
                    <span className="leading-relaxed text-foreground/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/85 md:text-lg">
              <p>
                Я сократил штат, веду клиентов дороже и трачу на работу меньше
                времени. Система обучена на стратегиях из моих кейсов — это
                не «промты в ChatGPT», это полноценная автоматизация работы:
                ИИ-таргетолог и ИИ-маркетолог от практика.
              </p>
              <p>
                Мои продукты работают в продакшене:{" "}
                <span className="font-semibold text-foreground">
                  MarkVision AI
                </span>
                ,{" "}
                <span className="font-semibold text-foreground">
                  AI-Таргетолог
                </span>
                ,{" "}
                <span className="font-semibold text-foreground">
                  MarkVision Finance
                </span>{" "}
                — плюс решения, которые я собрал клиентам с чеками{" "}
                <span className="text-gold">
                  от 600 тысяч до 2 миллионов тенге
                </span>
                .
              </p>
              <p className="font-display text-xl italic text-foreground md:text-2xl">
                Хочу делиться инструментами с коллегами — таргетологами и
                маркетологами.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 pb-24 pt-12 md:pb-32">
        <div className="mx-auto max-w-3xl rounded-3xl border border-gold/30 bg-card/60 p-10 text-center shadow-elegant backdrop-blur md:p-16">
          <p className="text-sm uppercase tracking-[0.22em] text-gold">
            Если хочешь так же
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Жми кнопку и пиши мне в WhatsApp
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Созвонимся на 20–30 минут, разберём твою ситуацию: как устроена
            твоя работа, где утекает время и что автоматизируется первым. И я
            покажу, как увеличить твой доход{" "}
            <span className="text-gold">в 2–3 раза</span> — и при этом работать
            меньше.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Бесплатно. Без курса и без дожима: посмотришь систему вживую,
            заберёшь план под свои проекты — а дальше решишь сам.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <WhatsAppButton>Написать в WhatsApp</WhatsAppButton>
            <p className="text-xs text-muted-foreground">
              20–30 минут · бесплатно
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 px-6 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Юрий · Маркетолог &amp; AI-автоматизация
      </footer>
    </main>
  );
}
