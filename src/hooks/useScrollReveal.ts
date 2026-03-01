import { useEffect, useRef } from 'react'

/** Adds .visible to every .reveal element when it enters the viewport */
export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // animate skill bars
            entry.target.querySelectorAll<HTMLElement>('[data-width]').forEach((bar) => {
              bar.style.width = bar.dataset.width + '%'
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])
}
