import { trackMetaLeadCapi } from "@/lib/api/meta.functions";

export const META_PIXEL_ID = "2826237244414415";

export const META_PIXEL_INIT_SCRIPT = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
`.trim();

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

function getCookie(name: string) {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/[$()*+./?[\\\]^{|}-]/g, "\\$&")}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

function createEventId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `lead-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function trackMetaLead(source: string) {
  if (typeof window === "undefined") return;

  const eventId = createEventId();

  if (typeof window.fbq === "function") {
    window.fbq(
      "track",
      "Lead",
      {
        content_name: source,
        content_category: "whatsapp",
      },
      { eventID: eventId }
    );
  }

  void trackMetaLeadCapi({
    data: {
      eventId,
      source,
      eventSourceUrl: window.location.href,
      fbp: getCookie("_fbp"),
      fbc: getCookie("_fbc"),
      userAgent: navigator.userAgent,
    },
  }).catch((error) => {
    console.error("Meta CAPI Lead error:", error);
  });
}
