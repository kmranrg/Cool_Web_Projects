import React, { useEffect, useRef } from 'react'

const Container = () => {
  const containerRef = useRef()

  useEffect(() => {
    function handleScroll() {
        const triggerBottom = window.innerHeight / 5 * 4
        const boxTop = containerRef.current.getBoundingClientRect().top
        
        if (boxTop < triggerBottom) {
            containerRef.current.classList.add('show')
        } else {
            containerRef.current.classList.remove('show')
        }
    }

    window.addEventListener('scroll',handleScroll)

    return () => window.removeEventListener('scroll',handleScroll)

  },[])

  return (
    <div className="box" ref={containerRef}><h2>Hi Eddie</h2></div>
  )
}

export default Container