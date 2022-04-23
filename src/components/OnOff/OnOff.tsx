import React from "react";

export function OnOff(props:{switchOn: boolean, setSwitchOn: (switchOn: boolean) => void}) {
    console.log("OnOff rendering")

    const styleOn = {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "width": "50px",
        "height": "50px",
        "border": "3px solid black",
        "fontSize": "1.3rem",
        "fontWeight": "bolder",
        backgroundColor: `${props.switchOn ? "green" : "white"}`,
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
        backgroundColor: `${!props.switchOn ? "red" : "white"}`,
    }
    const styleCircle = {
        marginLeft: "5px",
        "width": "50px",
        "height": "50px",
        "border": "3px solid black",
        "borderRadius": "50%",
        "background": `${props.switchOn ? "green" : "red"}`
    }

    return (
        <div style={{"display": "flex"}}>
            <div style={styleOn} onClick={() => props.setSwitchOn(true)}>On</div>
            <div style={styleOff} onClick={() => props.setSwitchOn(false)}>Off</div>

            <div style={styleCircle}>.</div>
        </div>
    )
}