export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { siteUrl, indexable } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(indexable ? { allow: "/", disallow: ["/__forms.html"] } : { disallow: "/" }),
    },
    ...(siteUrl && indexable ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
