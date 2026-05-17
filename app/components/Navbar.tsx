"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const links = [["#whatwedo", "What We Do"], ["#services", "Services"], ["#process", "Process"], ["#contact", "Contact"]];

  const navBg = scrolled ? "rgba(6,15,28,0.98)" : "rgba(6,15,28,0.85)";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 300,
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 5%",
        background: navBg,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        transition: "background 0.3s, border-bottom 0.3s",
        boxSizing: "border-box",
        width: "100%",
      }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <img src="/logo.png" alt="EcoSol" style={{ height: 48, width: "auto", objectFit: "contain" }} />
        </a>

        {/* Desktop links — hidden on mobile via JS */}
        {!isMobile && (
          <ul style={{ display: "flex", alignItems: "center", gap: 24, listStyle: "none", margin: 0 }}>
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href} style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.6)", textDecoration: "none", whiteSpace: "nowrap" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#3A9E7A")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >{label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" style={{
                background: "#2E7D4F", color: "#fff", padding: "9px 20px",
                borderRadius: 6, fontSize: 13, fontWeight: 700, textDecoration: "none",
                whiteSpace: "nowrap", display: "block"
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "#3A9E7A")}
                onMouseLeave={e => (e.currentTarget.style.background = "#2E7D4F")}
              >Get in Touch</a>
            </li>
          </ul>
        )}

        {/* Hamburger — shown on mobile via JS */}
        {isMobile && (
          <button onClick={() => setMenuOpen(o => !o)} style={{
            display: "flex", flexDirection: "column", justifyContent: "center", gap: 5,
            background: "none", border: "none", cursor: "pointer", padding: 8,
          }}>
            <span style={{ display: "block", width: 24, height: 2, background: "#fff", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: 24, height: 2, background: "#fff", borderRadius: 2, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: 24, height: 2, background: "#fff", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        )}
      </nav>

      {/* Mobile dropdown */}
      {isMobile && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 299,
          background: "rgba(6,15,28,0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          maxHeight: menuOpen ? 400 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          width: "100%",
          boxSizing: "border-box",
        }}>
          <ul style={{ listStyle: "none", padding: "16px 5% 24px", display: "flex", flexDirection: "column", gap: 0 }}>
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={() => setMenuOpen(false)} style={{
                  display: "block", padding: "14px 0", fontSize: 16, fontWeight: 500,
                  color: "rgba(255,255,255,0.75)", textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}>{label}</a>
              </li>
            ))}
            <li style={{ marginTop: 16 }}>
              <a href="#contact" onClick={() => setMenuOpen(false)} style={{
                display: "block", textAlign: "center", background: "#2E7D4F", color: "#fff",
                padding: "14px", borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: "none"
              }}>Get in Touch</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
