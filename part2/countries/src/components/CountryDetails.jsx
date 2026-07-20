const CountryDetails = ({country}) => {
        return(
            <div>
                <h1>{country.name.common}</h1>
                <div>Capital {country.capital[0]}</div>
                <div>Area {country.area}</div>
                <h2>Languages</h2>
                <ul>
                    {Object.entries(country.languages).map(([key, value]) => <li key={key}>{value}</li>)}
                </ul>
                <img src={country.flags['png']} />
            </div>
        )
}

export default CountryDetails