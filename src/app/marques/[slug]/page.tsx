import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: "placeholder" }];
}

export default function BrandPage() {
  notFound();
}
