import {contacts} from "@/project-data.ts";


function  Contacts() {
    return (
            <section id={"contacts"} className="dark:bg-[#272727] bg-white p-6   rounded-lg">

                <h1 className="circular text-lg font-bold text-slate-800 dark:text-white lg:text-2xl">
                    Contact Me
                </h1>

                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 lg:text-sm">
                    Have a project in mind, a job opportunity, or just want to
                    connect? Feel free to reach out. I'm always open to discussing
                    new ideas, collaborations, and exciting opportunities.
                </p>
                <div className={"py-3 lg:py-5 flex flex-wrap gap-2 rounded-md "}>
                    {contacts.map(({ name, link, icon: Icon ,username}) => (
                        <a
                            key={name}
                            href={link}
                            className="flex group p-3  lg:p-4 border items-center  rounded-sm  gap-3"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Icon  className={" size-5.5 lg:size-6 text-slate-800  dark:text-white"} />
                            <p className={"flex  flex-col justify-center"}>
                                <span className={"circular text-xs lg:text-sm leading-3.5 font-bold group-hover:text-blue-600 dark:text-white text-slate-800"}>{name}</span>
                                <span className={" text-[10px] lg:text-[12px]    dark:text-white group-hover:text-blue-600 text-slate-800"}>{username}</span>

                            </p>

                         </a>
                    ))}
                </div>
             </section>
    );
}

export default Contacts;