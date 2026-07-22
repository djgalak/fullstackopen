import { useState, useEffect } from 'react'

import countryService from './services/countries'
import weatherService from './services/weather'

import CountryForm from './components/CountryForm'
import Loading from './components/Loading'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [countryFilter, setCountryFilter] = useState('')
  const [weather, setWeather] = useState(null)
  const [singleCountry, setSingleCountry] = useState(null)
  const [showCountry, setShowCountry] = useState(null)
  const [showCountryWeather, setShowCountryWeather] = useState(null)
  const api_key = import.meta.env.VITE_API_KEY



  useEffect(() => {
    countryService
      .getAll()
      .then(countries => {
        setCountries(countries)})

    if (singleCountry !== null) {
      console.log('Updated Single Country')
      weatherService
        .getWeatherLocation(singleCountry.capitalInfo.latlng[0], singleCountry.capitalInfo.latlng[1])
        .then( weather => setWeather(weather))
    }

    if (showCountry !== null){
      console.log('Updated Show Country')
      weatherService
        .getWeatherLocation(showCountry.capitalInfo.latlng[0], showCountry.capitalInfo.latlng[1])
        .then( weather => setShowCountryWeather(weather))
    }

  },[singleCountry, showCountry])

  if (countries === null) {
    return (
      <>
        <Loading />
      </>
    )
  }

  const handleFilter = (event) => {
    event.preventDefault()
    const newFilter = event.target.value
    const countriesDisplayed = countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase()))
    countriesDisplayed.length === 1
      ? setSingleCountry(countriesDisplayed[0])
      : setSingleCountry(null)
    setCountryFilter(newFilter)
    setShowCountry(null)
  }

  const handleShowDetails = (newCountry) => {
    console.log('Show Details of: ', newCountry)
    setShowCountry(newCountry)
  }


  return(
    <>
      <CountryForm countryFilter={countryFilter} onFilterChange={handleFilter}/>
      <Countries countries={countries} filter={countryFilter} onShow={handleShowDetails}/>
      <CountryDetails country={singleCountry} weather={weather}/>
      <CountryDetails country={showCountry} weather={showCountryWeather}/>
    </>
  )

}
export default App