import Action from '../../Action';
import ToggleRow from './ToggleRow';

const ScreenTime = (props) => {

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
        <Action onClick={props.handleClickBack}>Back</Action>
      </div>
      <div className='row'>
        <h4>Apps considered as screen time</h4>
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
