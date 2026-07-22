const CountryDetails = ({country, weather}) => {

    const logoUrl = 'https://openweathermap.org/payload/api/media/file/'
    if (country === null) { return (<></>) }
    const logo = weather === null
        ? null
        : `${logoUrl}${weather.weather[0].icon}.png`
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
            <div>Temperature {weather !== null && weather.main.temp} Celsius</div>
            <img src={logo} />
            <div>Wind {weather !== null && weather.wind.speed} m/s</div>
        </div>
    )
}

export default CountryDetails