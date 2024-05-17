import Avatar from '../Avatar';
import Select from '../Select';
import ScreenTimeLeft from '../ScreenTimeLeft';
import TimeBalance from '../TimeBalance';
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
        <ScreenTimeLeft value={10.5}/>
        <TimeBalance screenTime={60} activityTime={120}/>
        <div className='row'>
            <h3>Screen time</h3>
        </div>
        <button onClick={handleNotification}>Click me for notification</button>
        {notification !== 0 && <Notification key={notificationKey}>
            This is a notification
        </Notification>}
    </div>
}

export default Activity;