const Notification = (props) => {
    return <div className='notification-container'>
        <p>{props.children}</p>
    </div>
}

export default Notification;