import { cn } from '@/utils/cn'

interface ResponsiveDivProps {
  hide?: boolean
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
}

export function ResponsiveDiv({ hide = false, position = 'bottom-left' }: ResponsiveDivProps) {
  if (hide) return null

  const defaultStyle =
    'size-full font-bold  drop-shadow-lg items-center justify-center rounded-lg p-2'
  return (
    <div
      className={cn(
        'fixed z-[9999] flex size-10 items-center justify-center rounded-lg text-white',
        {
          'bottom-5 left-5': position === 'bottom-left',
          'right-5 bottom-5': position === 'bottom-right',
          'top-5 left-5': position === 'top-left',
          'top-5 right-5': position === 'top-right'
        }
      )}
    >
      <span className={`flex bg-red-500 sm:hidden ${defaultStyle}`}>sm</span>
      <span className={`hidden bg-blue-500 sm:flex md:hidden ${defaultStyle}`}>md</span>
      <span className={`hidden bg-green-500 md:flex lg:hidden ${defaultStyle}`}>lg</span>
      <span className={`hidden bg-yellow-500 lg:flex xl:hidden ${defaultStyle}`}>xl</span>
      <span className={`hidden bg-purple-500 xl:flex 2xl:hidden ${defaultStyle}`}>2xl</span>
      <span className={`hidden bg-pink-500 2xl:flex ${defaultStyle}`}>xl+</span>
    </div>
  )
}
