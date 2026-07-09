import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import logoUrl from "@/assets/markvision-logo.png";

const TITLE = "Политика конфиденциальности — MarkVision AI";
const DESCRIPTION =
  "Как MarkVision AI собирает, использует и защищает персональные данные посетителей сайта и клиентов.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/privacy` },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/privacy` },
      { rel: "icon", type: "image/png", href: logoUrl },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const updated = "9 июля 2026";
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/" className="inline-flex items-center gap-2" aria-label="MarkVision AI">
            <img src={logoUrl} alt="MarkVision AI" className="h-9 w-auto sm:h-10" />
          </Link>
          <Link
            to="/"
            className="text-xs font-semibold uppercase tracking-wider text-ink/70 hover:text-ink"
          >
            ← На главную
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Обновлено · {updated}
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
          Политика конфиденциальности
        </h1>
        <p className="mt-6 text-[16px] leading-[1.7] text-ink/80 sm:text-[17px]">
          Эта страница описывает, какие данные собирает сайт{" "}
          <strong>markvision.ai</strong> (далее — «сайт») и сервис MarkVision AI
          (далее — «сервис»), как они используются и какие права есть у
          пользователя. Оператором данных выступает автор проекта — Юрий
          (далее — «мы» / «оператор»). Связаться с оператором можно через
          WhatsApp по номеру, указанному на главной странице.
        </p>

        <Section title="1. Какие данные мы собираем">
          <p>Мы собираем только то, что необходимо для работы сайта и связи с вами:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Технические данные</strong>: IP-адрес, тип браузера и
              устройства, страницы, которые вы открывали, источник перехода.
              Собираются автоматически через сервисы веб-аналитики.
            </li>
            <li>
              <strong>Данные о взаимодействии с рекламой</strong>: клики по
              кнопкам, отправка форм, переход в WhatsApp. Собираются через Meta
              Pixel и аналогичные инструменты.
            </li>
            <li>
              <strong>Контактные данные</strong>: имя, номер телефона, e-mail,
              содержание сообщения — только если вы сами отправили их через
              WhatsApp, форму или другой канал связи.
            </li>
          </ul>
        </Section>

        <Section title="2. Зачем мы их используем">
          <ul className="list-disc space-y-2 pl-6">
            <li>Ответить на ваш запрос и провести бесплатную консультацию.</li>
            <li>
              Улучшать сайт: понимать, какие блоки читают, где отваливаются
              пользователи.
            </li>
            <li>
              Оценивать эффективность рекламных кампаний и показывать релевантную
              рекламу тем, кто уже был на сайте (ретаргетинг).
            </li>
            <li>Отправлять полезные материалы по продукту, если вы на это согласились.</li>
          </ul>
        </Section>

        <Section title="3. Правовое основание">
          <p>
            Мы обрабатываем данные на основании вашего согласия, которое вы
            даёте, продолжая пользоваться сайтом и отправляя нам сообщения.
            Согласие можно отозвать в любой момент, написав в WhatsApp.
          </p>
        </Section>

        <Section title="4. Кому мы передаём данные">
          <p>Мы не продаём ваши данные. Данные могут обрабатываться:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>сервисами веб-аналитики (например, Meta Pixel, Google Analytics, Яндекс.Метрика);</li>
            <li>хостинг-провайдером сайта;</li>
            <li>сервисами связи (WhatsApp, e-mail);</li>
            <li>государственными органами — только по официальному запросу.</li>
          </ul>
        </Section>

        <Section title="5. Cookies и аналогичные технологии">
          <p>
            Сайт использует cookies и локальное хранилище браузера для
            корректной работы, аналитики и рекламы. Отключить их можно в
            настройках браузера — часть функциональности при этом может
            перестать работать.
          </p>
        </Section>

        <Section title="6. Сколько мы храним данные">
          <p>
            Технические данные хранятся у сервисов аналитики в течение сроков,
            установленных ими (как правило, до 24 месяцев). Контактные данные
            хранятся столько, сколько нужно для общения с вами — но не более
            3 лет с последнего контакта. По запросу мы удалим ваши данные
            раньше.
          </p>
        </Section>

        <Section title="7. Ваши права">
          <ul className="list-disc space-y-2 pl-6">
            <li>Получить копию данных, которые о вас хранятся.</li>
            <li>Исправить неточные данные.</li>
            <li>Отозвать согласие и потребовать удалить ваши данные.</li>
            <li>Пожаловаться в уполномоченный орган по защите персональных данных.</li>
          </ul>
          <p className="mt-3">
            Для этого напишите нам в WhatsApp — мы ответим в течение 10 рабочих
            дней.
          </p>
        </Section>

        <Section title="8. Изменения политики">
          <p>
            Мы можем обновлять эту политику. Актуальная версия всегда доступна по
            адресу <code className="rounded bg-stone px-1.5 py-0.5 text-[14px]">/privacy</code>.
            Существенные изменения мы отметим датой обновления в начале документа.
          </p>
        </Section>
      </article>

      <footer className="border-t border-ink/10 bg-paper">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-3 px-5 py-6 sm:flex-row sm:items-center sm:px-8">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} MarkVision AI
          </p>
          <Link
            to="/"
            className="text-xs uppercase tracking-wider text-ink/70 hover:text-ink"
          >
            На главную →
          </Link>
        </div>
      </footer>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-[22px] font-extrabold leading-tight tracking-tight text-ink sm:text-[26px]">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[16px] leading-[1.7] text-ink/80 sm:text-[17px]">
        {children}
      </div>
    </section>
  );
}
