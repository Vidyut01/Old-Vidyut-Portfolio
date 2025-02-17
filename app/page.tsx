// Use Server Side Rendering (SSR)
export const dynamic = 'force-dynamic';

import { TbFileDownload } from "react-icons/tb";
import Section from "^/Section";
import BGParticles from "^/Particles";
import Experience from "^/Experience";
import Skills from "^/Skills";
import Projects from "^/Projects";
import Education from "^/Education";
import Contact from "^/Contact";
import Header from "^/Header";

import about from '@/json/about.json';

export default function Home() {
  return (
    <div className="w-full">
      <BGParticles />
      
      <Header />

      <hr className="mx-10 sm:mx-28 rounded-full h-1 bg-[#E6E6FA] my-10" />
      
      <Section
        id="about"
        title="About"
        className="lg:h-96 section"
      >
        <p className="text-lg lg:text-[21px] lg:max-w-[80%] lg:text-justify">
          {about.about}
          <br/>
          <a
            href="/resume/Vidyut_Resume.pdf"
            target="_blank"
            className="text-sm inline-block px-2 py-3 mt-5 duration-300 bg-gray-800 border-2 border-gray-700 rounded-md shadow-md hover:bg-gray-800 hover:text-blue-400 hover:border-gray-600 hover:shadow-lg active:shadow-sm"
          >
            <TbFileDownload size={20} className="inline align-middle" /> My Resume
          </a>
        </p>
      </Section>

      <div className="h-24"></div>

      <Section
        id="experience"
        title="Experience"
        className="lg:h-[30rem] -mb-20 lg:mb-0 section"
        reverse
      >
        <Experience />
      </Section>

      <div className="h-24"></div>
      
      <Section
        id="projects"
        title="Projects"
        className="lg:h-[1100px] -mb-20 lg:mb-0 section"
      >
        <Projects />
      </Section>
        
      <div className="h-24"></div>

      <Section
        id="skills"
        title="Skills"
        className="lg:h-[70rem] -mb-20 lg:mb-0 section"
        reverse
      >
        <Skills />
      </Section>
      
      <div className="h-24"></div>

      <Section
        id="education"
        title="Education"
        className="lg:h-[20rem] -mb-20 lg:mb-0 section"
      >
        <Education />
      </Section>
      
      <div className="h-24"></div>
      
      <Section
        id="contact"
        title="Contact"
        className="lg:h-[30rem] section"
        reverse
      >
        <Contact />
      </Section>
      
    </div>
  );
}
