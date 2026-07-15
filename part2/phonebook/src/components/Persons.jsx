const Persons = ({list,filter,deletePerson}) => {
    return (
        <div>
        {list
        .filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map( person => 
            <div key={person.name}>
                {person.name} {person.number}
                <button type="submit" onClick={() => deletePerson(person.id)}>delete</button>
            </div>)}
        </div>
    )
}
export default Persons