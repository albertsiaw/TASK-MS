
import { LoginForm } from "@/components/login-form"
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
      <div className="relative hidden flex-col items-center justify-center gap-6 bg-forest-900 p-12 text-center lg:flex">
        <h1 className="text-4xl font-bold text-white">Welcome to ATTENDEX</h1>
        <p className="text-lg text-white/90">Your ultimate attendance management solution</p>
        <div className="mt-4 space-y-4 text-left">
          <div className="flex items-start gap-3">
            <span className="mt-1 text-emerald-400">✓</span>
            <div>
              <h3 className="font-semibold text-white">Real-Time Tracking</h3>
              <p className="text-sm text-white/70">Monitor attendance as it happens with live updates and instant notifications.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 text-emerald-400">✓</span>
            <div>
              <h3 className="font-semibold text-white">Smart Reports</h3>
              <p className="text-sm text-white/70">Generate detailed attendance reports with just a few clicks.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 text-emerald-400">✓</span>
            <div>
              <h3 className="font-semibold text-white">Seamless Integration</h3>
              <p className="text-sm text-white/70">Works with your existing systems for a smooth transition.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
