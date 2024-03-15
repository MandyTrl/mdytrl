import { useState, useEffect } from 'react'

function UseIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isDesktop
}

export default UseIsDesktop