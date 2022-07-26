import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

export type PropsClockViewType = {
    date: Date
}

export const Clock = ({mode}: {mode?: "analog" | "digital"}) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    let view;
    switch (mode) {
        case "analog":
            view = <AnalogClockView date={date} />
            break;
        case "digital":
            view = <DigitalClockView date={date} />
            break;
        default:
            view = <DigitalClockView date={date} />
    }

    return (
        <>
            {view}
        </>
    )
}

