import './App.css';
import data from './Data.js' 
import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const [books] = useState(data)
  // set the value of books to the array of objects
  return (
    <div className='react-root'>
      <h1>Freeshelf App</h1>
      {books.map((book) => (
        <Book title={book.title} author={book.author} description={book.shortDescription} image={book.coverImageUrl} />
      ))}
    </div>
  )
}

const Book = (props) => {
  const { title, author, description, image } = props
  return (
    <div className='book-info'>
      <img className='book-image' src={image} alt='image' />
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{description}</p>
    </div>
  )
}




export default App;

