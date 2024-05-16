import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Score from './pages/Score';
import Settings from './pages/Settings';


function App() {
  return (
    <Router basename='/new-app'>
      <div className='App'>
        <Menu />
        <Routes>
          <Route exact path='/new-app' element={<Score />}></Route>
          <Route exact path='/settings' element={<Settings />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
