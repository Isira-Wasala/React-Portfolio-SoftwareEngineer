import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-14">
        <div className="md:col-span-1">
          <ProjectsCard
            title="Cinestream"
            des="Cinestream is a comprehensive streaming platform designed for users to search for movies and TV shows, create personalized watchlists, and enjoy seamless streaming experiences. Key features include user authentication, media search, playback controls, and various monetization options for content creators. This application leverages Dart (Flutter) for its development, with Firebase for backend services, Jitsi Meeting for video conferencing, and PayPal for payment integration."
            src={projectOne}
            githubLink="https://github.com/Isira-Wasala/Cinestream"
          />
          <ProjectsCard
            title="Food Queue Management System"
            des="Queue Management System is designed to streamline customer service in food centers by managing customer queues efficiently. It offers features such as ticket generation, real-time queue monitoring, and updates for both customers and staff. This system is developed using Java, focusing on enhancing operational efficiency and improving customer experience."
            src={projectTwo}
            githubLink="https://github.com/Isira-Wasala/Java-Queue-Management-System-for-Food-Center"
          />
        </div>
        <div className="md:col-span-1">
          <ProjectsCard
            title="Shopping Cart Management System"
            des="Shopping Cart Management System enables users to browse products, add items to their cart, and proceed to checkout seamlessly. It includes robust features for inventory management and order processing. Developed with Java and Java Swing, this system offers a user-friendly interface and efficient handling of shopping cart operations."
            src={projectThree}
            githubLink="https://github.com/Isira-Wasala/Java-Shopping-Cart-Management-System"
          />
          <ProjectsCard
            title="Student Progress Tracker"
            des="Student Progression Outcome System tracks student performance and academic progression efficiently. It provides tools for entering and managing academic records, monitoring progress over time, and generating reports. Developed with Python, this system is designed to enhance educational management and support student success."
            src={projectFour}
            githubLink="https://github.com/Isira-Wasala/Python-Student-Progression-Outcome-System"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
