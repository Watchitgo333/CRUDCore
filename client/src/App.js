import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ArtistList from './components/ArtistList';
import Main from './views/Main';
import ArtistDetails from './components/ArtistDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/artists' element={<ArtistList/>}/>
            <Route path='/artists/create' element={<Main/>}/>
            <Route path='/artist/:id' element={<ArtistDetails/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
