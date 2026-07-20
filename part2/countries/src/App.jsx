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
    setCountryFilter(event.target.value)
  }

  const handleShowDetails = (cca2) => {
    console.log('Country', cca2)
  }
  return (
    <>
      <CountryForm countryFilter={countryFilter} onFilterChange={handleFilter}/>
      <Countries countries={countries} filter={countryFilter} handleShowDetails={handleShowDetails}/>
    </>
  )
}
export default App