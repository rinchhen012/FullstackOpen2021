import React from 'react'
import Book from './Book'

const Persons = ({persons}) => {
    return (
      persons.map(person =>
        <Book key={person.name} person={person} />)
    )
}

export default Persons