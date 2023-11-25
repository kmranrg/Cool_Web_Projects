import React from 'react'

const Banner = ({ load }) => {
  return (
    <>
        <section className="bg" style={{filter: `blur(${30-((load/100)*30)}px)`}}></section>
    </>
  )
}

export default Banner