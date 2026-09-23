"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Watch } from "@/data/watches";
import { Icon } from "./icon";
export function WatchGallery({ images }: { images: Watch["images"] }) {
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  if (!images.length)
    return (
      <div className="photo-placeholder">
        <p className="eyebrow">Photographies à venir</p>
      </div>
    );
  const selected = images[active];
  return (
    <div className="watch-gallery">
      <button
        className="gallery-main"
        aria-label="Agrandir la photographie"
        onClick={() => dialog.current?.showModal()}
      >
        <Image
          src={selected.src}
          alt={selected.alt}
          fill
          sizes="(max-width: 760px) 100vw, 55vw"
          preload
        />
        <span>
          <Icon name="plus" />
        </span>
      </button>
      {images.length > 1 && (
        <div className="gallery-thumbs" aria-label="Photographies de la montre">
          {images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Photographie ${index + 1} : ${item.alt}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              <Image src={item.src} alt="" width={75} height={85} />
            </button>
          ))}
        </div>
      )}
      <dialog ref={dialog} className="gallery-dialog" aria-label="Photographie agrandie">
        <button
          type="button"
          className="icon-button"
          aria-label="Fermer la photographie"
          onClick={() => dialog.current?.close()}
        >
          <Icon name="close" />
        </button>
        <div className="gallery-zoom">
          <Image src={selected.src} alt={selected.alt} fill sizes="95vw" />
        </div>
      </dialog>
    </div>
  );
}
