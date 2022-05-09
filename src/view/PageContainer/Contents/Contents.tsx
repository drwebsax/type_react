
import { useEffect, useState } from 'react';
import React, {FC}  from "react";
import Header from './header/Header';
import Article from './article/Article';
import AboutCard from './sideMenu/AboutCard';
import Popular from './sideMenu/Poupular';
import Advertising from './sideMenu/Advertising';
import Tags from './sideMenu/Tags';
import Inspiration from './sideMenu/Inspiration';
import Follow from './sideMenu/Follow';
import Subscribe from './sideMenu/Subscribe';


interface propsContents{
    isDrsax : boolean;
    test:  React.MouseEventHandler<HTMLButtonElement>;
    // test(): void  ;
    // test : ()=> void  ;

}

 const Contents :FC< propsContents > = (props) =>{

    return (

        <div className="w3-content" style={{maxWidth: '1600px'}}>
            <i onClick={props.test}></i>

            <Header />

            <div className="w3-row w3-padding w3-border">
           

                <Article isDrsax ={props.isDrsax} />

            

                {/* About/Information menu */}
                <div className="w3-col l4">


                    {/* About Card */}
                    <AboutCard />
                    <hr />

                    {/* Posts */}
                  
                    <Popular />

                    <hr />

                    {/* Advertising */}
                    <Advertising />
                    <hr />

                    {/* Tags */}
                    <Tags />
                    <hr />

                    {/* Inspiration */}
                    <Inspiration />
                    <hr />

                    {/* Follow Me */}
                    <Follow />
                    <hr />

                    {/* Subscribe */}

                    <Subscribe />
              
                    {/* END About/Intro Menu */}


                </div>


                {/* END GRID */}
            </div>


            {/* END w3-content */}
        </div>

    )
}

export default Contents