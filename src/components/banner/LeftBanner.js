import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Programmer.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Isira Wasala</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-sm font-bodyFont leading-6 tracking-wide text-justify">
          I’m Isira Wasala, a highly motivated developer with a strong background in software 
          engineering and an entrepreneurial mindset. Currently pursuing a BSc (Hons) in Computer 
          Science at the Informatics Institute of Technology, affiliated with the University of 
          Westminster, I excel in a wide range of programming languages and frameworks. My experience 
          includes developing impactful projects like the CineStream Social Streaming Application, 
          which enhances content monetization and engagement in the art industry. My technical expertise, 
          combined with my proficiency in Agile methodologies and project management, drives me to create 
          innovative solutions and excel in dynamic environments.
        </p>

        <p className="text-sm font-bodyFont leading-6 tracking-wide text-justify">
          My research-driven mindset has been further honed through my work with the National 
          Science Foundation and my roles as an IEEE University Ambassador and Northwestern Province 
          Coordinator. I am passionate about leveraging my skills to make significant contributions 
          to the tech industry, continually learning and adapting to new challenges. Connect with me 
          on LinkedIn and explore my GitHub repositories to see how my technical skills and entrepreneurial 
          spirit come together to deliver excellence.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4 flex-wrap">
            <a href="https://www.linkedin.com/in/isira-wasala/" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" />
              </span>
            </a>
            <a href="https://github.com/Isira-Wasala" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
              </span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <img src="https://skillicons.dev/icons?i=twitter" alt="Twitter" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;
