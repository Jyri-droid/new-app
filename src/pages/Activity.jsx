import Avatar from '../Avatar';
import Select from '../Select';
import Notification from '../Notification';
import { useState } from "react";



let notificationKey = 0;

const Activity = () => {
    const [notification, setNotification] = useState(0);
    const handleNotification = () => {
        notificationKey++;
        setNotification(notificationKey);
    }
    return <div className='content-container'>
        <div className='row'>
            <h2>Activity</h2>
            <Avatar />
        </div>
        <div className='row'>
            <Select />
        </div>
        <h1>Score</h1>
        <h2>Some numbers</h2>
        <button onClick={handleNotification}>Click me for notification</button>
        {notification !== 0 && <Notification key={notificationKey}>
            This is a notification
        </Notification>}
    </div>
}

export default Activity;