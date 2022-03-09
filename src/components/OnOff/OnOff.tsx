import React from "react";

type PropsType = {
    isOn: boolean
}
type SquarePropsType = {
    color: string
    title: string
}
type IndicatorPropsType = {
    color: string
}

function OnOff(props: PropsType) {
    return (
        <div style={{"display": "flex"}}>
            <Square color={(props.isOn && "green") || "black"} title={"ON"}/>
            <Square color={(!props.isOn && "red") || "black"} title={"OFF"}/>

            <Indicator color={(props.isOn && "green") || "red"}/>
        </div>
    )
}


function Square(props: SquarePropsType) {
    return (
        <div style={{
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "width": "50px",
            "height": "50px",
            "border": "3px solid black",
            "fontSize": "1.3rem",
            "fontWeight": "bolder",
            "color": `${props.color}`
        }}>{props.title}</div>
    )
}

function Indicator(props: IndicatorPropsType) {
    return (
        <div style={{
            "width": "50px",
            "height": "50px",
            "border": "3px solid black",
            "borderRadius": "50%",
            "background": `${props.color}`
        }}>.</div>
    )
}

export default OnOff