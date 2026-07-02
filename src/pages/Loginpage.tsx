
import { LoginForm } from "@/components/login-form"
import Success from "../assets/Success-bg.jpg"
import { Link } from "@tanstack/react-router"
export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <span className="text-[21px] font-extrabold tracking-[-0.02em] text-forest-900 uppercase">ATTENDEX</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-[#e2e8e5] lg:block">
        <img
          src={Success}
          alt="ATTENDEX Teamwork"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
