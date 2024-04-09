
import React from 'react';
import one from "./images/dog1.jpg"
import two from "./images/dog2.jpg"
import three from "./images/dog3.jpg"
import four from "./images/dog4.jpg"
import five from "./images/dog5.jpg"
import six from "./images/dog6.jpg"
import seven from "./images/dog7.jpg"
import eight from "./images/dog8.jpg"


function App() {
  
   return(
    <div style={{display:'flex',flexWrap:'wrap',padding:"30px",backgroundColor:"lightgrey",gap:"30px",justifyContent:"space-evenly"}}>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={one} style={{width:"100%",height:"75%"}} ></img>
    <h2>julie's Rabbit ears</h2>
  </div>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={two} style={{width:"100%",height:"75%"}} ></img>
    <h2>The innocent Look</h2>
  </div>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={three} style={{width:"100%",height:"75%"}} ></img>
    <h2>Big Eyed Buddy</h2>
  </div>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={four} style={{width:"100%",height:"75%"}} ></img>
    <h2>The saint Doggo</h2>
  </div>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={five} style={{width:"100%",height:"75%"}} ></img>
    <h2>Big Eyed Buggy</h2>
  </div>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={six} style={{width:"100%",height:"75%"}} ></img>
    <h2>The innocent Look</h2>
  </div>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={seven} style={{width:"100%",height:"75%"}}></img>
    <h2>The saint Doggo</h2>
  </div>
    <div style={{backgroundColor:"white",padding:"5px",textAlign:"center",flexBasis:"22%"}}>
    <img src={eight} style={{width:"100%",height:"75%"}} ></img>
    <h2>Julies Rabbit Ears</h2>
  </div>
    
  </div>

   )
  }
export default App