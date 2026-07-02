import { createFileRoute } from '@tanstack/react-router'
import SignupPage from '@/pages/Signuppage'
export const Route = createFileRoute('/signup')({
  component: SignupPage,
})

