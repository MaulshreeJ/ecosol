"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputStyle: React.CSSProperties = {
    width:"100%",padding:"11px 14px",border:"1px solid rgba(255,255,255,0.1)",
    borderRadius:8,fontFamily:"inherit",fontSize:13,color:"#fff",
    background:"rgba(255,255,255,0.05)",outline:"none",appearance:"none" as any,
    transition:"all 0.2s", transform: "scale(0.98)",
  };

  return (
    <section id="contact" style={{background:"#0a1628",padding:"100px 5%",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",bottom:-200,left:-200,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(46,125,79,0.08),transparent 70%)",filter:"blur(40px)"}}/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1.1fr",gap:72,alignItems:"start",position:"relative",zIndex:2}}>
        {/* Left */}
        <div>
          <div style={{fontSize:11,fontWeight:600,letterSpacing:"0.22em",textTransform:"uppercase",color:"#3A9E7A",marginBottom:13}}>Contact</div>
          <h2 style={{fontSize:"clamp(26px,3.2vw,42px)",fontWeight:800,letterSpacing:"-0.03em",color:"#fff",lineHeight:1.12,marginBottom:16}}>Let's build intelligent sustainability.</h2>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.45)",lineHeight:1.8,maxWidth:480,marginBottom:24}}>Whether you're exploring ESG compliance, energy optimization, or a full AI deployment — start with a conversation. We respond within 24 hours.</p>
          {[
            {ico:"✉️",text:"info@ecosoltech.in",href:"mailto:info@ecosoltech.in"},
            {ico:"📨",text:"contact@ecosoltech.in",href:"mailto:contact@ecosoltech.in"},
            {ico:"📍",text:"India · Remote-first · Globally available",href:null},
          ].map((d,i)=>(
            <a key={i} href={d.href||"#"} style={{
              display:"flex",alignItems:"center",gap:12,padding:"13px 15px",
              background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",
              borderRadius:9,fontSize:14,fontWeight:500,color:"rgba(255,255,255,0.65)",
              textDecoration:"none",marginTop:12,backdropFilter:"blur(8px)",transition:"all 0.2s",
              cursor: d.href?undefined:"default",
            }}
              onMouseEnter={e=>{if(d.href){e.currentTarget.style.background="rgba(255,255,255,0.07)";e.currentTarget.style.borderColor="rgba(58,158,122,0.2)";e.currentTarget.style.color="#fff"}}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.04)";e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";e.currentTarget.style.color="rgba(255,255,255,0.65)"}}
            >
              <div style={{width:34,height:34,borderRadius:8,background:"rgba(58,158,122,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0}}>{d.ico}</div>
              {d.text}
            </a>
          ))}
        </div>

        {/* Form */}
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:20,padding:40,backdropFilter:"blur(16px)",boxShadow:"0 24px 64px rgba(0,0,0,0.2)"}}>
          <div style={{fontSize:18,fontWeight:800,color:"#fff",marginBottom:5,letterSpacing:"-0.02em"}}>Request a consultation</div>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.35)",marginBottom:24,lineHeight:1.6}}>Tell us about your sustainability challenge. We'll come prepared.</p>
          <form onSubmit={handleSubmit}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:0}}>
              <div style={{marginBottom:13}}>
                <label style={{display:"block",fontSize:10,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:6}}>Full Name</label>
                <input type="text" placeholder="Your name" required style={inputStyle}
                  onFocus={e=>{e.target.style.borderColor="rgba(58,158,122,0.4)";e.target.style.transform="scale(1)"}}
                  onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.1)";e.target.style.transform="scale(0.98)"}}/>
              </div>
              <div style={{marginBottom:13}}>
                <label style={{display:"block",fontSize:10,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:6}}>Company</label>
                <input type="text" placeholder="Organisation" required style={inputStyle}
                  onFocus={e=>{e.target.style.borderColor="rgba(58,158,122,0.4)";e.target.style.transform="scale(1)"}}
                  onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.1)";e.target.style.transform="scale(0.98)"}}/>
              </div>
            </div>
            <div style={{marginBottom:13}}>
              <label style={{display:"block",fontSize:10,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:6}}>Email</label>
              <input type="email" placeholder="you@company.com" required style={inputStyle}
                onFocus={e=>{e.target.style.borderColor="rgba(58,158,122,0.4)";e.target.style.transform="scale(1)"}}
                onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.1)";e.target.style.transform="scale(0.98)"}}/>
            </div>
            <div style={{marginBottom:13}}>
              <label style={{display:"block",fontSize:10,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:6}}>Service Interest</label>
              <select style={{...inputStyle,cursor:"pointer"}}
                onFocus={e=>{e.target.style.borderColor="rgba(58,158,122,0.4)";e.target.style.transform="scale(1)"}}
                onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.1)";e.target.style.transform="scale(0.98)"}}>
                <option value="">Select</option>
                <option>ESG Intelligence & Compliance</option>
                <option>AI Optimization Engine</option>
                <option>Sustainability Strategy</option>
                <option>Government Solution</option>
                <option>Full Platform</option>
              </select>
            </div>
            <div style={{marginBottom:20}}>
              <label style={{display:"block",fontSize:10,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:6}}>Message</label>
              <textarea placeholder="Describe your sustainability challenge..." style={{...inputStyle,minHeight:88,resize:"vertical"}}
                onFocus={e=>{e.target.style.borderColor="rgba(58,158,122,0.4)";e.target.style.transform="scale(1)"}}
                onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.1)";e.target.style.transform="scale(0.98)"}}/>
            </div>
            <button type="submit" disabled={sent} style={{
              width:"100%",padding:14,background:sent?"#3db882":"#3A9E7A",color:"#050e1a",
              border:"none",borderRadius:8,cursor:sent?"wait":"pointer",fontFamily:"inherit",
              fontSize:14,fontWeight:800,letterSpacing:"0.04em",textTransform:"uppercase",
              transition:"all 0.2s", display:"flex", justifyContent:"center", alignItems:"center", gap:10
            }}>
              {sent && <div style={{width:16,height:16,border:"2px solid #050e1a",borderTopColor:"transparent",borderRadius:"50%",animation:"spinRotation 0.6s linear infinite"}}/>}
              {sent?"Sending...":"Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
