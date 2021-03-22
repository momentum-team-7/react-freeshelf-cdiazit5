import './App.css';
import data from './Data.js' 
import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const [books, setBook] = useState(data)
  // set the value of books to the array of objects
  return (
    <div className='react-root'>
      <h1 className='header'>Freeshelf App</h1>
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
          <p>URL: {url} </p>
          <p>Publisher: {publisher}</p>
          <p>Publication Date: {publicationDate}</p>
          <p>Detailed Desciption: {detailedDescription} </p>
        </div>
      </div>
      <button onClick={onClick}>{isLess ? "See less" : "See More"}</button>
      <img className='book-image' src={image} alt='image' />
    </div>
  )
}




export default App;

