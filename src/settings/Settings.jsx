import Notification from '../Notification';
import { useState } from "react";

let renderCount = 0;

const Settings = (props) => {
  const [notification, setNotification] = useState(0);
  const handleNotification = () => {
      renderCount++;
      setNotification(renderCount);
  }
  return <div className='content-container'>
    <h1>Settings</h1>
      {JSON.stringify(props.settings)}
      <button onClick={handleNotification}>Click me for notification</button>
      {notification !== 0 && <Notification key={renderCount}>
          This is a notification
      </Notification>}
  </div>;
}

export default Settings;