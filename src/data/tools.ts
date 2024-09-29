import { StarIcon } from "@heroicons/react/20/solid";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

type ToolType = {
  name: string;
  description: string;
  path: string;
};

const tools: ToolType[] = [
  {
    name: "Récompenses étoiles",
    description: "Système de récompenses avec des étoiles",
    path: "/starsGame",
  },
  {
    name: "Générateur Dobble",
    description: "Créateur de cartes Dobble",
    path: "/dobbleGenerator",
  },
];

export default tools;
