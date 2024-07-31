import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaLaptop } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Experties" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Software Engineering"
          des="I excel in creating innovative and efficient software solutions with a strong foundation in software engineering principles. My skills in front-end and back-end development, database management, and user interface design ensure high-quality results."
          icon={<FaLaptop />}
        />
        <Card
          title="Research and Development"
          des="As a technology enthusiast, I conduct research to stay ahead of emerging trends and deepen my understanding of programming. My involvement with the National Science Foundation has further honed my skills and driven my passion for innovative solutions."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Quality Assurance"
          des="I am committed to writing high-quality, requirement-aligned code and ensuring that solutions meet high standards. My approach includes thorough testing and validation to guarantee reliability and performance, reflecting my dedication to delivering top-notch software."
          icon={<SiProgress />}
        />
        <Card
          title="UI/UX Design"
          des="I create engaging and user-friendly designs that enhance the overall user experience. My approach involves understanding user needs and incorporating modern design principles to deliver intuitive and visually appealing interfaces that improve usability and satisfaction."
          icon={<FaMobile />}
        />
        <Card
          title="Project Management"
          des="In project management, I focus on planning, executing, and overseeing projects to achieve specific goals within set constraints. I balance scope, time, and resources while leading my team to deliver successful outcomes. By managing these elements effectively, I ensure that objectives are met efficiently, driving innovation and creating value."
          icon={<SiAntdesign />}
        />
        <Card
          title="Technopreneur"
          des="As a technopreneur, I blend my passion for technology with entrepreneurial spirit to drive innovative projects and solutions. I focus on identifying opportunities in the tech landscape, developing new ideas, and bringing them to life through creative problem-solving and strategic planning."
          icon={<FaGlobe />}
        />
      </div>

      {/* Section Breaker */}
      <div className="my-16 border-t border-black"></div>

      <div className="mt-16">
        <Title title="Skills" des="Languages & Tools" />
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=react" alt="React" />
            <span>React</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" />
            <span>Next.js</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" />
            <span>Tailwind CSS</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=html" alt="Html" />
            <span>HTML</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=css" alt="Css" />
            <span>CSS</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=java" alt="Java" />
            <span>Java</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=python" alt="Python" />
            <span>Python</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=mysql" alt="Mysql" />
            <span>MySQL</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=dart" alt="Dart" />
            <span>Dart</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=flutter" alt="Flutter" />
            <span>Flutter</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=git" alt="Git" />
            <span>Git</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=firebase" alt="Firebase" />
            <span>Firebase</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=vercel" alt="Vercel" />
            <span>Vercel</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=postman" alt="Postman" />
            <span>Postman</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=figma" alt="Figma" />
            <span>Figma</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=androidstudio" alt="Android Studio" />
            <span>Android Studio</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=idea" alt="IntelliJ IDEA" />
            <span>IntelliJ IDEA</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=pycharm" alt="PyCharm" />
            <span>PyCharm</span>
          </div>
          <div className="bannerIcon">
            <img src="https://skillicons.dev/icons?i=vscode" alt="VSCode" />
            <span>VSCode</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
