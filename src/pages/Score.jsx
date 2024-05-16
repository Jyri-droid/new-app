import Notification from '../Notification';
import { useState } from "react";

let notificationKey = 0;

const Score = () => {
    const [notification, setNotification] = useState(0);
    const handleNotification = () => {
        notificationKey++;
        setNotification(notificationKey);
    }
    return <>
        <h1>Score</h1>
        <h2>Some numbers</h2>
        <button onClick={handleNotification}>Click me for notification</button>
        {notification !== 0 && <Notification key={notificationKey}>
            This is a notification
        </Notification>}
    </>
}

export default Score;