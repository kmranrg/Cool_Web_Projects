import React from 'react'

const Card = ({imageUrl, imageTitle, isActive, onClick}) => {
  return (
    <>
        <div className={`panel ${isActive ? 'active' : ''}`} style={{backgroundImage: `url(${imageUrl})`}} onClick={onClick}>
            <h3>{imageTitle}</h3>
        </div>
    </>
  )
}

export default Card