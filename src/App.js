import './App.css';
import AboutPage from './pages/about/AboutPage';
import HomePage from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom'
import SearchPage from './pages/search/SearchPage';
import LoadingIcon from './components/LoadingIcon/LoadingIcon';
import DisplayPage from './pages/display/DisplayPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/display/:id' element={<DisplayPage />} />
      </Routes>
    </div>
  );
}

export default App;
