import React from 'react'

const Book = ({ person }) => {
  return (
    <div>{person.name} {person.number}</div>
  )
}

export default Book