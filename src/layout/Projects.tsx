
import { ProjectData } from "@/project-data.ts"
import { Link } from "react-router-dom"
import ProjectCard from "@/components/ProjectCard.tsx";

function Projects() {
  return (
 <section id={"projects"} className="bg-white dark:bg-[#212121] p-5  rounded-lg " >


   <div className="flex flex-col  place-items-start   gap-5 ">
     <div>
       <h1 className="text-lg lg:text-2xl dark:text-white  text-slate-700 font-bold ">Projects</h1>
       <p className="mt-2 0text-xs lg:text-sm  dark:text-white  text-slate-600">These are a collection of projects I’ve built to learn, solve problems, and explore new ideas</p>

     </div>
     <div className="  grid cursor-pointer  w-full gap-3 lg:gap-5 grid-cols-2  lg:grid-cols-5">
       {ProjectData.map(({name,type,icon,id,background}) => (
         <Link draggable={false}  key={id} to={`details/${id}`}>
      <ProjectCard name={name} type={type} icon={icon} background={background}/>
         </Link>
       ))}
     </div>
   </div>
 </section>
   )
}

export default Projects