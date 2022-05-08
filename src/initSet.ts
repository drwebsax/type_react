

const init  =  (() => {


    // let drsax = document.createElement('script');
    // drsax.setAttribute('src', 'https://drsax.github.io/drsaxCore/js/drsax.js');
    // document.head.childNodes[20].after(drsax);

    
    const linkList: string[] = [];

    linkList.push('https://www.w3schools.com/w3css/4/w3.css');
    linkList.push('https://fonts.googleapis.com/css?family=Oswald');
    linkList.push('https://fonts.googleapis.com/css?family=Open Sans');
    linkList.push('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');




    linkList.map((url) =>  {

        let linkSet = document.createElement('link');
        linkSet.setAttribute('rel', 'stylesheet');  
        linkSet.setAttribute('href', url);
        document.head.childNodes[12].after(linkSet);

        return false;
    })  
   

    let sheet = document.createElement('style');
    sheet.innerHTML = `
        h1,h2,h3,h4,h5,h6 {font-family: "Oswald"}
        body {font-family: "Open Sans"}
    `;
    document.head.childNodes[18].after(sheet);

    // setTimeout(()=>{
    //     let drsaxSet = document.createElement('script');
    //     drsaxSet.innerHTML = 'var DSX = new DSX';
    //     document.head.childNodes[25].after(drsaxSet);
    
    // },2000)
    


   




    
})()


export default init
  

// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald">
// <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open Sans">
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    