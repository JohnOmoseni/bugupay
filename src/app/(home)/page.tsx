"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Menu from "@/components/Menu";
import Hero from "./_sections/Hero";
import SectionWrapper from "@/app/(home)/_sections/SectionWrapper";
import Header from "@/app/(home)/_sections/Header";
import Services from "./_sections/Services";
import Features from "./_sections/Features";
import FAQ from "./_sections/FAQ";
import GetStarted from "./_sections/GetStarted";
import Footer from "@/app/(home)/_sections/Footer";
import Contact from "./_sections/Contact";
import Stats from "./_sections/Stats";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Header setOpenMenu={setOpenMenu} />
      <AnimatePresence>
        {openMenu && <Menu setOpenMenu={setOpenMenu} />}
      </AnimatePresence>
      <Hero />
      <main>
        <SectionWrapper>
          <Stats />
        </SectionWrapper>
        <SectionWrapper id="services">
          <Services />
        </SectionWrapper>
        <SectionWrapper>
          <Features />
        </SectionWrapper>
        <SectionWrapper id="faq">
          <FAQ />
        </SectionWrapper>
        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
        <SectionWrapper>
          <GetStarted />
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
