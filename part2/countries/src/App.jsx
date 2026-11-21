import {useState, useEffect} from 'react'
import countryService from './services/countries'

import Search from './components/Search'
import Countries from './components/Countries'

const App = () => {
  // Component State
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect( () => {
    countryService
      .getAll()
      .then((allCountries) => {
        setCountries(allCountries)
      })
  }
  ,[])

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  
  return(
    <div>
      <p>find a country <input value={filter} onChange={() => setFilter(event.target.value)} /></p>
      <Countries countries={countriesToShow} />
    </div>
  )
}

export default App