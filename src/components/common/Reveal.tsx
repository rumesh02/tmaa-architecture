import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Delay in ms before the reveal transition begins */
  delay?: number
  /** Vertical offset (px) to travel from while hidden */
  y?: number
  /** Render an inline element instead of a block */
  inline?: boolean
}

/**
 * Fades + lifts its children into view the first time they enter the viewport.
 * Respects prefers-reduced-motion and only animates once.
 */
function Reveal({ children, className = '', delay = 0, y = 30, inline = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : `translateY(${y}px)`,
    transition: `opacity 1.1s cubic-bezier(0.16, 0.7, 0.2, 1) ${delay}ms, transform 1.1s cubic-bezier(0.16, 0.7, 0.2, 1) ${delay}ms`,
    display: inline ? 'inline-block' : undefined,
    willChange: 'opacity, transform',
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}

export default Reveal
