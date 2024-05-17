import Notification from '../Notification';
import { useState } from "react";



let notificationKey = 0;

const Settings = () => {
  const [notification, setNotification] = useState(0);
  const handleNotification = () => {
      notificationKey++;
      setNotification(notificationKey);
  }
    const fontWeights = [];
    for (let i = 100; i <= 900; i+= 100) {
      fontWeights.push(String(i));
    }
    return <>
      <h1>Settings</h1>
        {
        fontWeights.map((element) => 
          <h2 style={{fontWeight: element}}>SF Pro Display | weight {element}</h2>
        )
      }
              <button onClick={handleNotification}>Click me for notification</button>
        {notification !== 0 && <Notification key={notificationKey}>
            This is a notification
        </Notification>}
    </>;
}

export default Settings;