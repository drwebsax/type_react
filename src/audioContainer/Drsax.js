

class DrSAX {


    constructor() {
   
        
 
    
    }

    init = () => {

        const DSX = new window.DSX;
        const DAC = window.DAC;
        let osc = new DSX.Osc({type:"sawtooth",freq: 7000});
        let gain = new DSX.Amp({ gain: 0.8});

        osc.connect(gain)
        gain.connect(DAC)

        return { DSX, DAC, osc, gain}

    }
   
    oscCheck = (e) => {

        const DSX = this.init().DSX;
        const DAC = this.init().DAC;
        const osc = this.init().osc;

   
    

        if (e.target.id === "0"){
            console.log(e.target.id)
            osc.start();
        }else{

            console.log(e.target.id)
            osc.stop();
        }
        // setTimeout(()=>{
        //     osc.stop();
        // },1000)
        
    }

    oscStop = () => {

        const DSX = this.init().DSX;
        const DAC = this.init().DAC;
        const osc = this.init().osc;
        const gain = this.init().gain;


        gain.disconnect(DAC);
        osc.stop();


     
           
    }
   
  }

  const Drsax =new DrSAX();

export default Drsax
// const Osc =()=>{

//     const DSX = new window.DSX;
//     const DAC = window.DAC;


//     let osc = new DSX.Osc({type:"sawtooth",freq: 7000});
//     let gain = new DSX.Amp({ gain: 0.8});
    
  
//     osc.connect(gain)
//     gain.connect(DAC)
  
//     osc.start();
   

// }

// export default Osc

