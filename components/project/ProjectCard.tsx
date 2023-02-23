import React from "react";
import { ProjectCardProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ name, logo, link }: ProjectCardProps) => {
  return (
    <Link target='_blank' href={link}>
    <div className="flex flex-row space-x-5 border border-white px-10 py-6 rounded-xl cursor-pointer items-center">
      <div className="cursor-pointer">
        <Image className="rounded-full" width={50} height={50} src={logo} alt={name} />
      </div>
      <div className="cursor-pointer">{name}</div>
    </div>
    </Link>
  );
};

export default ProjectCard;
