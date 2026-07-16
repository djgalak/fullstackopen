import { useState, useEffect } from 'react'
import personService from './Services/persons'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  },[])


  const handleOnSave = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName,
      number: newNumber
    }

    persons.find((person) => person.name === newName) ? updatePerson(newObject) : addPerson(newObject)
  }

  const updatePerson = (updatePerson) => {
    if (confirm(`${updatePerson.name} is already added to phonebook, replace old number with a new one?`)) {
      personService
      .update(persons.find(person => person.name === updatePerson.name).id, updatePerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
      })}
  }

  const addPerson = (newPerson) => {
    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewNumber('')
        setNewName('')
      })
  }
  const handleFilter = (event) => {
    console.log('Filter', event.target.value)
    setFilter(event.target.value)
  }

  const handleDelete = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    if (confirm(`Delete ${personToDelete.name} ?`)) {
      personService
        .remove(id)
        .then(removedPerson => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={() => setFilter(event.target.value)} />
      <h3>Add new</h3>
        <PersonForm 
          valueName={newName} 
          onChangeName={() => setNewName(event.target.value)}
          valueNumber={newNumber}
          onChangeNumber={() => setNewNumber(event.target.value)}
          onSubmit={handleOnSave} />
      <h3>Numbers</h3>
      <Persons list={persons} filter={filter} deletePerson={handleDelete}/>
    </>
  )
}

export default App