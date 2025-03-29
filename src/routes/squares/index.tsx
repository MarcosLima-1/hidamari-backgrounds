import FuzzyText from '@/components/react-bit/fuzzy-text'
import Squares from '@/components/react-bit/Squares'
import { createFileRoute } from '@tanstack/react-router'

interface SquaresSearchParams {
  text?: string
  fontSize?: string
  bgColor?: string
  borderColor?: string
}

export const Route = createFileRoute('/squares/')({
  component: RouteComponent,
  validateSearch: ({ borderColor, bgColor, fontSize, text }: SquaresSearchParams) => {
    return {
      text,
      fontSize: fontSize || 40,
      bgColor: bgColor || 'black',
      borderColor: borderColor || '#222'
    }
  }
})

function RouteComponent() {
  const { borderColor, bgColor, fontSize, text } = Route.useSearch()
  return (
    <section style={{ backgroundColor: bgColor }} className='h-svh w-full bg-black'>
      <Squares speed={0.5} squareSize={40} direction='diagonal' borderColor={borderColor} />
      <div className='absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2'>
        {text && <FuzzyText fontSize={`${fontSize}px`}>{text}</FuzzyText>}
      </div>
    </section>
  )
}
