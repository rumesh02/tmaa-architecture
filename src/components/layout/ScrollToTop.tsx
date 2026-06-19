import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets scroll position to the top whenever the route changes,
// so navigating to a new page never starts mid-scroll.
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
