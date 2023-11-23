import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [activeIndex, setActiveIndex] = useState(0) // Initial active index is 0

  const card_contents = [
    {imageUrl: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', imageTitle: 'Explore The World'},
    {imageUrl: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', imageTitle: 'Wild Forest'},
    {imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80', imageTitle: 'Sunny Beach'},
    {imageUrl: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80', imageTitle: 'City on Winter'},
    {imageUrl: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', imageTitle: 'Mountains - Clouds'},
  ]

  const handleCardClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className='container'>
      {
        card_contents.map((card_content, index) => (
          <Card 
            key={index}
            imageUrl={card_content.imageUrl}
            imageTitle={card_content.imageTitle}
            isActive={index === activeIndex}
            onClick={() => handleCardClick(index)}
          />
        ))
      }
    </div>
  )
}

export default App
