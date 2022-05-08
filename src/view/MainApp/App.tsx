import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Works from '../AudioWork/Work';


import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={ <Navigate to="/view" />} />
        <Route path="/view/*" element={ <Works /> } />
        <Route path="*" element={ <Navigate to="/" />} />

            {/* <Route path='/works/*' element={ <Works />} />
        <Route path='/paper' element={ <div> paper </div>}/>
        <Route path='/music' element={ <div> music </div>}/>
        <Route path="*" element={ <Navigate to="/music" />} />*/}
    

      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
