import { createFileRoute } from '@tanstack/react-router'
import TaskManagementLanding from '../pages/Homepage'

export const Route = createFileRoute('/')({
  component: TaskManagementLanding,
})
