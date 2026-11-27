import Contact from './Contact'
import contactService from '../services/contacts'

const Contacts = ({contacts, setContacts}) => {

    const handleDelete = (event, id) => {
        event.preventDefault()
        contactService
            .remove(id)
            .then(removedId => {
                setContacts(contacts.filter(contact => contact.id !== removedId))
            })
    }

    return (
        <div>
            <h2>Contacts</h2>
            {contacts.map(contact => {
                return (
                <Contact key={contact.id} contact={contact} onDelete={() => handleDelete(event, contact.id)}/> )} )}
        </div>
    )
}
export default Contacts