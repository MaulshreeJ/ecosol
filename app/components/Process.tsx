"use client";
const steps = [
  {n:"01",t:"Discovery & Data Audit",d:"We map your operations, data sources, and compliance obligations. No assumptions — just evidence."},
  {n:"02",t:"AI Model Design",d:"Custom ML architecture built around your industry, data structure, and sustainability goals."},
  {n:"03",t:"Platform Deployment",d:"Integration with your existing ERP, SCADA, or data systems. Minimal disruption. Maximum intelligence."},
  {n:"04",t:"Continuous Optimization",d:"Live dashboards, ROI tracking, and model refinement tied to quantifiable sustainability outcomes."},
];
const frameworks = [
  {n:"SEBI BRSR",t:"India Mandatory"},{n:"GHG Protocol Scope 1–3",t:"Global Standard"},
  {n:"TCFD Framework",t:"Investor-Grade"},{n:"GRI Standards",t:"Reporting Ready"},
  {n:"India Net Zero 2070",t:"Policy Aligned"},{n:"NMEE / PAT Scheme",t:"Energy Mandate"},
];

import { useInView } from "../hooks/useInView";

export default function Process() {
  const stepsView = useInView();
  const fwView = useInView();
  return (
    <section id="process" style={{background:"#050e1a",padding:"100px 5%",position:"relative"}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:80,alignItems:"center"}}>
        <div>
          <div style={{fontSize:11,fontWeight:600,letterSpacing:"0.22em",textTransform:"uppercase",color:"#3A9E7A",marginBottom:13}}>How We Work</div>
          <h2 style={{fontSize:"clamp(26px,3.2vw,42px)",fontWeight:800,letterSpacing:"-0.03em",color:"#fff",lineHeight:1.12,marginBottom:16}}>Structured deployment.<br/>Measurable outcomes.</h2>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.45)",lineHeight:1.8,maxWidth:480,marginBottom:0}}>A repeatable engagement model built for enterprise and government environments.</p>
          <div ref={stepsView.ref} style={{display:"flex",flexDirection:"column",marginTop:32}}>
            {steps.map((s,i)=>(
              <div key={i} className={stepsView.inView ? "anim-fadeRight" : ""} style={{
                animationDelay: `${i * 0.15}s`, opacity: stepsView.inView ? undefined : 0,
                display:"flex",gap:18,padding:"22px 0",borderBottom:i<3?"1px solid rgba(255,255,255,0.06)":"none",transition:"padding-left 0.2s",cursor:"default"}}
                onMouseEnter={e=>e.currentTarget.style.paddingLeft="6px"}
                onMouseLeave={e=>e.currentTarget.style.paddingLeft="0"}
              >
                <div style={{fontSize:11,fontWeight:800,color:"#3A9E7A",letterSpacing:"0.1em",paddingTop:2,flexShrink:0,width:26}}>{s.n}</div>
                <div>
                  <div style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:4}}>{s.t}</div>
                  <p style={{fontSize:13,color:"rgba(255,255,255,0.35)",lineHeight:1.65}}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",
          borderRadius:20,padding:38,backdropFilter:"blur(16px)",position:"relative",overflow:"hidden",
          boxShadow:"0 24px 64px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.05)",
        }}>
          <div style={{position:"absolute",top:-80,right:-80,width:220,height:220,borderRadius:"50%",background:"radial-gradient(circle,rgba(58,158,122,0.1),transparent 70%)"}}/>
          <div style={{fontSize:10,fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase",color:"#3A9E7A",marginBottom:14}}>Framework Coverage</div>
          <div style={{fontSize:19,fontWeight:800,color:"#fff",lineHeight:1.25,marginBottom:10}}>Every output is compliance-ready from day one.</div>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.35)",lineHeight:1.7,marginBottom:24}}>Maps directly to the frameworks your auditors, investors, and regulators require.</p>
          <div ref={fwView.ref} style={{display:"flex",flexDirection:"column",gap:8,position:"relative",zIndex:1}}>
            {frameworks.map((f,i)=>(
              <div key={i} className={fwView.inView ? "anim-fadeLeft" : ""} style={{
                animationDelay: `${i * 0.05}s`, opacity: fwView.inView ? undefined : 0,
                display:"flex",justifyContent:"space-between",alignItems:"center",
                padding:"10px 14px",background:"rgba(255,255,255,0.03)",
                border:"1px solid rgba(255,255,255,0.06)",borderRadius:8,transition:"all 0.2s",cursor:"default",
              }}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.06)";e.currentTarget.style.borderColor="rgba(58,158,122,0.15)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.borderColor="rgba(255,255,255,0.06)"}}
              >
                <span style={{fontSize:12,fontWeight:500,color:"rgba(255,255,255,0.55)"}}>{f.n}</span>
                <span style={{fontSize:9.5,fontWeight:700,letterSpacing:"0.07em",padding:"3px 10px",borderRadius:100,background:"rgba(58,158,122,0.1)",color:"#3A9E7A",border:"1px solid rgba(58,158,122,0.15)"}}>{f.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
