"use client";
import { useState, useRef, useEffect } from "react";

const cards = [
  { icon: "🌿", tag: "ESG Intelligence", title: "Automated Carbon Tracking", desc: "Real-time Scope 1, 2 & 3 emissions monitoring. GHG Protocol-aligned. Audit-ready output, zero manual effort.", stat: "100%", statL: "Audit-ready output", glow: "rgba(46,125,79,0.4)", bar: "linear-gradient(90deg,#3A9E7A,#2E7D4F)" },
  { icon: "⚡", tag: "AI Optimization", title: "Energy Efficiency AI", desc: "LSTM demand forecasting identifies exactly where energy is wasted — and precisely how to fix it at scale.", stat: "5–20%", statL: "Avg. energy savings", glow: "rgba(31,78,140,0.45)", bar: "linear-gradient(90deg,#5b9bd5,#1F4E8C)" },
  { icon: "📋", tag: "Compliance", title: "BRSR & GRI Automation", desc: "Board-ready sustainability reports auto-generated against SEBI BRSR, GRI & TCFD in minutes, not months.", stat: "6+", statL: "Frameworks auto-mapped", glow: "rgba(58,158,122,0.3)", bar: "linear-gradient(90deg,#3A9E7A,#2E7D4F)" },
  { icon: "🔍", tag: "Risk Intelligence", title: "Regulatory Risk Scoring", desc: "AI-powered penalty risk prediction and compliance gap analysis — fix issues before auditors find them.", stat: "Early", statL: "Warning system", glow: "rgba(100,50,180,0.35)", bar: "linear-gradient(90deg,#a855f7,#6366f1)" },
  { icon: "🏭", tag: "Industrial AI", title: "Predictive Maintenance", desc: "ML models predict equipment failures before they happen — reducing downtime, energy waste & costs.", stat: "↓40%", statL: "Unplanned downtime", glow: "rgba(31,78,140,0.4)", bar: "linear-gradient(90deg,#5b9bd5,#1F4E8C)" },
  { icon: "🗺️", tag: "Strategy", title: "Net Zero Roadmap", desc: "AI-assisted transformation plans aligned with India's Net Zero 2070 targets and your business economics.", stat: "2070", statL: "Policy aligned", glow: "rgba(46,125,79,0.35)", bar: "linear-gradient(90deg,#3A9E7A,#2E7D4F)" },
  { icon: "🏛️", tag: "Government", title: "Smart City ESG Systems", desc: "Public sector sustainability intelligence for Smart Cities Mission, Net Zero 2070 & climate mandates.", stat: "B2G", statL: "Government-ready", glow: "rgba(26,46,74,0.6)", bar: "linear-gradient(90deg,#8ab4d4,#1A2E4A)" },
  { icon: "📊", tag: "Analytics", title: "ESG Performance Dashboard", desc: "Live KPI tracking, emission trends, energy benchmarks, and ROI analytics — one unified interface.", stat: "Live", statL: "Real-time monitoring", glow: "rgba(58,158,122,0.25)", bar: "linear-gradient(90deg,#3A9E7A,#2E7D4F)" },
];

