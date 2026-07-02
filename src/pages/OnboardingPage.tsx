import { GalleryVerticalEnd, Building, User, Phone, Mail, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useNavigate } from "@tanstack/react-router"

export default function OnboardingPage() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, redirect to dashboard or home after successful onboarding
    navigate({ to: '/' })
  }

  return (
    <div className="min-h-svh flex items-center justify-center bg-[#f9faf9] p-4 md:p-8">
      <div className="w-full max-w-lg  p-8 md:p-10">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-forest-900 text-white mb-2 shadow-sm">
              <GalleryVerticalEnd className="size-5" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-forest-950">Welcome to Attendex</h1>
            <p className="text-sm text-gray-500">
              Let's get your organization set up in just a few steps.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="fullName" className="text-forest-900 font-medium">Full Name</FieldLabel>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="pl-9 bg-gray-50/50 border-gray-200 focus:bg-white"
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel htmlFor="orgName" className="text-forest-900 font-medium">Organization Name</FieldLabel>
                <div className="relative">
                  <Building className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    id="orgName"
                    type="text"
                    placeholder="Acme Corp"
                    required
                    className="pl-9 bg-gray-50/50 border-gray-200 focus:bg-white"
                  />
                </div>
              </Field>
              
              <Field>
                <FieldLabel htmlFor="email" className="text-forest-900 font-medium">Organization Email</FieldLabel>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="hello@acmecorp.com"
                    required
                    className="pl-9 bg-gray-50/50 border-gray-200 focus:bg-white"
                  />
                </div>
              </Field>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field>
                  <FieldLabel htmlFor="phone" className="text-forest-900 font-medium">Phone Number</FieldLabel>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      required
                      className="pl-9 bg-gray-50/50 border-gray-200 focus:bg-white"
                    />
                  </div>
                </Field>

                <Field>
                  <FieldLabel htmlFor="role" className="text-forest-900 font-medium">Your Role</FieldLabel>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <Input
                      id="role"
                      type="text"
                      placeholder="e.g. HR Manager"
                      required
                      className="pl-9 bg-gray-50/50 border-gray-200 focus:bg-white"
                    />
                  </div>
                </Field>
              </div>
            </FieldGroup>

            <Button 
              type="submit" 
              className="w-full mt-4 bg-forest-800 hover:bg-forest-700 text-white h-11 text-[15px] font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              Complete Setup
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
