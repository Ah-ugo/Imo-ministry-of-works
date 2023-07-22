import React from "react";
import NavComponent2 from "../Components/NavComponent2";
import HomeHero from "../Components/HomeHero";
import CallToAction from "../Components/CallToAction";
import ProjectComponent from "../Components/ProjectComponent";
import BlogSection from "../Components/BlogSection";
import FooterSection from "../Components/FooterSection";

export default function Home() {
  return (
    <div>
      <NavComponent2 />
      <HomeHero />
      <CallToAction />
      <ProjectComponent />
      <BlogSection />
      <FooterSection />
    </div>
  );
}
