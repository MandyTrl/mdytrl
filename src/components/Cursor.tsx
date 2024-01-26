'use client'
import React, { useEffect } from 'react'

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor')

    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      cursor.style.left = `${x}px`
      cursor.style.top = `${y}px`
    }

    document.addEventListener('mousemove', moveCursor)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <div
      id="cursor"
      style={{
        position: 'absolute',
        width: '10px',
        height: '10px',
        backgroundColor: '#ffdb27',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}
    ></div>
  )
}

export default Cursor
