const CountryForm = ({countryFilter, onFilterChange}) => {
    return(
    <div>
        find countries <input value={countryFilter} onChange={onFilterChange}/>
    </div>
    )
}

export default CountryForm