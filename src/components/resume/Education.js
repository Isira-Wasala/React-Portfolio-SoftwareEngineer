import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2009 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc (Hons) in Computer Science"
            subTitle="University of Westminster (2021 - 2025)"
            result="Present"
            des="The BSc (Hons) in Computer Science provides a thorough education in computer science principles and practices. The program covers essential areas such as programming, software engineering, and data management, combined with hands-on experience through projects and placements. Currently in the third year of the program (Industrial Placement Year). I am actively seeking an internship in the software engineering industry to apply my skills and gain valuable industry experience."
          />
          <ResumeCard
            title="Foundation Certificate in Higher Education"
            subTitle="Informatics Institue of Technology (2020 - 2021)"
            result="Completed"
            des="The Foundation Certificate provides students with essential academic skills and knowledge to succeed in higher education. This program focuses on developing critical thinking, research skills, and a strong understanding of academic subjects, preparing students for advanced study."
          />
          <ResumeCard
            title="Primary and Advanced School Education"
            subTitle="Ananda National College (2009 - 2019)"
            result="Completed"
            des="I started my educational journey in primary school, where I developed a keen interest in science and technology. In advanced school, I furthered my passion and began my research journey with the National Science Foundation (NSF). This early research experience shaped my academic goals and fueled my drive for innovation in technology."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
