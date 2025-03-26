import * as React from "react";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { WorkExperience } from "@/components/portfolio/WorkExperience";
import { ProjectShowcase } from "@/components/portfolio/ProjectShowcase";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Header />
      <main className="bg-[rgba(17,7,31,1)] flex mt-[-11px] w-full flex-col items-center pt-36 pb-[269px] px-20 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
        <div className="flex mb-[-54px] w-[1172px] max-w-full flex-col items-stretch ml-[54px] max-md:mb-2.5">
          <Hero />
          <WorkExperience />
          <ProjectShowcase />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;
