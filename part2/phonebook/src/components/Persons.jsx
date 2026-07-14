const Persons = (props) => {
    return (
        <div>
        {props.list
        .filter((person) => person.name.toLowerCase().includes(props.filter.toLowerCase()))
        .map( person => <div key={person.name}>{person.name} {person.number}</div>)}
        </div>
    )
}
export default Persons