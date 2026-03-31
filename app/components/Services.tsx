"use client";
const services = [
  {
    n:"01",t:"ESG Intelligence Platform",
    d:"Automated carbon tracking, compliance modeling, and Scope 1–3 analysis. Board-ready output from day one.",
    pts:["Carbon footprint tracking & forecasting","Automated BRSR & GRI report generation","Real-time ESG scoring dashboards","Regulatory gap & penalty risk analysis"],
  },
  {
    n:"02",t:"AI Optimization Engine",
    d:"ML models purpose-built for industrial sustainability — energy demand forecasting, waste reduction, predictive analytics.",
    pts:["Energy efficiency AI & demand forecasting","Resource waste reduction modeling","Predictive maintenance intelligence","Operational bottleneck detection"],
  },
  {
    n:"03",t:"Regulatory & Advisory",
    d:"Strategic sustainability transformation, compliance architecture, and EIA support aligned with India's climate commitments.",
    pts:["ESG transformation strategy & roadmaps","Environmental Impact Assessment support","Government scheme & tender alignment","Carbon credit & green financing advisory"],
  },
];

import { useInView } from "../hooks/useInView";

export default function Services() {
  const { ref, inView } = useInView();
  return (
    <section id="services" style={{background:"#0a1628",padding:"100px 5%",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:-200,right:-200,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(31,78,140,0.1),transparent 70%)",filter:"blur(40px)"}}/>
      <div style={{position:"relative",zIndex:2}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:40,gap:24,flexWrap:"wrap"}}>
          <div>
            <div style={{fontSize:11,fontWeight:600,letterSpacing:"0.22em",textTransform:"uppercase",color:"#3A9E7A",marginBottom:13}}>Services</div>
            <h2 style={{fontSize:"clamp(26px,3.2vw,42px)",fontWeight:800,letterSpacing:"-0.03em",color:"#fff",lineHeight:1.12}}>End-to-end sustainability<br/>intelligence.</h2>
          </div>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.4)",lineHeight:1.8,maxWidth:320}}>Engineered for regulated industries where sustainability is a competitive imperative.</p>
        </div>
        <div ref={ref} style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
          {services.map((s,i)=>(
            <div key={i} className={inView ? "anim-fadeUp" : ""} style={{
              animationDelay: `${i * 0.1}s`, opacity: inView ? undefined : 0,
              background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",
              borderRadius:16,padding:"34px 28px",position:"relative",overflow:"hidden",
              backdropFilter:"blur(10px)",transition:"all 0.3s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.06)";e.currentTarget.style.borderColor="rgba(58,158,122,0.2)";e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 20px 60px rgba(0,0,0,0.3)";(e.currentTarget.querySelector(".topbar") as HTMLElement).style.transform="scaleX(1)";(e.currentTarget.querySelector(".topbar") as HTMLElement).classList.add("anim-shimmer")}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";(e.currentTarget.querySelector(".topbar") as HTMLElement).style.transform="scaleX(0)";(e.currentTarget.querySelector(".topbar") as HTMLElement).classList.remove("anim-shimmer")}}
            >
              <div className="topbar" style={{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg,#3A9E7A,#1F4E8C)",transform:"scaleX(0)",transformOrigin:"left",transition:"transform 0.35s"}}/>
              <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.15em",color:"#3A9E7A",marginBottom:16}}>{s.n}</div>
              <div style={{fontSize:18,fontWeight:800,color:"#fff",marginBottom:10,letterSpacing:"-0.02em",lineHeight:1.25}}>{s.t}</div>
              <p style={{fontSize:13,color:"rgba(255,255,255,0.4)",lineHeight:1.75,marginBottom:16}}>{s.d}</p>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:7}}>
                {s.pts.map((pt,j)=>(
                  <li key={j} style={{fontSize:12,color:"rgba(255,255,255,0.35)",display:"flex",alignItems:"center",gap:8}}>
                    <div style={{width:4,height:4,borderRadius:"50%",background:"#3A9E7A",flexShrink:0}}/>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
