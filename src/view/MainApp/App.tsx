import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Works from '../works/works';
import Container from '../PageContainer/Container';

import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={ <Navigate to="/main" />} />
        <Route path="/main" element={ <Container /> } />
        {/* <Route path='/works/*' element={ <Works />} />
        <Route path='/paper' element={ <div> paper </div>}/>
        <Route path='/music' element={ <div> music </div>}/>
        <Route path="*" element={ <Navigate to="/music" />} />       */}

      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
