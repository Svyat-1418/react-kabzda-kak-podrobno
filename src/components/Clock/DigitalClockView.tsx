import React from "react";
import {PropsClockViewType} from "./Clock";

export const DigitalClockView = ({date}: PropsClockViewType) => {
    const getTwoDigitsString = (num: number) => num < 10 ? `0${num}` : num

    return (
        <div>
            <span>{getTwoDigitsString(date.getHours())}:</span>
            <span>{getTwoDigitsString(date.getMinutes())}:</span>
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    )
}