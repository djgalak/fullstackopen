const PersonForm = (props) => {
    return (
        <>
            <div>name: <input value={props.valueName} onChange={props.onChangeName}/></div>
            <div>number: <input value={props.valueNumber} onChange={props.onChangeNumber}/></div>
            <div><button type="submit" onClick={props.onSubmit}>add</button></div>
        </>
    )
}
export default PersonForm