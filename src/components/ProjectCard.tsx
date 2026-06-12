type ProjectCardProps = {
    name: string;
    type: string;
    icon: string;
    background?: string;
    className?: string;
};

function ProjectCard({
                         name,
                         type,
                         icon,
                         background = "bg-slate-100",
                         className = "",
                     }: ProjectCardProps) {
    return (
        <div
            className={`flex group   flex-col gap-1 cursor-pointer ${className}`}
        >
            <div
                className={`aspect-square  rounded-md ${background} dark:bg-[#292929] p-5 w-full`}
            >
                <img
                    alt={name}
                    src={icon}
                    loading="lazy"
                    draggable={false}
                    className="w-full  h-full object-contain"
                />
            </div>

            <div className="pl-1 lg:mt-2">
                <p className="text-sm lg:text-md  dark:group-hover:text-blue-400  font-bold group-hover:text-blue-500 dark:text-white text-slate-700">
                    {name}
                </p>
                <p className="text-xs lg:leading-4 dark:text-slate-200 text-slate-500">
                    {type}
                </p>
            </div>
        </div>
    );
}

export default ProjectCard;