import { Badge } from "@/components/ui/badge.tsx";
import { TechStacks as STACKS } from "../project-data.ts";

function TechStacks() {
    const sections = [
        { title: "Frontend", data: STACKS.frontend },
        { title: "Backend", data: STACKS.backend },
        { title: "Developer Tools", data: STACKS.developerTools },
    ];

    return (
        <section className="bg-white dark:bg-[#212121] p-5  rounded-lg">


            <div className="flex flex-col gap-2">
                <h1 className="text-lg lg:text-2xl dark:text-white text-slate-800 font-bold">
                    Tech Stacks
                </h1>
                <p className="text-xs lg:text-sm dark:text-gray-200 text-slate-600">
                    These tools help me build modern, responsive, and seamless web experiences with great user interaction
                </p>
            </div>


            {sections.map((section, i) => (
                <div key={i} className="py-4">
                    <h2 className="text-sm lg:text-lg dark:text-gray-300 text-slate-700 circular font-semibold  mb-3">
                        {section.title}
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {section.data.map((tech, index) => {

                            return (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="flex    text-xs lg:text-sm dark:text-gray-300 text-slate-700 items-center gap-2 h-8 px-3 "
                                >

                                    {tech.name}
                                </Badge>
                            );
                        })}
                    </div>
                </div>
            ))}

        </section>
    );
}

export default TechStacks;