import React, { useState } from 'react'


const Book = (props) => {
    const { title, author, description, image, url, publisher, publicationDate, detailedDescription } = props
    const [showLess, showMore] = useState(false)
    const onClick = () => showMore(!showLess)
    return (
        <div className='book-info'>
        <div className='book-text'>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p>{description}</p>
        <div style={showLess? {} : { display:'none' }}>
            <p><b>URL:</b> <a src={url}>{url}</a> </p>
            {(publisher !== null)? <p><b>Publisher:</b> {publisher}</p> : <p><b>Publisher:</b> No info available</p>}
            {(publicationDate !== null)? <p><b>Publication Date:</b> {publicationDate}</p> : <p><b>Publication Date:</b> No info available</p>}
            {/* <p><b>Publisher:</b> {publisher}</p> */}
            {/* <p><b>Publication Date:</b> {publicationDate}</p> */}
            <p><b>Detailed Description:</b> {detailedDescription} </p>
        </div>
        <button onClick={onClick}>{showLess ? "See less" : "See More"}</button>
        </div>
        {(image !== '') ? 
        <img className='book-image' src={image} alt='image' /> :
        <img className='book-image' src='media/noimage.jpeg' alt='placeholder' />
        }
        {/* <img className='book-image' src={image} alt='image' /> */}
    </div>
    )
}

export default Book