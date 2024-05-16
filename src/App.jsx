import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Score from './pages/Score';
import Settings from './pages/Settings';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Score />}></Route>
          <Route exact path='/settings' element={<Settings />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
