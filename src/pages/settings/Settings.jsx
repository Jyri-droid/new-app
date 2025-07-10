import IconClose from '../../assets/IconClose';
import Button from '../../Button';
import Menu from './Menu';
import General from './General';
import ScreenTime from './ScreenTime';
import Activity from './Activity';
import { useState } from 'react';


const Settings = (props) => {
  
  const [view, setView] = useState(0);
  const handleCloseSettings = () => {
    props.setOpenSettings(false);
  };
  const handleClickBack = () => {
      setView(0);
    };
  const views = [
    <General handleClickBack={handleClickBack} settings={props.settings}/>,
    <ScreenTime handleClickBack={handleClickBack} settings={props.settings} setSettings={props.setSettings} />,
    <Activity handleClickBack={handleClickBack} settings={props.settings}/>,
  ];

  return <aside className={`settings-container ${props.openSettings ? 'settings-container-open' : ''}`}>
    <div className='row'>
        <h2>Settings</h2>
        <Button className='close-button' onClick={handleCloseSettings}><IconClose/></Button>
    </div>
    <div className='settings-content-container'>
      <div className='settings-slider' style={{left: `calc(${view === 0 ? 0 : 1} * (-100% - 1rem))`}}>
        <div className='settings-view'>
          <Menu setView={setView}/>
        </div>
        <div className='settings-view'>
          {views[view - 1]}
        </div>
      </div>
    </div>
  </aside>
};

export default Settings;