import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const [newName, setNewName] = useState('')

  const handleOnChange = (event) => {
    setNewName(event.target.value)
  }

  const handleOnSave = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName
    }
    setPersons(persons.concat(newObject))
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleOnChange}/>
        </div>
        <div>
          <button type="submit" onClick={handleOnSave}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map( person => <div key={person.name}>{person.name}</div>)}
    </>
  )
}

export default App