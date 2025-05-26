import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Avatar from './Avatar';
import Menu from './Menu';
import Activity from './pages/activity/Activity';
import Recap from './pages/recap/Recap';
import Connect from './pages/connect/Connect';
import Settings from './pages/settings/Settings';
import { defaultSettings } from './utils/defaultSettings';
import { useState } from "react";


function App() {
  const [settings, setSettings] = useState(defaultSettings);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const today = '2024-05-16';

  const handleOpenSettings = () => {
    console.log("was clicked");
    setIsSettingsOpen(true);
  };

  return (
    <Router basename='/new-app'>
      <div className='App'>
        <Avatar onClick={handleOpenSettings} />
        <Settings settings={settings} setSettings={setSettings} isSettingsOpen={isSettingsOpen} setIsSettingsOpen={setIsSettingsOpen} />
        <Routes>
          <Route exact path='/' element={<Activity settings={settings} today={today} />} />
          <Route exact path='/recap' element={<Recap today={today} />} />
          <Route exact path='/connect' element={<Connect />} />
        </Routes>
        <Menu />
      </div>
    </Router>
  );
}

export default App;