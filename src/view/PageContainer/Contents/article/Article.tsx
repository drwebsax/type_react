import React, {FC}  from "react";
import FirstOsc from "../section/firstOsc"

interface propsArticle {
    isDrsax : boolean;
   

}


// const Article :FC< propsArticle > = (props) => {
const Article = (props : propsArticle ) => {



    return (

      
        <div className="w3-col l8 s12">

            {/* Blog entry */}

            <FirstOsc  isDrsax = {props.isDrsax}/> 
            <FirstOsc  isDrsax = {props.isDrsax}/> 
            <FirstOsc  isDrsax = {props.isDrsax}/> 

             <hr />

        </div>

    )
}

export default Article