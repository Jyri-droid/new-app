import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Activity from './pages/Activity';
import Settings from './pages/Settings';


function App() {
  return (
    <Router basename='/new-app'>
      <div className='App'>
        <Menu />
        <Routes>
          <Route exact path='/' element={<Activity />}></Route>
          <Route exact path='/settings' element={<Settings />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
