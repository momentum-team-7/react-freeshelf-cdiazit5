import './App.css';
import data from './Data.js' 
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Book from './Book.js'


const App = () => {
  const [books, setBook] = useState(data)
  // set the value of books to the array of objects
  return (
    <div className='react-root'>
      <div className='header'>
        <h1 className='freeshelf'>Freeshelf App</h1>
      </div>
      <div className='content'>
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
    </div>
  )
}

export default App;

