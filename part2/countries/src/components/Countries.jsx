import {useState} from 'react'
import Country from './Country'

const Countries = ({countries}) => {
    const [showCountry, setShowCountry] = useState(null)

    // Event Handler
    const handleShowCountry = (id) => {
        const countryToShow = countries.find(country => country.cca2 === id)
        setShowCountry(countryToShow)
    }
   // More than 10
   if (countries.length > 10) {
    return (
        <p>Too many countries</p>
    )
   }

   // No Country
   if (countries.length === 0 ) {
    return (
        <p>No Country Found</p>
    )
   } 

   if (countries.length === 1){
    return (
        <Country country={countries[0]} />
    )
   }

   // Display list of countries
    return (
        <div>
            {countries.map((country) => {
                return (
                <li key={country.cca2}>{country.name.common} <button onClick={() => handleShowCountry(country.cca2)}>Show</button></li>
            )})}
            <Country country={showCountry} />
        </div>
    )
}
export default Countries