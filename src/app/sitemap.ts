import type { MetadataRoute } from "next";
import { afterSales } from "@/data/services";
import { siteUrl, indexable } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl || !indexable) return [];
  const paths = [
    "/",
    "/la-maison",
    "/services",
    "/contact",
    ...(afterSales.confirmed ? ["/sav"] : []),
  ];
  return paths.map((path) => ({ url: new URL(path, siteUrl).href }));
}
