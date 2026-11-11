import type { ReactNode } from "react";

type SiteFrameProps = {
  children: ReactNode;
  current?: "Studio" | "Tidiva" | "Studaya" | "Contact";
  footerCurrent?: "Contact" | "Privacy" | "Legal";
  productScoped?: boolean;
  product?: "tidiva" | "studaya";
};

export function SiteFrame({ children, current, footerCurrent, productScoped = false, product = "tidiva" }: SiteFrameProps) {
  const paths = productScoped
    ? { contact: `/${product}/contact/`, privacy: `/${product}/privacy/`, legal: `/${product}/legal/` }
    : { contact: "/contact/", privacy: "/privacy/", legal: "/legal/" };

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="wrap">
        <header>
          <a className="brand" href="/">
            <b aria-hidden="true">t</b>Talinha Studio
          </a>
          <nav aria-label="Main">
            <a href="/" aria-current={current === "Studio" ? "page" : undefined}>Studio</a>
            <a href="/tidiva/" aria-current={current === "Tidiva" ? "page" : undefined}>Tidiva</a>
            <a href="/studaya/" aria-current={current === "Studaya" ? "page" : undefined}>Studaya</a>
            <a href={paths.contact} aria-current={current === "Contact" ? "page" : undefined}>Contact</a>
          </nav>
        </header>
        {children}
        <footer>
          <span>© 2026 Talinha Studio</span>
          <nav aria-label="Footer">
            <a href={paths.contact} aria-current={footerCurrent === "Contact" ? "page" : undefined}>Contact</a>
            <a href={paths.privacy} aria-current={footerCurrent === "Privacy" ? "page" : undefined}>Privacy</a>
            <a href={paths.legal} aria-current={footerCurrent === "Legal" ? "page" : undefined}>Legal</a>
          </nav>
        </footer>
      </div>
    </>
  );
}