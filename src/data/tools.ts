import {StarIcon} from "@heroicons/react/20/solid";
import {ForwardRefExoticComponent, RefAttributes, SVGProps} from "react";

type ToolType = {
  name: string;
  description: string;
  path: string;
  icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & { title?: string | undefined; titleId?: string | undefined; } & RefAttributes<SVGSVGElement>>;
  image: string;
}

 const tools: ToolType[] = [
  {
    name: "Récompenses étoiles",
    description: "Système de récompenses avec des étoiles",
    path: "/starsGame",
    icon: StarIcon,
    image: "./images/stars-bg.png"
  }
]

export default tools;