export default function Ribbon() {
  const [cur, setCur] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const CARD_W = 320;

  const go = (i: number) => {
    const idx = ((i % cards.length) + cards.length) % cards.length;
    setCur(idx);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${idx * (CARD_W + 20)}px)`;
    }
  };

  const startTimer = () => { timerRef.current = setInterval(() => setCur(c => { const next = (c + 1) % cards.length; go(next); return next; }), 3500); };
  const stopTimer = () => { if (timerRef.current) clearInterval(timerRef.current); };
  useEffect(() => { startTimer(); return stopTimer; }, []);

  return (
    <section id="ribbon" style={{ background: "#050e1a", padding: "80px 0 88px", borderTop: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 50%,rgba(46,125,79,0.05) 0%,transparent 70%)" }} />

      {/* Header */}
      <div style={{ padding: "0 5%", display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 44, position: "relative", zIndex: 2, flexWrap: "wrap", gap: 20 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#3A9E7A", marginBottom: 10 }}>Core Capabilities</div>
          <div style={{ fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#fff", lineHeight: 1.2 }}>What EcoSol delivers<br />to your organisation.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {[-1, 1].map((dir, i) => (
            <button key={i} onClick={() => go(cur + dir)} style={{
              width: 42, height: 42, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)", backdropFilter: "blur(8px)",
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            }}>
              <svg viewBox="0 0 16 16" style={{ width: 14, height: 14, stroke: "rgba(255,255,255,0.7)", fill: "none", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }}>
                <path d={dir === -1 ? "M10 3L5 8l5 5" : "M6 3l5 5-5 5"} />
              </svg>
            </button>
          ))}
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {cards.map((_, i) => (
              <button key={i} onClick={() => go(i)} style={{
                width: i === cur ? 18 : 6, height: 6, borderRadius: i === cur ? 3 : "50%",
                background: i === cur ? "#3A9E7A" : "rgba(255,255,255,0.15)",
                border: "none", padding: 0, cursor: "pointer", transition: "all 0.3s"
              }} />
            ))}
          </div>
        </div>
      </div>

      {/* Track */}
      <div style={{ overflow: "hidden", padding: "0 5% 16px", position: "relative", zIndex: 2 }}
        onMouseEnter={stopTimer} onMouseLeave={startTimer}>
        <div ref={trackRef} style={{ display: "flex", gap: 20, transition: "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
          {cards.map((c, i) => (
            <div key={i} onClick={() => go(i)} className="ribbon-card" style={{
              flexShrink: 0, width: CARD_W, height: 390, borderRadius: 20, overflow: "hidden",
              position: "relative", cursor: "pointer",
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${i === cur ? "rgba(58,158,122,0.25)" : "rgba(255,255,255,0.08)"}`,
              backdropFilter: "blur(12px)",
              transform: i === cur ? "translateY(-8px)" : "translateY(0)",
              boxShadow: i === cur ? "0 24px 64px rgba(0,0,0,0.4)" : "none",
              transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}>
              {/* Image Background */}
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `url('/images/card-${i + 1}.png')`,
                backgroundSize: "cover", backgroundPosition: "center", zIndex: 0,
                filter: "grayscale(30%) brightness(0.65)"
              }} />
              {/* Glow */}
              <div className={i === cur ? "anim-breathe" : ""} style={{ position: "absolute", width: 180, height: 180, borderRadius: "50%", filter: "blur(40px)", top: -40, right: -40, background: c.glow, opacity: i === cur ? 0.5 : 0.2, transition: "opacity 0.4s", zIndex: 1 }} />

              {/* Frosted Glass Text Panel */}
              <div style={{
                position: "absolute", top: 140, bottom: 0, left: 0, right: 0, zIndex: 1,
                background: "linear-gradient(to bottom, rgba(6,15,28,0.3) 0%, rgba(6,15,28,0.95) 100%)",
                backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)",
                borderTop: "0px solid rgba(255,255,255,0.06)"
              }} />

              {/* Content */}
              <div style={{ padding: "160px 26px 0", position: "relative", zIndex: 2 }}>
                <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A9E7A", marginBottom: 8 }}>{c.tag}</div>
                <div style={{ fontSize: 17, fontWeight: 800, color: "rgba(255,255,255,0.9)", letterSpacing: "-0.02em", lineHeight: 1.25, marginBottom: 8 }}>{c.title}</div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>{c.desc}</p>
              </div>

              {/* Bottom stat */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 26px 22px", borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(6,15,28,0.4)", zIndex: 3 }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: "#3A9E7A", letterSpacing: "-0.02em" }}>{c.stat}</div>
                <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>{c.statL}</div>
              </div>
              {/* Accent bar */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: c.bar, opacity: i === cur ? 1 : 0, transition: "opacity 0.3s", zIndex: 3 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 5% 0", position: "relative", zIndex: 2 }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.25)", whiteSpace: "nowrap" }}>{cur + 1} / {cards.length}</span>
        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)", borderRadius: 1, overflow: "hidden" }}>
          <div style={{ height: "100%", background: "linear-gradient(90deg,#3A9E7A,#2E7D4F)", borderRadius: 1, width: `${(cur + 1) / cards.length * 100}%`, transition: "width 0.45s" }} />
        </div>
      </div>
    </section>
  );
}
