import { useState } from 'react'

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

  const handleOnChange = (event) => {
    setNewName(event.target.value)
  }
  const handleOnChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

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
      <h1>Phonebook</h1>
      <div>filter shown with <input value={filter} onChange={handleFilter}/></div>
      <h2>Add new</h2>
      <form>
        <div>name: <input value={newName} onChange={handleOnChange}/></div>
        <div>number: <input value={newNumber} onChange={handleOnChangeNumber}/></div>
        <div><button type="submit" onClick={handleOnSave}>add</button></div>
      </form>
      <h2>Numbers</h2>
        {persons
        .filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map( person => <div key={person.name}>{person.name} {person.number}</div>)}
    </>
  )
}

export default App