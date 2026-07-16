const Notification = ({message, isError}) => {
    if (message === null) {
        return null
    }
    const className = isError ? 'notif_error' : 'notif_info'
    console.log(isError)
    return (
        <div className={className}>
            {message}
        </div>
    )
}
export default Notification