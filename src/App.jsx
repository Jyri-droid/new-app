import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Score from './pages/Score';
import Settings from './pages/Settings';


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' exact element={<Score />}></Route>
          <Route path='npm' exact element={<Settings />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
