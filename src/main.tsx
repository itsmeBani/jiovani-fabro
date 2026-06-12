import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import  { RootLayout } from "./layout/RootLayout.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import ProjectDetails from "@/layout/ProjectDetails.tsx";
import App from "@/App.tsx";
import ViewResume from "@/layout/ViewResume.tsx";
import NotFound from "@/layout/NotFoundPage.tsx";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children :[
            { index:true,
                element:<App/>
            },
            { path:"details/:id",
                element:<ProjectDetails/>
            }
            ,   { path:"resume",
                element:<ViewResume/>
            }

        ],
        errorElement:<NotFound/>
    },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
