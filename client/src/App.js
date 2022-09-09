import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ArtistList from './components/ArtistList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/artist' element={<ArtistList/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
