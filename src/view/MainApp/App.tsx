import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={ <Navigate to="/test" />} />
        <Route path="/test" element={<div> test</div>} />
        <Route path='/hi' element={ <div> hi </div>} />
        <Route path='/good' element={ <div> good </div>}/>
        <Route path="*" element={ <Navigate to="/test" />} />      
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
