import React from "react";
import PropTypes from "prop-types"


const Counter = (props) => {
    const { one, two, three, four } = props
    return (
        <div style={{margin:"100px", border:"2px solid black", borderRadius:" 50px"}} className="container">
            <div className="row justify-content-center">
                <div className="col-2"><h1 style={{fontSize: "5rem"}} ><i class="far fa-clock"></i></h1></div>
                <div style={{fontSize: "4rem", textAlign:"center",fontFamily:"monospace", border:"1px solid black", backgroundColor:"ButtonFace"}} className="col-2">{four}</div>
                <div style={{fontSize: "4rem",textAlign:"center",fontFamily:"monospace", border:"1px solid black", backgroundColor:"ButtonFace"}} className="col-2">{three}</div>
                <div style={{fontSize: "4rem",textAlign:"center",fontFamily:"monospace", border:"1px solid black", backgroundColor:"ButtonFace"}} className="col-2">{two}</div>
                <div style={{fontSize: "4rem",textAlign:"center",fontFamily:"monospace", border:"1px solid black", backgroundColor:"ButtonFace"}} className="col-2">{one}</div>
            </div>
        </div>
    );
}
Counter.propTypes = {
    one: PropTypes.number,
    two: PropTypes.number,
    three: PropTypes.number,
    four: PropTypes.number,
}
export default Counter 