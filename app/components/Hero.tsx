"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const videos = ["/videos/hero-1.mp4", "/videos/hero-2.mp4", "/videos/hero-3.mp4"];
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#060f1c",
      width: "100%",
      boxSizing: "border-box",
    }}>
      {videos.map((src, i) => (
        <video key={src} autoPlay muted loop playsInline style={{
          position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
          opacity: i === activeVideo ? 1 : 0, transition: "opacity 1.2s ease", pointerEvents: "none", zIndex: 0
        }} src={src} />
      ))}

      {/* OVERLAYS */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(6,15,28,0.65)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 40%, rgba(6,15,28,0.7) 100%)", zIndex: 1, pointerEvents: "none" }} />

      {/* CONTENT */}
      <div style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        maxWidth: 800,
        margin: "0 auto",
        padding: "100px 24px 60px",
        boxSizing: "border-box",
      }}>
        {/* Eyebrow */}
        <div className="anim-fadeUp" style={{
          background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 100, padding: "8px 18px", fontSize: 10, fontWeight: 600,
          letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)",
          marginBottom: 28, maxWidth: "100%",
        }}>
          AI · ESG · Sustainability Intelligence
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: "clamp(32px, 8vw, 82px)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          color: "white",
          marginBottom: 20,
          width: "100%",
          wordBreak: "break-word",
        }}>
          <span className="anim-fadeUp" style={{ display: "inline-block", animationDelay: "0.1s" }}>Building Perpetually</span><br />
          <span className="anim-fadeUp" style={{
            display: "inline-block", animationDelay: "0.2s",
            background: "linear-gradient(135deg, #3A9E7A, #1E5C38)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
          }}>Sustainable Enterprises.</span>
        </h1>

        {/* Subtext */}
        <p className="anim-fadeUp" style={{
          fontSize: "clamp(14px, 2.5vw, 17px)",
          fontWeight: 400,
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.5)",
          maxWidth: 520,
          width: "100%",
          margin: "0 auto 36px",
          animationDelay: "0.3s",
        }}>
          EcoSol Technologies engineers AI-powered ESG compliance systems and sustainability intelligence platforms for enterprises and governments.
        </p>

        {/* Buttons */}
        <div className="anim-fadeUp" style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
          animationDelay: "0.4s",
          width: "100%",
        }}>
          <button suppressHydrationWarning style={{
            background: "#2E7D4F", color: "white",
            padding: "14px 28px",
            borderRadius: 7, fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer",
            transition: "all 0.2s", flex: "1 1 140px", maxWidth: 240, minWidth: 0,
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#1a5c38"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#2E7D4F"; }}
          >
            Explore Capabilities →
          </button>
          <button suppressHydrationWarning style={{
            background: "transparent", color: "white",
            padding: "14px 28px",
            borderRadius: 7, fontSize: 14, fontWeight: 600,
            border: "1.5px solid rgba(255,255,255,0.22)",
            cursor: "pointer", transition: "all 0.2s", flex: "1 1 140px", maxWidth: 240, minWidth: 0,
          }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; e.currentTarget.style.background = "transparent"; }}
          >
            Request Consultation
          </button>
        </div>

        {/* Stats bar */}
        <div className="anim-fadeUp hero-stats" style={{ animationDelay: "0.5s", width: "100%" }}>
          {[
            { num: "₹4K", sup: "+Cr", label: "India ESG Market" },
            { num: "30", sup: "%", label: "Industrial AI CAGR" },
            { num: "6", sup: "+", label: "ESG Frameworks" }
          ].map((stat, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <div className="hero-stat-item" style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 24px" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: "white" }}>
                  {stat.num}<span style={{ color: "#3A9E7A" }}>{stat.sup}</span>
                </div>
                <div style={{ fontSize: 9, fontWeight: 500, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {stat.label}
                </div>
              </div>
              {i < 2 && <div className="hero-stat-divider" style={{ width: 1, height: 28, background: "rgba(255,255,255,0.1)" }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Video Dots */}
      <div style={{ position: "absolute", bottom: 24, right: "5%", zIndex: 3, display: "flex", gap: 8, alignItems: "center" }}>
        {videos.map((_, i) => (
          <div key={i} onClick={() => setActiveVideo(i)} style={{
            width: i === activeVideo ? 22 : 6, height: 6,
            borderRadius: i === activeVideo ? 3 : "50%",
            background: i === activeVideo ? "#3A9E7A" : "rgba(255,255,255,0.3)",
            cursor: "pointer", transition: "all 0.3s ease"
          }} />
        ))}
      </div>
    </section>
  );
}
