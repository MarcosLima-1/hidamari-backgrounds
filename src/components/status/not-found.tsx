import { useLocation } from '@tanstack/react-router'

export function NotFound() {
  const path = useLocation().pathname
  return <section>{path}</section>
}
