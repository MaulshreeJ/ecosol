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

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 300,
      height: 68, display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 5%",
      background: scrolled ? "rgba(5,14,26,0.97)" : "rgba(5,14,26,0.8)",
      backdropFilter: "blur(20px)",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      transition: "background 0.3s, border-bottom 0.3s",
    }}>
      {/* Logo */}
      <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none", transition: "transform 0.3s" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
        onMouseLeave={e => e.currentTarget.style.transform = ""}>
        <img src="/logo.png" alt="EcoSol Technologies Logo" style={{ height: 60, width: "auto", objectFit: "contain" }} />
      </a>

      {/* Desktop links */}
      <ul style={{ display: "flex", alignItems: "center", gap: 28, listStyle: "none", margin: 0 }}>
        {[["#whatwedo", "What We Do"], ["#services", "Services"], ["#process", "Process"], ["#contact", "Contact"]].map(([href, label]) => (
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
            onMouseEnter={e => (e.currentTarget.style.background = "#3db882")}
            onMouseLeave={e => (e.currentTarget.style.background = "#2E7D4F")}
          >Get in Touch</a>
        </li>
      </ul>
    </nav>
  );
}
