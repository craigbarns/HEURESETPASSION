import type { ReactNode } from "react";
import { Breadcrumbs } from "./breadcrumbs";
export function PageIntro({
  eyebrow,
  title,
  description,
  current,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  current: string;
  children?: ReactNode;
}) {
  return (
    <div className="container page-intro">
      <Breadcrumbs items={[{ label: current }]} />
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-description">{description}</p>
      {children}
    </div>
  );
}
