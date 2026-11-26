import {useState} from 'react'

const ContactForm = ({contacts, setContacts}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleAddClick = (event) => {
        event.preventDefault()
        console.log(`${newName} ${newNumber}`)

        if (contacts.find(contact => contact.name.toLowerCase() === newName.toLowerCase())) {
            alert(`${newName} already exists in Phonebook`)
            return
        }

        const newContact = {
            name: newName,
            number: newNumber,
            id: String(contacts.length + 1)
        }

        setContacts(contacts.concat(newContact))
    }

    return (
        <div>
            <h2>Enter a new contact</h2>
            <form>
                <div>name <input value={newName} onChange={() => setNewName(event.target.value)}/></div>
                <div>number <input value={newNumber} onChange={() => setNewNumber(event.target.value)}/></div>
                <button type="submit" onClick={handleAddClick}>Add</button>
            </form>

        </div>
    )
}
export default ContactForm