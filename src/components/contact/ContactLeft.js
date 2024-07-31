import React from 'react';
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Isira Wasala</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Engineer | Researcher | Entrepreneur
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I'm always eager to connect with fellow professionals, collaborators, and anyone interested in technology and innovation. Whether you have a question, a project idea, or just want to say hello, feel free to reach out. Let's make great things happen together!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+94 761232009</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">isirawasala01@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
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
  );
}

export default ContactLeft;
