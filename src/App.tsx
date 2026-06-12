import Projects from "@/layout/Projects.tsx"
import Profile from "@/layout/profile.tsx"

import TechStacks from "@/layout/techStacks.tsx"
import Navbar from "@/layout/navbar.tsx";
import Educational from "@/layout/educations.tsx"
import Contact from "@/layout/Contact.tsx"


function App() {
  return (
     <section className="flex  select-none  overflow-y-auto  place-items-center justify-center">
       <div className="flex lg:flex-col gap-3 flex-col-reverse">
         <Navbar/>
         <div className={"lg:max-w-4xl flex flex-col pb-20 md:pb-0 lg:pb-0 gap-3 w-full "}>
           <Profile/>
           <Projects/>
           <TechStacks/>
           <Educational/>
           <Contact/>
         </div>
       </div>

     </section>
  )
}

export default App