import { FC } from "react";

// interface headTexxt {
//     title: string;
// }

// const Header: FC<headTexxt> =(props)=>{

interface textList {
    title : string;
    seconTitle : string;
}

const textSize : textList = {
    title: 'DrHong Audio Box',
    seconTitle : 'Enjoy Audio blocks',

}
const Header =()=>{

 
    return (
        <>

            {/* Header */}

            <header className="w3-container w3-center w3-padding-48 w3-white">
                <h1 className="w3-xxxlarge"><b>{textSize.title}</b></h1>
                <h6> {textSize.seconTitle} <span className="w3-tag">DrHong's world</span></h6>
            </header>

            {/* Image header */}

            <header className="w3-display-container w3-wide" id="home">
                <img className="w3-image" src="https://via.placeholder.com/300x50/000000" alt="Fashion Blog" width={1600} height={1060} />
                <div className="w3-display-left w3-padding-large">
                    <h1 className="w3-text-white">DrHong's</h1>
                    <h1 className="w3-jumbo w3-text-white w3-hide-small"><b>Audio box</b></h1>
                    {/* <h6><button className="w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off" onClick="document.getElementById('subscribe').style.display='block'">SUBSCRIBE</button></h6> */}
                </div>
            </header>
            
        
        </>
      
    )
}

export default Header