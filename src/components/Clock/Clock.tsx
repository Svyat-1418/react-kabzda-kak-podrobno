import React, {useEffect, useState} from "react";

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    const getTwoDigitsString = (num: number) => num < 10 ? `0${num}` : num

    return (
        <div>
            <span>{getTwoDigitsString(date.getHours())}:</span>
            <span>{getTwoDigitsString(date.getMinutes())}:</span>
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    )
}