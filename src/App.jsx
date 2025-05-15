import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Activity from './pages/activity/Activity';
import Recap from './pages/recap/Recap';
import Settings from './pages/settings/Settings';
import { defaultSettings } from './utils/defaultSettings';
import { useState } from "react";


function App() {
  const [settings, setSettings] = useState(defaultSettings);
  const today = '2024-05-16';

  return (
    <Router basename='/new-app'>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Activity settings={settings} today={today} />}></Route>
          <Route exact path='/recap' element={<Recap today={today} />}></Route>
          <Route exact path='/settings' element={<Settings settings={settings} setSettings={setSettings} />}></Route>
        </Routes>
        <Menu />
      </div>
    </Router>
  );
}

export default App;