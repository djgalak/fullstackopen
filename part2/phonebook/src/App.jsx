import { useState, useEffect } from 'react'
import contactService from './services/contacts'
import Filter from './components/Filter'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'

const App = () => {
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  },[])

  const contactsToShow = persons.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())) 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactForm
        contacts={persons}
        setContacts={setPersons} />
      <Contacts contacts={contactsToShow} setContacts={setPersons}/>
    </div>
  )
}

export default App