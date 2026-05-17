"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [["#whatwedo", "What We Do"], ["#services", "Services"], ["#process", "Process"], ["#contact", "Contact"]];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 300,
        height: 68, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 5%",
        background: scrolled ? "rgba(6,15,28,0.98)" : "rgba(6,15,28,0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        transition: "background 0.3s, border-bottom 0.3s",
      }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/logo.png" alt="EcoSol Technologies Logo" style={{ height: 52, width: "auto", objectFit: "contain" }} />
        </a>

        {/* Desktop links */}
        <ul className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 28, listStyle: "none", margin: 0 }}>
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#3A9E7A")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >{label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" style={{
              background: "#2E7D4F", color: "#fff", padding: "10px 22px",
              borderRadius: 6, fontSize: 13, fontWeight: 700, textDecoration: "none",
              transition: "background 0.2s", whiteSpace: "nowrap"
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "#3A9E7A")}
              onMouseLeave={e => (e.currentTarget.style.background = "#2E7D4F")}
            >Get in Touch</a>
          </li>
        </ul>

        {/* Hamburger */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} style={{
          display: "none", flexDirection: "column", gap: 5, background: "none",
          border: "none", cursor: "pointer", padding: 8, zIndex: 310,
        }}>
          <span style={{ display: "block", width: 24, height: 2, background: "#fff", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#fff", borderRadius: 2, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#fff", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className="nav-mobile-menu" style={{
        position: "fixed", top: 68, left: 0, right: 0, zIndex: 299,
        background: "rgba(6,15,28,0.98)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: menuOpen ? "20px 5% 28px" : "0 5%",
        maxHeight: menuOpen ? 400 : 0,
        overflow: "hidden",
        transition: "max-height 0.35s ease, padding 0.35s ease",
      }}>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={() => setMenuOpen(false)} style={{
                display: "block", padding: "13px 0", fontSize: 16, fontWeight: 500,
                color: "rgba(255,255,255,0.7)", textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.06)", transition: "color 0.2s"
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#3A9E7A")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >{label}</a>
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
    </>
  );
}
