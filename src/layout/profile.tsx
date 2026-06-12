import ProfilePicture from "../assets/efa30fc2-f3aa-4d40-8954-2ffa30f8fefc.webp"
import { Badge } from "@/components/ui/badge.tsx"
import { Button } from "@/components/ui/button.tsx"
import { Eye, Files, Laptop, Smartphone } from "lucide-react"
import { useNavigate } from "react-router-dom"

import Lottie, {

  type LottieRefCurrentProps,
} from "lottie-react"
import party from "@/assets/lottie/splash.json";
import { useRef, useState } from "react"
import {EMAIL} from "@/project-data.ts";


function Profile() {
  const navigate = useNavigate()
    const lottieRef=useRef<LottieRefCurrentProps | null>(null)
  const handleViewResume = () => {
    navigate({ pathname: "resume" })
  }
    const [showCopied, setShowCopied] = useState(false);

  const copyEmail=async ()=>{

       await navigator.clipboard.writeText(EMAIL);

      lottieRef.current?.goToAndPlay(0, true);

      setShowCopied(true);

      setTimeout(() => {
          setShowCopied(false);
      }, 1500);
  }
  return (
    <section className="w-full rounded-lg bg-white p-4  lg:p-6 dark:bg-[#212121]">
      <div className="flex h-full flex-col-reverse place-items-center justify-center lg:flex-row">
        <div className="flex w-full flex-col gap-2 p-2">
          <div>
            <p className="circular font-semibold text-gray-500 lg:text-xl dark:text-gray-300">
              Hello,
            </p>
            <h1 className="circular text-2xl font-extrabold text-gray-900 lg:text-5xl dark:text-white">
              I’m{" "}
              <span className={"relative text-blue-600 dark:text-blue-500"}>
                Jiovani Fabro
              </span>
            </h1>
            <p className="mt-1 max-w-xl text-xs leading-relaxed text-gray-600 lg:text-sm dark:text-gray-300">
              I’m a developer who enjoys building clean and modern web
              applications using React and related technologies.
            </p>
            <div className={"flex flex-wrap gap-2 py-4"}>
              <Badge variant={"outline"} className={"circular p-3"}>
                <Smartphone />
                Mobile Development
              </Badge>
              <Badge variant={"outline"} className={"circular p-3"}>
                <Laptop /> Web Development
              </Badge>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleViewResume}>
              <Eye />
              Resume
            </Button>
            <Button onClick={copyEmail} variant={"outline"} className={" relative"}>
              <Files />
                <Lottie autoPlay={false}  lottieRef={lottieRef}     animationData={party}  loop={false} className={"pointer-events-none h-[300px]  absolute w-[300px]"} />

                <span
                    className={`pointer-events-none absolute dark:text-white -top-2.5 left-1/2 -translate-x-1/2 text-[10px] circular font-medium text-blue-500 transition-all duration-300 ${
                        showCopied
                            ? "opacity-100 -translate-y-2 scale-100"
                            : "opacity-0 translate-y-2 scale-65"
                    }`}
                >
        Copied!
      </span>
                Copy Email
            </Button>
          </div>
        </div>
        <div className="flex justify-center w-full flex-col gap-2 lg:w-auto lg:gap-4">
          <div>
            <Badge className="bg-green-100 text-[8px] font-semibold text-green-700 uppercase lg:text-xs dark:bg-green-800/30 dark:text-green-500">
              <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
              Available for hire
            </Badge>
          </div>
          <div className="aspect-square w-[120px]">
            <img
              alt={""}
              fetchPriority={"high"}
              src={ProfilePicture}
              loading={"lazy"}
              className={"rounded-xl"}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
