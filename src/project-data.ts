import MusicPlayerLogo from "./assets/app-icons/MUSICPLAYERLOGO.webp"
import DyipSpotLogo from "./assets/app-icons/dyipSpotLogo.webp"
import CredifyLogo from "./assets/app-icons/CREDIFY.webp"
import { PiAndroidLogoBold, PiOrangeSliceBold } from "react-icons/pi"
import {
  FaFigma,
  FaGitAlt,
  FaLinkedin,
  FaReact,
  FaSpotify,
} from "react-icons/fa"

import {
  SiCss,
  SiDrizzle,
  SiExpo,
  SiFirebase,
  SiGithub,
  SiGmail,
  SiHono,
  SiHtml5,
  SiJavascript,
  SiMapbox,
  SiPostman,
  SiReactquery,
  SiSupabase,
  SiTypescript,
} from "react-icons/si"

import { RiPhoneFill, RiTailwindCssFill } from "react-icons/ri"
import { TbBrandMysql, TbBrandTypescript, TbBrandVscode } from "react-icons/tb"
import { DyipSpotDemo } from "@/lib/dyipSpotImagesDemo.ts"
import { MusicPlayerImagesDemo } from "@/lib/MusicPlayerImagesDemo.ts"
import { CredifyImagesDemo } from "@/lib/credifyImagesDemo.ts"
import { Book, SmartphoneIcon } from "lucide-react"

export const ProjectData = [
  {
    id: 3,
    name: "Credify",
    subtitle: "The smart credit management app",
    icon: CredifyLogo,
    type: "Mobile Application",
    background: "bg-[#F7E8C4]",
    demo: CredifyImagesDemo,
    tech: [
      { name: "TypeScript", icon: TbBrandTypescript },
      { name: "React Native", icon: FaReact },
      { name: "Expo", icon: SiExpo },
      { name: "Watermelon DB", icon: PiOrangeSliceBold },
      { name: "Hono", icon: SiHono },
      { name: "Nativewind", icon: RiTailwindCssFill },
      { name: "Drizzle", icon: SiDrizzle },
      { name: "Mysql", icon: TbBrandMysql },
    ],
    status: "In Progress",
    platform: [{ name: "Android", icon: PiAndroidLogoBold }],
    year: 2026,
  },
  {
    id: 1,
    name: "Music Player",
    subtitle: "Your personal audio experience",
    icon: MusicPlayerLogo,
    type: "Mobile Application",
    background: "bg-green-100/70",
    status: "Completed",
    demo: MusicPlayerImagesDemo,
    year: 2025,
    tech: [
      { name: "React Native", icon: FaReact },
      { name: "Expo", icon: SiExpo },
      { name: "Typescript", icon: SiTypescript },
      { name: "React Query", icon: SiReactquery },
      { name: "Spotify Api", icon: FaSpotify },
    ],
    platform: [{ name: "Android", icon: PiAndroidLogoBold }],
  },
  {
    id: 2,
    name: "DyipSpot",
    subtitle: "Real-time jeep tracking system",
    icon: DyipSpotLogo,
    year: 2024,
    type: "Mobile Application",
    demo: DyipSpotDemo,
    background: "bg-blue-50",
    status: "Completed",
    tech: [
      { name: "React Native", icon: FaReact },
      { name: "Expo", icon: SiExpo },
      { name: "Javascript", icon: SiJavascript },
      { name: "Firebase", icon: SiFirebase },
      { name: "Mapbox", icon: SiMapbox },
    ],
    platform: [{ name: "Android", icon: PiAndroidLogoBold }],
  },
]
export const TechStacks = {
  frontend: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "React", icon: FaReact },
    { name: "React Native", icon: FaReact },
    { name: "ShadcnUI", icon: RiTailwindCssFill },
    { name: "TanStack", icon: RiTailwindCssFill },
    { name: "Material Tailwind", icon: RiTailwindCssFill },
    { name: "TailwindCSS", icon: RiTailwindCssFill },
    { name: "Zustand", icon: RiTailwindCssFill },
    { name: "Watermelon DB", icon: PiOrangeSliceBold },
  ],

  backend: [
    { name: "SQL", icon: TbBrandMysql },
    { name: "PHP", icon: TbBrandMysql },
    { name: "Hono", icon: SiHono },
    { name: "MySQL", icon: TbBrandMysql },
    { name: "Drizzle ORM", icon: SiDrizzle },
    { name: "Firebase", icon: SiFirebase },
    { name: "Supabase", icon: SiSupabase },
  ],

  developerTools: [
    { name: "WebStorm", icon: TbBrandVscode },
    { name: "Visual Studio Code", icon: TbBrandVscode },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: SiGithub },
    { name: "Figma", icon: FaFigma },
    { name: "Postman", icon: SiPostman },
    { name: "Laragon", icon: TbBrandMysql },
  ],
}

export const EducationalAttainment = [
  {
    name: "Ilocos Sur Polytechnic State College",
    description:
      "Awarded Best Capstone Project and Best Mobile Developer of the Year for excellence in mobile application development",
    major: "Bachelor of Science in Information Technology (BSIT)",
    awards: [
      {
        name: "Best Mobile Developer",
        icon: SmartphoneIcon,
      },
      {
        name: "Best Capstone Project",
        icon: Book,
      },
    ],
    address: "",
    year: "2025",
    present: true,
  },
  {
    name: "Tagudin National High School",
    description:
      "Completed my secondary education with a specialization in Electrical Installation and Maintenance (EIM).",
    major: "Electrical Installation and Maintenance (EIM)",
    address: "Quirino, Tagudin, Ilocos Sur",
    year: "2021",
    present: true,
  },
]

export const contacts = [
  {
    name: "GitHub",
    link: "https://github.com/itsmeBani",
    icon: SiGithub,
    username: "@itsmeBani",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jiovani-fabro-97953a359/ ",
    icon: FaLinkedin,
    username: "@jiovanifabro",
  },
  {
    name: "Email",
    link: "mailto:fabrojiovani1@gmail.com",
    icon: SiGmail,
    username: "@fabrojiovani1@gmail.com",
  },
  {
    name: "Phone",
    link: "/",
    icon: RiPhoneFill,
    username: "+639107645918",
  },
]

export const EMAIL="fabrojiovani1@gmail.com"