import Action from '../../Action';
import ToggleRow from './ToggleRow';

const ScreenTime = (props) => {

    const handleClickBack = () => {
      props.setView(0);
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

    return <>
      <div className='row'>
        <Action onClick={handleClickBack}>&lt;&nbsp;Back</Action>
      </div>
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
      </>
};

export default ScreenTime;
