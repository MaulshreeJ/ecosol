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
      minHeight: "100vh", position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "#060f1c",
    }}>
      {/* 3 videos stacked */}
      {videos.map((src, i) => (
        <video key={src} autoPlay muted loop playsInline style={{
          position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
          opacity: i === activeVideo ? 1 : 0, transition: "opacity 1.2s ease", pointerEvents: "none", zIndex: 0
        }} src={src} />
      ))}

      {/* OVERLAYS */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(6,15,28,0.60)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(6,15,28,0.85) 0%, rgba(6,15,28,0.4) 50%, rgba(6,15,28,0.15) 100%)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 40%, rgba(6,15,28,0.7) 100%)", zIndex: 1, pointerEvents: "none" }} />

      {/* CONTENT */}
      <div style={{
        position: "relative", zIndex: 2, display: "flex", flexDirection: "column",
        alignItems: "center", textAlign: "center", maxWidth: 860, margin: "0 auto", padding: "0 5%"
      }}>
        {/* Eyebrow */}
        <div className="anim-fadeUp" style={{
          background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 100, padding: "8px 20px", fontSize: 11, fontWeight: 600,
          letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)",
          marginBottom: 32, whiteSpace: "nowrap"
        }}>
          AI · ESG · Sustainability Intelligence
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: "clamp(48px, 6.5vw, 82px)", fontWeight: 900,
          letterSpacing: "-0.04em", lineHeight: 1.0, color: "white", marginBottom: 24
        }}>
          <span className="anim-fadeUp" style={{display:"inline-block",animationDelay:"0.1s"}}>Building Perpetually</span><br/>
          <span className="anim-fadeUp" style={{
            display:"inline-block",animationDelay:"0.2s",
            background: "linear-gradient(135deg, #3A9E7A, #1E5C38)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
          }}>Sustainable Enterprises.</span>
        </h1>

        {/* Subtext */}
        <p className="anim-fadeUp" style={{
          fontSize: 18, fontWeight: 400, lineHeight: 1.75, color: "rgba(255,255,255,0.5)",
          maxWidth: 560, margin: "0 auto", marginBottom: 44, animationDelay:"0.3s"
        }}>
          EcoSol Technologies engineers AI-powered ESG compliance systems and sustainability intelligence platforms for enterprises and governments.
        </p>

        {/* Buttons */}
        <div className="anim-fadeUp" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", animationDelay:"0.4s" }}>
          <button style={{
            background: "#2E7D4F", color: "white", padding: "15px 34px",
            borderRadius: 7, fontSize: 15, fontWeight: 700, border: "none", cursor: "pointer",
            transition: "all 0.2s"
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#1a5c38"; e.currentTarget.style.transform = "translateY(-2px)" }}
            onMouseLeave={e => { e.currentTarget.style.background = "#2E7D4F"; e.currentTarget.style.transform = "none" }}
          >
            Explore Capabilities →
          </button>
          <button style={{
            background: "transparent", color: "white", padding: "15px 34px",
            borderRadius: 7, fontSize: 15, fontWeight: 600, border: "1.5px solid rgba(255,255,255,0.22)",
            cursor: "pointer", transition: "all 0.2s"
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)" }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; e.currentTarget.style.background = "transparent" }}
          >
            Request Consultation
          </button>
        </div>

        {/* Stats bar */}
        <div className="anim-fadeUp" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 60, animationDelay:"0.5s" }}>
          {[
            { num: "₹4K", sup: "+Cr", label: "India ESG Market" },
            { num: "30", sup: "%", label: "Industrial AI CAGR" },
            { num: "6", sup: "+", label: "ESG Frameworks" }
          ].map((stat, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 32px" }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: "white" }}>
                  {stat.num}<span style={{ color: "#3A9E7A" }}>{stat.sup}</span>
                </div>
                <div style={{ fontSize: 10, fontWeight: 500, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {stat.label}
                </div>
              </div>
              {i < 2 && <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.1)" }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Video Dots */}
      <div style={{ position: "absolute", bottom: 32, right: "5%", zIndex: 3, display: "flex", gap: 8, alignItems: "center" }}>
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
