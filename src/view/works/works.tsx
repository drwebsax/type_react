

import { Route, Routes, Navigate } from 'react-router-dom';


const Works = () =>{

    return (
        <Routes>
            
            <Route path="/" element={ <Navigate to="/paper" />}  />
            <Route path="test" element={<div> test1</div>} />
            <Route path="*" element={ <Navigate to="/main" />} />
          
        </Routes>
    )
    
}
export default Works