import Topbar from './Topbar/Topbar';
import Contents from './Contents/Contents';
import Footer from './Footer/Footer';
import Modal from './Modal/Modal';
import { useEffect, useState } from 'react';


export default function Container(){
   
    const [ drsaxInit, drsaxSet] = useState(false);
    const test =():void=>{
        alert('d');
    }

    useEffect(()=>{
       
       
        const fetchJsFromCDN = (src:string)=>  {


            return new Promise((resolve, reject) => {

        
              if (document.getElementById("drsax")) return;

              const script = document.createElement('script')
              script.setAttribute('src', src)
              script.setAttribute('id', "drsax")

              script.addEventListener('load', ()=> {
         
                resolve("success");
             
              })
              
              script.addEventListener('error', reject)
              document.body.appendChild(script)
            })
        }
        
        fetchJsFromCDN(' https://drsax.github.io/drsaxCore/js/drsax.js').then(()=> {
    
            drsaxSet(true);
        })
          
    },[])

    return(
        <div className="w3-light-grey" id="container">

            <Topbar />

            <Contents isDrsax  ={drsaxInit} test ={test}/>
     
            <Footer />

            <Modal />
           
        </div>
    );
}

