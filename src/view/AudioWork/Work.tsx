

import { Route, Routes, Navigate,} from 'react-router-dom';
import Container from '../PageContainer/Container';


const Works = () =>{

    return (

        <Routes>
            
            <Route path="/" element={<Container />} />
            <Route path="test" element={<div> test1</div>} />
            {/* <Route path="*" element={ <Navigate to="/view" />} /> */}
      
        </Routes>
    )

    
}
export default Works