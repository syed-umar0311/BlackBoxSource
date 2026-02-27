import { useEffect, useRef } from 'react'

export default function MouseCircle() {
  const circleRef = useRef(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const circleX = useRef(0)
  const circleY = useRef(0)
  const speed = 0.1

  useEffect(() => {
    const circle = circleRef.current
    if (!circle) return

    const handleMouseMove = (e) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
    }

    const animate = () => {
      circleX.current += (mouseX.current - circleX.current) * speed
      circleY.current += (mouseY.current - circleY.current) * speed
      circle.style.left = `${circleX.current}px`
      circle.style.top = `${circleY.current}px`
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animate()
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return <div className="circle" ref={circleRef} />
}
