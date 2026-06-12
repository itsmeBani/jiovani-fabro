import { Outlet} from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"
import SuccessAnimation from "@/components/successAnimation.tsx";


export function RootLayout() {
  return (
  <section className={"p-2 lg:p-10  "}>

    <Toaster position={"top-center"} theme={"dark"} richColors={true} duration={1000}   />

    <Outlet/>


  </section>
  )
}

export default RootLayout
