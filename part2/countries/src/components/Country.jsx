const Country = ({country}) => {
    if (country === null) return
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital}</p>
            <h1>Languages</h1>
            {Object.entries(country.languages).map(lang => <li key={lang[0]}>{lang[1]}</li>)}
            <img src={country.flags.png} />
        </div>
    )
}
export default Country