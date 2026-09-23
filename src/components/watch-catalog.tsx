"use client";
import { useMemo, useState } from "react";
import { brands } from "@/data/brands";
import type { Watch } from "@/data/watches";
import { WatchCard } from "./watch-card";
import { EmptyCollection } from "./ui";

export function WatchCatalog({ watches }: { watches: Watch[] }) {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const dimensions = useMemo(
    () =>
      [
        {
          key: "brand",
          label: "Maison",
          values: [...new Set(watches.map((w) => w.brand))].map((value) => ({
            value,
            label: brands.find((b) => b.slug === value)?.name || value,
          })),
        },
        ...(
          [
            ["collection", "Collection"],
            ["gender", "Pour qui"],
            ["movement", "Mouvement"],
            ["diameter", "Diamètre"],
          ] as const
        ).map(([key, label]) => ({
          key,
          label,
          values: [
            ...new Set(watches.map((w) => w[key]).filter((v) => v !== undefined && v !== "")),
          ].map((value) => ({
            value: String(value),
            label: key === "diameter" ? `${value} mm` : String(value),
          })),
        })),
      ].filter((dimension) => dimension.values.length > 1),
    [watches],
  );
  const prices = [...new Set(watches.flatMap((w) => (w.price === null ? [] : [w.price])))].sort(
    (a, b) => a - b,
  );
  const visible = watches.filter((watch) =>
    Object.entries(filters).every(
      ([key, value]) =>
        !value ||
        (key === "price"
          ? watch.price !== null && watch.price <= Number(value)
          : String(watch[key as keyof Watch]) === value),
    ),
  );
  if (!watches.length) return <EmptyCollection />;
  return (
    <>
      {(dimensions.length > 0 || prices.length > 1) && (
        <div className="filters" role="group" aria-label="Filtres du catalogue">
          {dimensions.map((dimension) => (
            <label key={dimension.key}>
              {dimension.label}
              <select
                value={filters[dimension.key] || ""}
                onChange={(event) =>
                  setFilters((previous) => ({ ...previous, [dimension.key]: event.target.value }))
                }
              >
                <option value="">Tout voir</option>
                {dimension.values.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          ))}
          {prices.length > 1 && (
            <label>
              Budget
              <select
                value={filters.price || ""}
                onChange={(event) =>
                  setFilters((previous) => ({ ...previous, price: event.target.value }))
                }
              >
                <option value="">Tous les prix</option>
                {[
                  ...new Set([
                    prices[0],
                    prices[Math.floor(prices.length / 2)],
                    prices[prices.length - 1],
                  ]),
                ].map((price) => (
                  <option key={price} value={price}>
                    Jusqu’à {price.toLocaleString("fr-FR")} €
                  </option>
                ))}
              </select>
            </label>
          )}
          {Object.values(filters).some(Boolean) && (
            <button type="button" onClick={() => setFilters({})}>
              Réinitialiser
            </button>
          )}
        </div>
      )}
      <p className="small-text result-count" role="status">
        {visible.length} {visible.length > 1 ? "montres" : "montre"}
      </p>
      {visible.length ? (
        <div className="watch-grid">
          {visible.map((watch) => (
            <WatchCard key={watch.slug} watch={watch} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h2>Aucune montre pour ces critères.</h2>
          <button className="text-link" type="button" onClick={() => setFilters({})}>
            Voir toute la sélection
          </button>
        </div>
      )}
    </>
  );
}
