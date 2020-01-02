import React from 'react'

export default function Book(props) {
  return (
    <li>
      <h1>{props.volumeInfo.title}</h1>
      <img src={props.volumeInfo.imageLinks.smallThumbnail} alt="{props.volumeInfo.title} cover" />
      <p>Author: {props.volumeInfo.authors}</p>
      <p>Price: {props.saleInfo.retailPrice ? props.saleInfo.retailPrice.amount : 'No Available Price'}</p>
      <p>{props.volumeInfo.description}</p>
      <hr />
    </li>
  )
}
