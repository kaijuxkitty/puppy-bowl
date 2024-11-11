import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllPlayers from './components/AllPlayers.jsx';
import SinglePlayer from './components/SinglePlayer.jsx';
import NewPlayerForm from './components/NewPlayerForm.jsx';

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter> 
  <Routes> 
    <Route path = "/" element= {<AllPlayers/>} />
    <Route path= "/players/:id" element={<SinglePlayer/>}/>
    <Route path = "/new-player" element= {<NewPlayerForm/>}/>
  </Routes>
  </BrowserRouter>
);

