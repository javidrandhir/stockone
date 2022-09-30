
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components4/Home';
import Navbar from './components4/Navbar';
import Zone from './components4/Zone';

function App() {

  
  return (
    <div className="App">
       <div className='layout'>
        <div className="side_bar" id='nav-bar'>
            <Navbar  />
        </div>
        <div className="main_content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/zone' element={<Zone />} />
        </Routes>
        </div>
    </div>
    </div>
  );
}

export default App;
