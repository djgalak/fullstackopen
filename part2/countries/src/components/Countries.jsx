const Countries = ({countries, filter}) => {
    if (filter === '') {
        return (
            <></>
        )
    }

    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    if (filteredCountries.length > 10) {
        return (<>Too many matches, specify another filter</>)
    }

    if (filteredCountries.length === 1) {
        console.log('Details:', filteredCountries[0].languages)
        return(
            <div>
                <h1>{filteredCountries[0].name.common}</h1>
                <div>Capital {filteredCountries[0].capital[0]}</div>
                <div>Area {filteredCountries[0].area}</div>
                <h2>Languages</h2>
                <ul>
                    {Object.entries(filteredCountries[0].languages).map(([key, value]) => <li key={key}>{value}</li>)}
                </ul>
                <img src={filteredCountries[0].flags['png']} />
            </div>
        )
    }

    return (
        <div>
            {filteredCountries
                .map( country => <div key={country.cca2}>{country.name.common}</div> )
            }
        </div>
    )
}

export default Countries