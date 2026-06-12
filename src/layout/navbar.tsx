import { GraduationCap, Laptop, Phone } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";

function Navbar() {
    const navItemClass =
        "flex flex-col lg:flex-row items-center lg:gap-2 py-2 rounded-full cursor-pointer font-medium text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 text-[10px] lg:text-sm";

    return (
        <nav className="fixed lg:static bottom-0 z-1 w-full lg:border-none border-t lg:rounded-full bg-white dark:bg-[#212121]">
            <TooltipProvider>
                <div className="flex w-full items-center justify-center gap-10 lg:gap-6 px-4 py-1 lg:justify-start lg:px-6 lg:py-2">
                    <a href="#projects" className={navItemClass}>
                        <Laptop size={20} />
                        <span>Projects</span>
                    </a>

                    <a href="#education" className={navItemClass}>
                        <GraduationCap size={21} />
                        <span>Educations</span>
                    </a>

                    <a href="#contacts" className={navItemClass}>
                        <Phone size={17} strokeWidth={2.6} />
                        <span>Contacts</span>
                    </a>
                </div>
            </TooltipProvider>
        </nav>
    );
}

export default Navbar;