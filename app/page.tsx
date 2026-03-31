import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ribbon from "./components/Ribbon";
import WhatWeDo from "./components/WhatWeDo";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ribbon />
      <WhatWeDo />
      <Stats />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
