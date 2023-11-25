import React from 'react'

const LoadingText = ({ load }) => {
  return (
    <div className="loading-text">{load}%</div>
  )
}

export default LoadingText