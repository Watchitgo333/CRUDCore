import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ArtistList from './components/ArtistList';
import Main from './views/Main';
import ArtistDetails from './components/ArtistDetails';
import ArtistUpdateForm from './components/ArtistUpdateForm';
import Subsidary from './views/Subsidary';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/artists' element={<ArtistList/>}/>
            <Route path='/artists/create' element={<Main/>}/>
            <Route path='/artist/:id' element={<ArtistDetails/>}/>
            <Route path='/artist/edit/:id' element={<ArtistUpdateForm/>}/>
            <Route path='/artist/:id/create/discog' element={<Subsidary/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
