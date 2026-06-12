
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="text-9xl font-extrabold tracking-tight text-primary">404</h1>

        <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>

        <p className="mt-2 text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved, deleted, or never existed.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <Button asChild className={"bg-blue-600"}>
            <Link to="/">
              <Home className="mr-2 circular t h-4 w-4" />
              Back Home
            </Link>
          </Button>

        </div>
      </div>
    </div>
  )
}
