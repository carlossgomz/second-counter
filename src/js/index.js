//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";
import Counter from "./component/contador.jsx";

//import your own components


let count = 0
 setInterval(() => {
    let one = Math.floor((count/1)%10)
    let two = Math.floor((count/10)%10)
    let three = Math.floor((count/100)%10)
    let four = Math.floor((count/1000)%10)

    count ++
    ReactDOM.render(<Counter one ={one} two ={two} three = {three} four={four} />, document.querySelector("#app"));
}, 100);
