import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons  from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(persons.concat(response.data))
      })
      // eslint-disable-next-line
  }, [])

  const addName = e => {
    e.preventDefault()

    for (let i=0;i < persons.length;i++) {
      if (persons[i].name === newName) {
        alert(`${newName} is already added to phonebook`)  
        setNewName('')
        return
      }
    }
    const nameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    }
    
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = e => {
    setNewName(e.target.value)
  }

  const handleNumberChange = e => {
    setNewNumber(e.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter setFilter={setFilter}/>

      <h3>add a new</h3>

      <PersonForm addName={addName} newName={newName} 
        newNumber={newNumber} handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      {newFilter
        ? <Persons persons={persons.filter(person => 
            person.name.toLowerCase() ===
             newFilter.toLowerCase())}
          />
        : <Persons persons={persons}/>
      }
    </div>
  )
}

export default App