import { useState } from 'react'
import Filter from './components/Filter'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'

const App = () => {
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '201-555-0002',
      id: '1'
     }
  ]) 

  const contactsToShow = persons.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactForm
        contacts={persons}
        setContacts={setPersons} />
      <Contacts contacts={contactsToShow} />
    </div>
  )
}

export default App