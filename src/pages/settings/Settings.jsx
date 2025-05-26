import Button from '../../Button';
import Stepper from '../../Stepper';
import ToggleRow from './ToggleRow';

const Settings = (props) => {
  const handleCloseSettings = () => {
    props.setIsSettingsOpen(false);
  };

  const handleStepperChange = (event) => {
    console.log(event);
/*     const copy = {...props.settings};
    copy[event.target.name] = event.target.value;
    props.setSettings(copy); */
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

  return <aside className={`settings-container ${props.isSettingsOpen ? "settings-container-open" : ""}`}>
    <div className='row'>
        <h2>Settings</h2>
        <Button onClick={handleCloseSettings}>Close</Button>
    </div>
    <div className='row'>
      <h3>Active balance</h3>
    </div>
    <Stepper 
      name="screenVsActivityRatio" 
      value={props.settings.screenVsActivityRatio}
      onChange={handleStepperChange}
      step={1}
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
  </aside>
};

export default Settings;