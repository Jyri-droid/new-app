const Notification = (props: {children: string}) => {
    return <div className='notification-container'>
        <p>{props.children}</p>
    </div>
}

export default Notification;