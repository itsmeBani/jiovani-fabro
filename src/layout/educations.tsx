import { EducationalAttainment } from "@/project-data.ts"
import { RiGraduationCapLine } from "react-icons/ri"


function  Educational() {
    const awardColor = [
        "bg-gradient-to-tr from-blue-500/80 via-blue-600 to-blue-500",
        "bg-gradient-to-tr from-purple-500 via-purple-600 to-violet-700",
    ];
  return (
    <section id={"education"} className="dark:bg-[#272727] bg-white p-6   rounded-lg">

      <h1 className="circular font-bold dark:text-white    text-lg lg:text-2xl text-slate-800 ">Educational Attainment</h1>
      <p className="  mt-2 text-slate-600 text-xs lg:text-sm dark:text-white  ">
        I’m someone who enjoys turning ideas into real projects and constantly learning along the way.
      </p>
      <div className="flex flex-col  pt-5    justify-center  w-full place-items-center ">
        {EducationalAttainment?.map((info, index) => {

          return (
            <div key={index} className="w-full  h-auto ">
              <div className="w-auto  flex ">
                <div className="w-[30px] flex flex-col   h-auto">
                  <div className="w-[30px] flex ">
                    <div className="p-2 rounded-full ">
                      <RiGraduationCapLine   />
                    </div>
                  </div>

                  {index !== EducationalAttainment?.length -1  && (
                    <div  className=" flex    justify-center h-full w-full ">
                      <div className="w-[2px] h-full  dark:bg-white/50 bg-gray-500/60 lg:flex   " />
                    </div>
                  )}
                </div>
                <div className="w-full  p h-full pb-2 ">
                  <div className="p-2 pt-0 h-full flex flex-col w-full  rounded-lg ">
                    <p className="w-full dark:text-white circular font-semibold text-slate-800 text-sm leading-4.5 lg:text-md md:text-md  ">
                      {info.major}
                    </p>
                    <p className="w-full   dark:text-gray-300 text-slate-600 font-medium text-xs lg:text-sm ">
                      {info.name}<span className=" "> ({info.year})</span>
                    </p>
                    <div className="flex mt-4 lg:flex-nowrap flex-wrap gap-2">
                    {info?.awards?.map((award,index)=>{
                        const color=awardColor[index]
                        const Icon =award.icon
                      return (
                      <div className={`${color} flex  md-w-auto lg:w-auto lg:gap-10 justify-between relative w-full p-4 lg:p-5 rounded-sm`}>
                       <div>
                           <h1 className={"text-[12px] lg:text-[14px] text-shadow-2xs leading-3.5 text-white font-bold circular "}>{award.name}</h1>
                           <p className={"circular text-[11px] lg:text-[14px] text-white"}>2025</p>
                       </div>

                          <div className={"flex justify-center place-items-center"}>
                              <Icon size={25} strokeWidth={2} className={"text-white rotate-12"}/>
                          </div>
                      </div>
                      )
                    })}





                    </div>

                  </div>

                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Educational;