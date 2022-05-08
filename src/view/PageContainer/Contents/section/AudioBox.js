
import { useRef } from 'react';


export default function AudioBox(){

    const nameInput = useRef();
    const oscInput = useRef();
    const freqInput = useRef();

    
    const DSX = new window.DSX;
    const DAC = window.DAC;
    let osc = new DSX.Osc({type:"sawtooth",freq: 7000});
    let gain = new DSX.Amp({ gain: 0.8});

    osc.connect(gain)
    gain.connect(DAC)

    // const turnOn =() => {  


      
    //     // const DSX = new window.DSX;
    //     // const DAC = window.DAC;
    //     // let osc = new DSX.Osc({type:"sawtooth",freq: 7000});
    //     // let gain = new DSX.Amp({ gain: 0.8});

    //     // osc.connect(gain)
    //     // gain.connect(DAC)
    //     let count = 0;

    //     return function() {

    //         count ++;
    //         console.log(nameInput.current.id)

    //         // var oscfrequency = new DSX.valueChange("knob1", osc.frequency);
    //         // var ampgain = new DSX.valueChange("knob2", gain.gain);
    //         // var sound_on_off = new DSX.valueChange("switch1");

            

    //         if ( count % 2 !== 0 ) {

    //             console.log('start');
    //             osc.start(); 
    //             nameInput.current.id=1;
    //             osc.frequency.value = oscInput.current.value;
    //             console.log(oscInput.current.value);
    
    //         } else{

    //             console.log('stop');
    //             osc.stop();
    //             nameInput.current.id=0;

    //             console.log(oscInput.current.value);
             

    //         }
    //     }
     
    // }

    // var onOff = turnOn();
    
    
    function freqVal(){

        osc.frequency.value = oscInput.current.value;
        freqInput.current.innerText = oscInput.current.value;
    }
   
    return (
        <>

            {/* <button id={val} onClick={onOff} ref = {nameInput}> on/off</button> */}
            <div>
                <input type="range" id="knob1" onChange={freqVal} ref = {oscInput} name="volume"
                        min="0" max="2200" />
                        <div ref = {freqInput}> </div>
                <label htmlFor="volume">Volume</label>
            </div>
           
            <button onClick={()=>osc.start()} > start</button>
            <button  onClick={()=>osc.stop()} > stop</button>
        </>
     

    )
}


