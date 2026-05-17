"use client";
export default function Footer() {
  const cols = [
    { title:"What We Do", links:[["#ribbon","Capabilities"],["#services","Services"],["#whatwedo","Industries"],["#process","Process"]] },
    { title:"Services", links:[["#services","ESG Intelligence"],["#services","AI Optimization"],["#services","Regulatory Advisory"],["#services","Analytics Platform"]] },
    { title:"Industries", links:[["#whatwedo","Manufacturing"],["#whatwedo","Energy & Utilities"],["#whatwedo","Infrastructure"],["#whatwedo","Government"]] },
    { title:"Company", links:[["#contact","Contact Us"],["mailto:contact@ecosoltechnologies.com","contact@ecosoltechnologies.com"],["#","Careers"],["#","About Us"]] },
  ];
  return (
    <footer style={{background:"#020810",padding:"60px 5% 30px",borderTop:"1px solid rgba(255,255,255,0.04)"}}>
      <style>{`
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr; gap: 44px; padding-bottom: 44px; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 26px; font-size: 12px; color: rgba(255,255,255,0.2); flex-wrap: wrap; gap: 12px; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <div style={{fontSize:20,fontWeight:700,marginBottom:4}}>
            <span style={{color:"#3A9E7A"}}>Eco</span><span style={{color:"#fff"}}>Sol</span>
          </div>
          <span style={{fontSize:7,fontWeight:500,letterSpacing:"0.35em",color:"rgba(255,255,255,0.2)",textTransform:"uppercase",display:"block",marginBottom:14}}>Technologies</span>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.28)",lineHeight:1.75,maxWidth:210,marginBottom:20}}>AI infrastructure for ESG intelligence and sustainable enterprise. India-based, globally minded.</p>
          <div style={{display:"flex",gap:8}}>
            {["in","tw","yt"].map(s=>(
              <div key={s} style={{width:34,height:34,borderRadius:8,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"rgba(255,255,255,0.35)",cursor:"pointer",transition:"all 0.4s ease"}}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(58,158,122,0.1)";e.currentTarget.style.borderColor="rgba(58,158,122,0.2)";e.currentTarget.style.color="#3A9E7A";e.currentTarget.style.transform="rotate(360deg)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.04)";e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";e.currentTarget.style.color="rgba(255,255,255,0.35)";e.currentTarget.style.transform="rotate(0deg)"}}
              >{s}</div>
            ))}
          </div>
        </div>
        {/* Link columns */}
        {cols.map((col,i)=>(
          <div key={i}>
            <div style={{fontSize:10,fontWeight:600,letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(255,255,255,0.2)",marginBottom:16}}>{col.title}</div>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {col.links.map(([href,label])=>(
                <li key={label}>
                  <a href={href} style={{fontSize:13,color:"rgba(255,255,255,0.36)",textDecoration:"none",transition:"color 0.2s"}}
                    onMouseEnter={e=>e.currentTarget.style.color="#3A9E7A"}
                    onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.36)"}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div>© 2025 EcoSol Technologies Pvt. Ltd. All rights reserved.</div>
        <div style={{display:"flex",gap:20,flexWrap:"wrap",justifyContent:"center"}}>
          {["Privacy Policy","Terms","Cookie Policy"].map(l=>(
            <a key={l} href="#" style={{color:"rgba(255,255,255,0.28)",textDecoration:"none",transition:"color 0.2s"}}
              onMouseEnter={e=>e.currentTarget.style.color="#3A9E7A"}
              onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.28)"}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
