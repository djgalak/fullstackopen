import { useState, useEffect } from 'react'

import countryService from './services/countries'

import CountryForm from './components/CountryForm'
import Loading from './components/Loading'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [country, setCountry] = useState(null)
  const [countryFilter, setCountryFilter] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(countries => {
        setCountries(countries)})
  },[])

  if (countries === null) {
    return (
      <>
        <Loading />
      </>
    )
  }

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(countryFilter.toLowerCase()))
  console.log('Filtered', countriesToShow)

  const handleFilter = (event) => {
    event.preventDefault()
    const newFilter = event.target.value
    setCountryFilter(newFilter)
  }

  const handleShowDetails = (country) => {
    setCountry(country)
  }

  if (countriesToShow.length > 1) {
    if (country === null){
    return(
      <>
        <CountryForm countryFilter={countryFilter} onFilterChange={handleFilter}/>
        <Countries countries={countries} filter={countryFilter} onShow={handleShowDetails}/>
      </>
    )} else {
    return(
      <>
        <CountryForm countryFilter={countryFilter} onFilterChange={handleFilter}/>
        <Countries countries={countries} filter={countryFilter} onShow={handleShowDetails}/>
        <CountryDetails country={country} />
      </>
    )

    }
  }

  return (
    <>
      <CountryForm countryFilter={countryFilter} onFilterChange={handleFilter}/>
      <CountryDetails country={countriesToShow[0]} />
    </>
  )
}
export default App