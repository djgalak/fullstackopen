import {useState} from 'react'

const Filter = ({filter, setFilter}) => {
    return (
        <div>
            <h2>Filter</h2>
            <div><input value={filter} onChange={() => setFilter(event.target.value)}/></div>
        </div>
    )
}
export default Filter