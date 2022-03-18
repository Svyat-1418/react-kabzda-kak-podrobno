import React, {useState} from "react";


function UncontrolledOnOff() {
    console.log("UncontrolledOnOff rendering")
    const [on, setOn] = useState<boolean>(false)
    console.log("on: " + on)

    const styleOn = {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "width": "50px",
        "height": "50px",
        "border": "3px solid black",
        "fontSize": "1.3rem",
        "fontWeight": "bolder",
        backgroundColor: `${on ? "green" : "white"}`,
    }
    const styleOff = {
        marginLeft: "3px",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "width": "50px",
        "height": "50px",
        "border": "3px solid black",
        "fontSize": "1.3rem",
        "fontWeight": "bolder",
        backgroundColor: `${!on ? "red" : "white"}`,
    }
    const styleCircle = {
        marginLeft: "5px",
        "width": "50px",
        "height": "50px",
        "border": "3px solid black",
        "borderRadius": "50%",
        "background": `${on ? "green" : "red"}`
    }

    return (
        <div style={{"display": "flex"}}>
            <div style={styleOn} onClick={() => setOn(true)}>On</div>
            <div style={styleOff} onClick={() => setOn(false)}>Off</div>

            <div style={styleCircle}>.</div>
        </div>
    )
}


export default UncontrolledOnOff