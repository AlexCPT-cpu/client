import React from "react";
import ProjectCard from "./project/ProjectCard";

const Main = () => {
  const Projects = [
    {
      name: "HAC 333 NFT",
      logo: "/333.jpeg",
      link: "/collections/hac333"
    },
    {
      name: "HAC 3333 NFT",
      logo: "/3333.jpeg",
      link: "/collections/hac3333"
    },
    {
      name: "HAC ALIENS NFT",
      logo: "/alien.jpeg",
      link: "/collections/hacaliens"
    },
  ];

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex flex-col space-y-6">
        {Projects.map((project, index) => {
          return (
            <div key={index}>
            <ProjectCard link={project.link} name={project.name} logo={project.logo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
