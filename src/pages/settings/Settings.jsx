import Avatar from '../../Avatar';
import Stepper from '../../Stepper';
import ToggleRow from './ToggleRow';
import Notification from '../../Notification';
import { useState } from "react";

let renderCount = 0;

const Settings = (props) => {
  const [notification, setNotification] = useState(0);
  const handleNotification = () => {
      renderCount++;
      setNotification(renderCount);
  };
  const handleToggleChange = (event) => {
    const copy = {...props.settings};
    copy
      .apps
      .find((app) => app.name === event.target.value)
      .isScreenTime
      = event.target.checked;
    props.setSettings(copy);
  };
  return <div className='content-container'>
      <div className='row'>
          <h2>Settings</h2>
          <Avatar />
      </div>
      <div className='row'>
        <h3>Active balance</h3>
    </div>
    <Stepper 
      name="screenVsActivityRatio" 
      value={props.settings.screenVsActivityRatio} 
      step={2} 
    />
      <div className='row'>
        <h3>Apps considered as screen time</h3>
    </div>
      {props.settings.apps.map((app, index) =>
          <ToggleRow 
            value={app.name} 
            checked={app.isScreenTime}
            onChange={handleToggleChange}
            key={`toggleRow ${index}`}
          >
              {app.name}
          </ToggleRow>
      )}
      {JSON.stringify(props.settings)}
      <button onClick={handleNotification}>Click me for notification</button>
      {notification !== 0 && <Notification key={renderCount}>
          This is a notification
      </Notification>}
  </div>;
};

export default Settings;