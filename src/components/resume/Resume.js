import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex flex-col items-center text-center">
        <Title title="4+ YEARS OF EXPERIENCE" des="My Resume" />
        <a
          href="https://drive.google.com/file/d/1bdCL-1E_7LfhZfDhcitVw2q2Re-mA0_W/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0 px-6 py-2 text-white bg-designColor rounded-lg shadow-lg hover:bg-opacity-90 transition-opacity duration-300"
        >
          Download My Resume
        </a>
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-6">
          <li
            onClick={() =>
              setEducationData(true) & setSkillData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) & setSkillData(true)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
    </section>
  );
}

export default Resume;
