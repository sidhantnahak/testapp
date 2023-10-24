import React from 'react'

const BooksItem = ({data}) => {
  return (
    <div>
        <p><strong>Title : </strong>{data.title}</p>
        <p><strong>Subtitle : </strong>{data.subtitle}</p>
        <p><strong>Author : </strong>{data.author}</p>
        <p><strong>Category : </strong>{data.category}</p>
        <p><strong>Publisher : </strong>{data.publisher}</p>
    </div>
    
  )
}

export default BooksItem