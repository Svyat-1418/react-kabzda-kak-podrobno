import React from "react";
import styles from "./AnalogClockView.module.css"
import {PropsClockViewType} from "./Clock";

export const AnalogClockView = ({date}: PropsClockViewType) => {
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    return (
        <div className={styles.frame}>
            <div className={`${styles.stick} ${styles.minute}`}
                 style={minutesStyle}>
            </div>
            <div className={`${styles.stick} ${styles.hour}`}
                 style={hoursStyle}>
            </div>
            <div className={`${styles.stick} ${styles.second}`}
                 style={secondsStyle}>

            </div>
            <div className="line-wrapper">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(line =>
                    <div className={styles.line}></div>
                )}
            </div>
        </div>
    )
}