import './App.css';
import AboutPage from './pages/about/AboutPage';
import HomePage from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom'
import SearchPage from './pages/search/SearchPage';
import DisplayPage from './pages/display/DisplayPage';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/about' element={<><Navbar /> <AboutPage /></>} />
        <Route path='/search' element={<><Navbar /> <SearchPage /></>} />

        <Route path='/display/:id' element={<><Navbar /> <DisplayPage /></>} />
      </Routes>
    </div>
  );
}

export default App;
