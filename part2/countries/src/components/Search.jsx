import { useState } from 'react'

const Search = ({text}) => {
    const [newSearch, setNewSearch] = useState('')
    return (
        <div>
            {text} <input value={newSearch} onChange={() => setNewSearch(event.target.value)}/>
        </div>
    )
}
export default Search