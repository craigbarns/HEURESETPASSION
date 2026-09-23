"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, store } from "@/data/store";
import { Icon } from "./icon";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  function closeMenu() {
    dialog.current?.close();
    setOpen(false);
    toggle.current?.focus();
  }
  return (
    <header className={`site-header ${pathname === "/" && !scrolled ? "site-header--hero" : ""}`}>
      <Link href="/" className="wordmark" aria-label="Heures & Passion, accueil">
        <span>
          HEURES <i>&</i> PASSION
        </span>
        <small>HORLOGERIE · MARSEILLE</small>
      </Link>
      <nav className="desktop-nav" aria-label="Navigation principale">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname.startsWith(item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link href="/contact#boutique" className="header-visit">
        Nous rendre visite
        <Icon name="external" />
      </Link>
      <button
        ref={toggle}
        type="button"
        className="menu-toggle"
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => {
          dialog.current?.showModal();
          setOpen(true);
        }}
      >
        <span />
        <span />
      </button>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Navigation"
        onCancel={closeMenu}
        onClose={() => setOpen(false)}
      >
        <div className="mobile-menu-top">
          <span className="eyebrow">Heures & Passion</span>
          <button
            className="icon-button"
            type="button"
            aria-label="Fermer le menu"
            onClick={closeMenu}
          >
            <Icon name="close" />
          </button>
        </div>
        <nav aria-label="Navigation mobile">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
            >
              <span className="menu-number">0{index + 1}</span>
              {item.label}
              <Icon name="arrow" />
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-bottom">
          <p>
            66 Rue Paradis
            <br />
            13006 Marseille
          </p>
          <a href={store.phoneHref}>{store.phone}</a>
        </div>
      </dialog>
    </header>
  );
}
