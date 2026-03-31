"use client";
import { useState } from "react";

const tabsData = [
  {
    name: "Industries",
    items: [
      {
        cat: "Manufacturing",
        title: "Industrial Intelligence",
        desc: "Energy optimization and emissions intelligence for heavy industry.",
        stat: "₹2.4L Cr", statL: "Market size India",
        svg: <svg viewBox="0 0 24 24"><path d="M2 20h20M4 20V10l6-6v16M14 20V4l6 6v10M10 20v-4h4v4"/></svg>
      },
      {
        cat: "Energy & Utilities",
        title: "Grid Efficiency",
        desc: "Renewable integration and grid efficiency modeling.",
        stat: "30%", statL: "Renewable growth CAGR",
        svg: <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
      },
      {
        cat: "Infrastructure",
        title: "Sustainable Projects",
        desc: "EIA support and project sustainability for construction.",
        stat: "₹111L Cr", statL: "NIP investment pipeline",
        svg: <svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-6h6v6"/></svg>
      },
      {
        cat: "Government",
        title: "Public Sector Climate",
        desc: "Smart Cities Mission and public sector climate intelligence.",
        stat: "100+", statL: "Smart cities targeted",
        svg: <svg viewBox="0 0 24 24"><path d="M3 21h18M3 10h18M5 10V21M19 10V21M12 3l9 7H3l9-7zM9 21v-5h6v5"/></svg>
      }
    ]
  },
  {
    name: "Services",
    items: [
      {
        cat: "ESG Intelligence",
        title: "Carbon Tracking",
        desc: "Carbon tracking, compliance modeling, and regulatory dashboards.",
        stat: "100%", statL: "Audit-ready output",
        svg: <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zM2 12h4M18 12h4M12 2v4M12 18v4"/><circle cx="12" cy="12" r="3"/></svg>
      },
      {
        cat: "AI Optimization",
        title: "Predictive Maintenance",
        desc: "Energy forecasting, waste reduction, and predictive maintenance.",
        stat: "5–20%", statL: "Energy savings",
        svg: <svg viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
      },
      {
        cat: "Regulatory Advisory",
        title: "Compliance Strategy",
        desc: "ESG strategy, EIA support, and government tender alignment.",
        stat: "6+", statL: "Frameworks covered",
        svg: <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
      },
      {
        cat: "Analytics Platform",
        title: "Real-time Dashboards",
        desc: "Real-time ESG dashboards and comprehensive ROI tracking.",
        stat: "Real-time", statL: "Live monitoring",
        svg: <svg viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
      }
    ]
  },
  {
    name: "Frameworks",
    items: [
      {
        cat: "SEBI BRSR",
        title: "India ESG Mandate",
        desc: "India mandatory ESG reporting automation for listed companies.",
        stat: "Top 1000", statL: "Listed companies mandated",
        svg: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      },
      {
        cat: "GHG Protocol",
        title: "Emissions Standard",
        desc: "Comprehensive Scope 1, 2 & 3 emissions accounting standard.",
        stat: "Scope 1–3", statL: "Full coverage",
        svg: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
      },
      {
        cat: "TCFD",
        title: "Financial Disclosure",
        desc: "Climate-related financial disclosure frameworks for investors.",
        stat: "Investor-grade", statL: "Climate disclosure",
        svg: <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
      },
      {
        cat: "GRI Standards",
        title: "Global Reporting",
        desc: "Global reporting initiative sustainability standard frameworks.",
        stat: "Global", statL: "Reporting standard",
        svg: <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
      }
    ]
  }
];

export default function WhatWeDo() {
  const [active, setActive] = useState(0);
  
  return (
    <section id="whatwedo" style={{background:"#0a1628",padding:"100px 5%",position:"relative",overflow:"hidden"}}>
      <style>{`
        .wwd-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 32px 28px;
          height: auto;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .wwd-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(58,158,122,0.25);
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.3);
        }
        .wwd-card .accent-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #3A9E7A, #1F4E8C);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .wwd-card:hover .accent-bar {
          transform: scaleX(1);
        }
        .wwd-tab {
          padding: 12px 24px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          background: transparent;
          transition: all 0.2s;
          font-family: inherit;
          margin-bottom: -1px;
        }
        .wwd-tab:not(.active) {
          color: rgba(255,255,255,0.35);
          border-bottom: 2px solid transparent;
        }
        .wwd-tab:not(.active):hover {
          color: rgba(255,255,255,0.65);
        }
        .wwd-tab.active {
          color: #3A9E7A;
          border-bottom: 2px solid #3A9E7A;
        }
        .wwd-icon-svg svg {
          width: 22px;
          height: 22px;
          stroke: #3A9E7A;
          stroke-width: 1.5px;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      `}</style>
      
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 50% 60% at 80% 50%,rgba(46,125,79,0.07) 0%,transparent 70%)"}}/>
      
      <div style={{position:"relative",zIndex:2}}>
        <div style={{marginBottom:48}}>
          <div style={{fontSize:11,fontWeight:600,letterSpacing:"0.22em",textTransform:"uppercase",color:"#3A9E7A",marginBottom:13}}>What We Do</div>
          <h2 style={{fontSize:"clamp(26px,3.2vw,42px)",fontWeight:800,letterSpacing:"-0.03em",color:"#fff",lineHeight:1.12}}>AI-driven sustainability<br/>for every sector.</h2>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.45)",maxWidth:540,marginTop:12,lineHeight:1.6}}>From manufacturing plants to government smart cities — we build the intelligence layer for sustainable enterprise.</p>
        </div>
        
        <div style={{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.07)",marginBottom:40}}>
          {tabsData.map((t,i)=>(
            <button key={i} onClick={()=>setActive(i)} className={`wwd-tab ${i===active?"active":""}`}>
              {t.name}
            </button>
          ))}
        </div>
        
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}}>
          {tabsData[active].items.map((c,i)=>(
            <div key={`${active}-${i}`} className="wwd-card anim-fadeUp" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="accent-bar" />
              
              <div style={{width:44,height:44,borderRadius:10,background:"rgba(58,158,122,0.1)",border:"1px solid rgba(58,158,122,0.15)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20}}>
                <span className="wwd-icon-svg" style={{display:"flex"}}>{c.svg}</span>
              </div>
              
              <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",textTransform:"uppercase",color:"#3A9E7A",marginBottom:8}}>
                {c.cat}
              </div>
              
              <div style={{fontSize:17,fontWeight:800,color:"white",letterSpacing:"-0.01em",lineHeight:1.3,marginBottom:10}}>
                {c.title}
              </div>
              
              <div style={{fontSize:13,color:"rgba(255,255,255,0.45)",lineHeight:1.7,marginBottom:20, flex: 1}}>
                {c.desc}
              </div>
              
              <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(58,158,122,0.08)",border:"1px solid rgba(58,158,122,0.12)",borderRadius:100,padding:"6px 14px",marginBottom:20,alignSelf:"flex-start"}}>
                <span style={{fontSize:15,fontWeight:800,color:"#3A9E7A"}}>{c.stat}</span>
                <span style={{fontSize:11,color:"rgba(255,255,255,0.4)",whiteSpace:"nowrap"}}>{c.statL}</span>
              </div>
              
              <div style={{fontSize:12,fontWeight:700,color:"#3A9E7A",textTransform:"uppercase",letterSpacing:"0.08em",display:"flex",alignItems:"center",gap:6,marginTop:"auto"}}>
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
