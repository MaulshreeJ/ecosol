"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "../hooks/useInView";

function CountUp({ end, inView }: { end: number, inView: boolean }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number;
    let animId: number;
    const duration = 1200;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(ease * end));
      if (progress < 1) animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [inView, end]);

  return <>{val}</>;
}

export default function Stats() {
  const { ref, inView } = useInView();
  const stats = [
    { p:"₹", end:4, sup:"K+Cr", d:"India ESG compliance market opportunity growing annually" },
    { p:"", end:30, sup:"%", d:"CAGR of global industrial AI — fastest growing enterprise category" },
    { p:"5–", end:20, sup:"%", d:"Average energy savings unlocked by AI optimization deployments" },
    { p:"", end:2070, sup:"", d:"India Net Zero target driving mandatory compliance infrastructure" },
  ];
  return (
    <section id="stats" style={{background:"linear-gradient(135deg,#061220 0%,#0a1e14 50%,#061220 100%)",padding:"80px 5%",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 80% at 50% 50%,rgba(46,125,79,0.1) 0%,transparent 70%)"}}/>
      <div ref={ref} style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",position:"relative",zIndex:2}}>
        {stats.map((s,i)=>(
          <div key={i} style={{padding:`0 ${i===0?0:36}px`,borderRight:i<3?"1px solid rgba(255,255,255,0.06)":"none"}}>
            <div style={{fontSize:50,fontWeight:900,letterSpacing:"-0.04em",lineHeight:1,color:"#fff",marginBottom:10}}>
              {s.p}<CountUp inView={inView} end={s.end} /><span style={{background:"linear-gradient(135deg,#3A9E7A,#2E7D4F)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>{s.sup}</span>
            </div>
            <p style={{fontSize:13,color:"rgba(255,255,255,0.3)",lineHeight:1.65,maxWidth:180}}>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
