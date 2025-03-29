import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent
})

function RouteComponent() {
  return <div>Isso e um test ta bom</div>
}
