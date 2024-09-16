import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Activity from './pages/activity/Activity';
import Reports from './pages/reports/Reports';
import Settings from './settings/Settings';
import { defaultSettings } from './assets/MockData';
import { useState } from "react";


function App() {
  const [settings, setSettings] = useState(defaultSettings);

  return (
    <Router basename='/new-app'>
      <div className='App'>
        <Menu />
        <Routes>
          <Route exact path='/' element={<Activity settings={settings} />}></Route>
          <Route exact path='/reports' element={<Reports />}></Route>
          <Route exact path='/settings' element={<Settings settings={settings} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;