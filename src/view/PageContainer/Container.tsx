import Topbar from './Topbar/Topbar';
import Contents from './Contents/Contents';
import Footer from './Footer/Footer';
import Modal from './Modal/Modal';


export default function Container(){

    return(
        <div className="w3-light-grey" id="container">

            <Topbar />

            <Contents />
     
            <Footer />

            <Modal />
           
        </div>
    );
}

