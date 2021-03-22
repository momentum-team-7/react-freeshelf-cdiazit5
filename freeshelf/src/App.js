import './App.css';
import data from './Data.js' 
import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const [books, setBook] = useState(data)
  // set the value of books to the array of objects
  return (
    <div className='react-root'>
      <div className='header'>
        <h1>Freeshelf App</h1>
      </div>
      {books.map((book) => (
        <Book 
          title={book.title} 
          author={book.author} 
          description={book.shortDescription} 
          image={book.coverImageUrl}
          url={book.url} 
          publisher={book.publisher} 
          publicationDate={book.publicationDate} 
          detailedDescription={book.detailedDescription}
        />
      ))}
    </div>
  )
}

const Book = (props) => {
  const { title, author, description, image, url, publisher, publicationDate, detailedDescription } = props
  const [isLess, setisMore] = useState(false)
  const onClick = () => setisMore(!isLess)
  return (
    <div className='book-info'>
      <div className='book-text'>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>{description}</p>
        <div style={isLess? {} : { display:'none' }}>
          <p><b>URL:</b> {url} </p>
          <p><b>Publisher:</b> {publisher}</p>
          <p><b>Publication Date:</b> {publicationDate}</p>
          <p><b>Detailed Description:</b> {detailedDescription} </p>
        </div>
        <button onClick={onClick}>{isLess ? "See less" : "See More"}</button>
      </div>
      <img className='book-image' src={image} alt='image' />
    </div>
  )
}




export default App;

