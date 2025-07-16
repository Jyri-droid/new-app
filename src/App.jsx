import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import SplashScreen from './pages/splashScreen/SplashScreen';
import Activity from './pages/activity/Activity';
import Recap from './pages/recap/Recap';
import Family from './pages/family/Family';
import Settings from './pages/settings/Settings';
import { defaultSettings } from './utils/defaultSettings';
import { useState } from "react";
import MobileLayout from './MobileLayout';


function App() {
  const [settings, setSettings] = useState(defaultSettings);
  const [openSettings, setOpenSettings] = useState(false);
  const today = '2024-05-16';

  const handleOpenSettings = () => {
    setOpenSettings(true);
  };

  return (
    <Router basename='/'>
      <MobileLayout>
        <Settings settings={settings} setSettings={setSettings} openSettings={openSettings} setOpenSettings={setOpenSettings} />
        <Routes>
          <Route exact path='/' element={<SplashScreen/>} />
          <Route exact path='/activity' element={<Activity settings={settings} today={today} handleOpenSettings={handleOpenSettings} />} />
          <Route exact path='/recap' element={<Recap today={today} handleOpenSettings={handleOpenSettings} />} />
          <Route exact path='/family' element={<Family />} handleOpenSettings={handleOpenSettings} />
        </Routes>
        <Menu />
      </MobileLayout>
    </Router>
  );
}

export default App;