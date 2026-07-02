import { SignupForm } from "@/components/signup-form"
import dashboard from "../assets/download-graph.jpg"
import { Link } from "@tanstack/react-router"

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-2 p-4 md:p-6">
        <div className="flex justify-center gap-2 md:justify-start">
                 <Link to="/" className="flex items-center gap-2 font-medium">
                   <span className="text-[21px] font-extrabold tracking-[-0.02em] text-forest-900 uppercase">ATTENDEX</span>
                 </Link>
               </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={dashboard}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
