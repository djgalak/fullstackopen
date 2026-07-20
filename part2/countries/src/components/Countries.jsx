import CountryDetails from './CountryDetails'

const Countries = ({countries, filter, handleShowDetails}) => {
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

    const handleShowDetails = (country) => {

    }

    if (filter === '') {
        return (
            <></>
        )
    }

    if (filteredCountries.length > 10) {
        return (<>Too many matches, specify another filter</>)
    }

    if (filteredCountries.length === 1) {
        console.log('Details:', filteredCountries[0].languages)
        return(
            <CountryDetails country={filteredCountries[0]} />
        )
    }

    return (
        <div>
            {filteredCountries
                .map( country => {
                    return (
                        <div key={country.cca2}>{country.name.common}
                            <button type="submit" onClick={() => handleShowDetails(country.cca2)}>Show</button>
                        </div>
                     )})
            }
        </div>
    )
}

export default Countries