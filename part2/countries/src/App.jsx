import { useState, useEffect } from 'react'

import countryService from './services/countries'

import CountryForm from './components/CountryForm'
import Loading from './components/Loading'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState(null)
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
  const handleFilter = (event) => {
    event.preventDefault()
    const countriesFiltered = countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
    setCountryFilter(event.target.value)

  }

  return (
    <>
      <CountryForm countryFilter={countryFilter} onFilterChange={handleFilter}/>
      <Countries countries={countries} filter={countryFilter}/>
    </>
  )
}
export default App