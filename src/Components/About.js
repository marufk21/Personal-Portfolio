import React from 'react'
import Typewriter from "typewriter-effect";


const About = () => {
  return (

    <>
    <div className="App">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("GeeksForGeeks")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Welcomes You")
       .start();
       }}
       />
    </div>
    </>
    
  )
}

export default About