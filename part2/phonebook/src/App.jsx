import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '39-44-12345'
     }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleOnSave = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName,
      number: newNumber
    }

    persons.find((person) => person.name === newName) 
      ? alert(`${newName} is already added to the phonebook`) 
      : setPersons(persons.concat(newObject))

    setNewNumber('')
    setNewName('')
  }

  const handleFilter = (event) => {
    console.log('Filter', event.target.value)
    setFilter(event.target.value)
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
      <Persons list={persons} filter={filter}/>
    </>
  )
}

export default App