import React from 'react';
import Book from './Book'

export default function List(props) {
  let books = props.books.map((book,i)=> {
    return <Book key={i} volumeInfo={book.volumeInfo} saleInfo={book.saleInfo}/>
  })
  return (
    <div>
      <ul>
        {books}
      </ul>
    </div>
  )
}
