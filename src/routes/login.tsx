import { createFileRoute } from '@tanstack/react-router'
import Loginpage from '@/pages/Loginpage'

export const Route = createFileRoute('/login')({
  component: Loginpage,
})
