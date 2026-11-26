import contactService from '../services/contacts'

const Contact = ({contact, onDelete}) => {
    return (
        <li>{contact.name} {contact.number} <button onClick={onDelete}>Delete</button></li>
    )
}
export default Contact