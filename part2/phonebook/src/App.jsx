import { useState, useEffect } from 'react'
import './index.css'
import personService from './Services/persons'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [infoMessage, setInfoMessage] = useState(null)
  const [isError, setIsError] = useState(false)

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
        triggerMessage(`Phone Number for ${returnedPerson.name} updated`, false, 3000)
        setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
        setNewNumber('')
        setNewName('')
      })
      .catch(error => {
        triggerMessage(`error updating ${updatePerson.name}`, true, 3000)
      })}
  }

  const triggerMessage = (message, isError, timing) => {
    setInfoMessage(message)
    setIsError(isError)
    setTimeout(() => setInfoMessage(null), timing)
  }

  const addPerson = (newPerson) => {
    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        triggerMessage(`Added ${returnedPerson.name}`, false, 3000)
        setNewNumber('')
        setNewName('')
      })
      .catch(error => {
          triggerMessage(`error adding ${newPerson.name}`, true, 3000)
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
          triggerMessage(`Deleted ${removedPerson.name}`, false, 3000)
        })
        .catch(error => {
          triggerMessage(`error deleting ${personToDelete.name}`, true, 3000)
        })
    }
  }

  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={infoMessage} isError={isError}/>
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