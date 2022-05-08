
import { useRef } from 'react';


export default function AudioBox(){


    const oscInput = useRef();
    const freqInput = useRef();

    
    const DSX = new window.DSX;
    const DAC = window.DAC;
    let osc = new DSX.Osc({type:"sawtooth",freq: 7000});
    let gain = new DSX.Amp({ gain: 0.8});

    osc.connect(gain)
    gain.connect(DAC)

  
    function freqVal(){

        osc.frequency.value = oscInput.current.value;
        freqInput.current.innerText = oscInput.current.value;
    }
   
    return (
        <>
        
            <div>
                <input type="range" id="knob1" onChange={freqVal} ref = {oscInput} name="volume"
                        min="0" max="2200" />
                        <div ref = {freqInput}> </div>
                <label htmlFor="volume">Volume</label>
            </div>
           
            <button onClick={ () => osc.start() } > start </button>
            <button  onClick={ () => osc.stop() } > stop </button>
        </>
     

    )
}


