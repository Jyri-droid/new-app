import IconClose from '../../assets/IconClose';
import Button from '../../Button';
import Menu from './Menu';
import ScreenTime from './ScreenTime';
import { useState } from 'react';


const Settings = (props) => {
  
  const [view, setView] = useState(0);
  const handleCloseSettings = () => {
    props.setOpenSettings(false);
  };

  return <aside className={`settings-container ${props.openSettings ? 'settings-container-open' : ''}`}>
    <div className='row'>
        <h2>Settings</h2>
        <Button className='close-button' onClick={handleCloseSettings}><IconClose/></Button>
    </div>
    <div className='settings-content-container'>
      <div className='settings-slider' style={{left: `calc(${view} * (-100% - 1rem))`}}>
        <div className='settings-view'>
          <Menu setView={setView}/>
        </div>
        <div className='settings-view'>
          <ScreenTime setView={setView} settings={props.settings} setSettings={props.setSettings}/>
        </div>
      </div>
    </div>
  </aside>
};

export default Settings;