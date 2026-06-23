import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader, getRequestIP } from "@tanstack/react-start/server";
import { z } from "zod";

import { getServerConfig } from "../config.server";
import { sendMetaLeadEvent } from "../meta-capi.server";

const leadInputSchema = z.object({
  eventId: z.string().min(8),
  source: z.string().min(1),
  eventSourceUrl: z.string().url(),
  fbp: z.string().optional(),
  fbc: z.string().optional(),
  userAgent: z.string().optional(),
});

export const trackMetaLeadCapi = createServerFn({ method: "POST" })
  .inputValidator(leadInputSchema)
  .handler(async ({ data }) => {
    const { metaPixelId, metaCapiAccessToken } = getServerConfig();

    if (!metaCapiAccessToken) {
      return { ok: false as const, reason: "missing_token" as const };
    }

    const result = await sendMetaLeadEvent({
      pixelId: metaPixelId,
      accessToken: metaCapiAccessToken,
      eventId: data.eventId,
      eventSourceUrl: data.eventSourceUrl,
      source: data.source,
      clientIpAddress: getRequestIP({ xForwardedFor: true }),
      clientUserAgent: data.userAgent ?? getRequestHeader("user-agent"),
      fbp: data.fbp,
      fbc: data.fbc,
    });

    return result;
  });
