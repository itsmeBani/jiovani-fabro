import { ProjectData } from "@/project-data.ts"
import { Link, Navigate, useParams } from "react-router-dom"
import { Badge } from "@/components/ui/badge.tsx"
import { CalendarIcon, ChevronLeft, CircleCheck, Loader } from "lucide-react"

function ProjectDetails() {
  const { id } = useParams()

  if (!id) return
  const projectDetails = ProjectData.filter((value) => value.id === Number(id))

  if (!projectDetails.length) return  <Navigate to="/" replace />;
  return (
    <div id={"education"} className="flex max-w-5xl  p-3 flex-col gap-5 rounded-3xl ">

      <div className="flex flex-col gap-5">
        <div className={"flex"}>
          <Link to={"/"} className={" lg:p-2  hover:text-blue-600 dark:text-white text-slate-800 circular font-medium"}>
            <ChevronLeft size={30}  strokeWidth={3}/>
          </Link>
        </div>
        <div className="w-[120px]">
          <div
            className={`aspect-square rounded-md ${projectDetails[0].background} w-full p-5 dark:bg-[#292929]`}
          >
            <img alt="" src={projectDetails[0].icon} loading="lazy" />
          </div>

        </div>

        <div>
          <h1 className="circular text-2xl lg:text-4xl font-bold text-gray-800 dark:text-white">
            {projectDetails[0].name} —
          </h1>
          <p className="circular text-lg lg:text-3xl font-medium text-gray-700 dark:text-gray-300">
            {projectDetails[0].subtitle}
          </p>
          <div className="mt-3">
            <p className="circular text-sm font-thin">Platform</p>
            <div className="flex flex-wrap gap-2 py-2">
              {projectDetails[0].platform.map((platform) => (
                <Badge variant={"outline"} className={"h-8 px-3"}>
                  <platform.icon />
                  {platform.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-3">
            <p className="circular text-sm font-thin">Built With</p>
            <div className="flex flex-wrap gap-2 py-2">
              {projectDetails[0].tech.map((platform) => {
                return (
                  <Badge variant={"outline"} className={"circular dark:text-white text-slate-800 text-sm h-9 px-3"}>
                    <platform.icon />
                    {platform.name}
                  </Badge>
                )
              })}
            </div>
          </div>
          <div className="mt-3">
            <p className="circular text-sm font-thin">Status</p>
            <div className="py-2">
              {projectDetails[0]?.status &&
              projectDetails[0]?.status === "Completed" ? (
                <Badge
                  variant={"outline"}
                  className="circular h-9 bg-green-100 px-3 text-green-700 dark:bg-green-800/30 dark:text-green-500"
                >
                  <CircleCheck />Completed
                </Badge>
              ) : (
                <Badge
                  variant={"outline"}
                  className="circular h-9  px-3  "
                >
                  <Loader className="animate-spin" />In Progress
                </Badge>
              )}

            </div>
          </div>
          <div className="mt-3">
            <p className="circular text-sm font-thin">Year Built</p>
            <div className="flex gap-2 py-2">
              <Badge variant="outline" className="h-8 dark:text-blue-400 text-blue-600 px-3">
                <CalendarIcon/>
                {projectDetails[0].year}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center justify-center gap-3">
        {projectDetails[0]?.demo.map((img, index) => (
          <div
            key={index}
            className="max:aspect-[0.462712/1] mx-auto w-full shadow-sm max-w-sm rounded-3xl"
          >
            <img loading={"lazy"}
              className="h-full rounded-2xl bg-white object-contain"
              src={img}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectDetails
