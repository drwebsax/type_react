
import { useRef } from 'react';
import './audioStyle.css';



export default function AudioBox(){


    const oscInput = useRef();
    const freqInput = useRef();

    
    const DSX = new window.DSX;
    const DAC = window.DAC;
    const drsax = window.drsax;
    
    let osc = new DSX.Osc({type:"sawtooth",freq: 7000});
    let gain = new DSX.Amp({ gain: 0.8});

    osc.connect(gain)
    gain.connect(DAC)

  
    function freqVal(){

        osc.frequency.value = oscInput.current.value;
        freqInput.current.innerText = oscInput.current.value;
    }

    function switchType(e){

        const name = e.target.name;
        console.log(name);
        osc.type = name;
    
    }

    function selectPreset(e){

        const name = e.target.name;
        switch (name) {
            case "bike":
                osc.start();
                gain.gain=0.2;
                osc.frequency.value=10;
       
                osc.frequency.exponentialRampToValueAtTime(10, drsax.currentTime + 1 , 1);
                osc.frequency.exponentialRampToValueAtTime(200, drsax.currentTime + 2 , 1);
                osc.frequency.exponentialRampToValueAtTime(10, drsax.currentTime + 3 , 1);
                osc.frequency.exponentialRampToValueAtTime(20, drsax.currentTime + 4 , 1);
                osc.frequency.exponentialRampToValueAtTime(300, drsax.currentTime + 5 , 2);
                osc.frequency.exponentialRampToValueAtTime(5, drsax.currentTime +7 , 2);
                osc.frequency.exponentialRampToValueAtTime(14000, drsax.currentTime + 9 ,4);
                osc.frequency.exponentialRampToValueAtTime(5, drsax.currentTime +13 , 2);
                osc.frequency.linearRampToValueAtTime(0, drsax.currentTime + 15 , 1);
                

                break;
            case "siren":

                osc.start();
                gain.gain=0.2;
                osc.frequency.value=523;
       
                let time= 0;
                let myVar = setInterval(function(){

                     time++
                     osc.frequency.setValueAtTime(699, drsax.currentTime +time , 0.5);
                     osc.frequency.setValueAtTime(523 , drsax.currentTime +time +0.5 ,0.5);

                     if ( time === 5 ) {
                        clearInterval(myVar);
                        osc.frequency.exponentialRampToValueAtTime(523, drsax.currentTime+time+ 0.5, 1);
                        osc.frequency.exponentialRampToValueAtTime(0.1, drsax.currentTime+time+ 1.5, 1);
                     }
                 }, 500);
                
               
                break;
            case "space":

                osc.start();
                gain.gain=0.2;
                osc.frequency.value=10;
                gain.gain.exponentialRampToValueAtTime(0.3, drsax.currentTime + 1 , 2);
                gain.gain.exponentialRampToValueAtTime(0.9, drsax.currentTime + 3 , 2);
                gain.gain.exponentialRampToValueAtTime(0.4, drsax.currentTime + 5 , 1);
                gain.gain.linearRampToValueAtTime(0, drsax.currentTime + 6 , 1);

                osc.frequency.exponentialRampToValueAtTime(1000, drsax.currentTime + 0.1 , 1);
                osc.frequency.exponentialRampToValueAtTime(20000, drsax.currentTime + 2 , 1);
                osc.frequency.exponentialRampToValueAtTime(1000, drsax.currentTime + 3 , 1);
                osc.frequency.exponentialRampToValueAtTime(2000, drsax.currentTime + 4 , 1);
                osc.frequency.exponentialRampToValueAtTime(20000, drsax.currentTime + 5 , 1);
                osc.frequency.linearRampToValueAtTime(0, drsax.currentTime + 6 , 1);

                break;
           
            default:

         }
    

    }

    // <option value="sine">sine</option>
    // <option value="sawtooth">sawtooth</option>
    // <option value="square">square</option>
    // <option value="triangle">triangle</option>
    
   
    return (
        <div className='AudioBox w3-container'>
        
            <div>
                <input type="range" id="knob1" onChange={freqVal} ref = {oscInput} name="osc_volume"
                        min="0" max="2200" />
                        
                <label htmlFor="volume" ref = {freqInput}><b>100</b></label>
            </div>
            
            <button className="w3-button w3-black w3-medium" onClick={ () => osc.start() } > start </button>
            <button className="w3-button w3-black w3-medium" onClick={ () => osc.stop() } > stop </button>
           
            <div>
                
                <h3> Select Ttype </h3>
                <button className="w3-button w3-aqua w3-small" name="sine" onClick={switchType} > sine </button>
                <button className="w3-button w3-teal w3-small" name="sawtooth" onClick={switchType} > sawtooth </button>
                <button className="w3-button w3-purple w3-small" name="square" onClick={switchType} > square </button>
                <button className="w3-button w3-khaki w3-small" name="triangle" onClick={switchType} > triangle </button>
                 
            </div>

            <div>
                
                <h3> Select Preset </h3>
                <button className="w3-button w3-blue w3-small" name="bike" onClick={selectPreset} > bike </button>
                <button className="w3-button w3-indigo w3-small" name="siren" onClick={selectPreset} > siren </button>
                <button className="w3-button w3-red w3-small" name="space" onClick={selectPreset} > space </button>
                 
            </div>
            


            


        </div>
     

    )
}


