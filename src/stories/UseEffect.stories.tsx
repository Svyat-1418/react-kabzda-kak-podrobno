import React, {useEffect, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'useEffect Story',
};

export const SimpleExample1 = () => {
    console.log("SimpleExample1")

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log("useEffect every render")
        document.title = String(counter)
    })
    useEffect(() => {
        console.log("useEffect only first render (analog componentDidMount)")
        document.title = String(counter)
    }, [])
    useEffect(() => {
        console.log("useEffect processing when dependency(ies) chan")
        document.title = String(counter)
    }, [counter])

    return <>
        <div>
            <button onClick={() => setFake(state => state + 1)}>
                +
            </button>

            {fake}
        </div>

        <div>
            <button onClick={() => setCounter(state => state + 1)}>
                +
            </button>

            {counter}
        </div>
    </>
}


export const SetTimeoutExample = () => {
    console.log("SetTimeoutExample")

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log("Timeout Expired!")

            document.title = String(counter)

            console.log("document title chaged 3 sec later")
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [counter])

    return <>
        <div>
            <button onClick={() => setCounter(state => state + 1)}>
                +
            </button>

            {counter} counter
        </div>
    </>
}

export const SetIntervalExample = () => {
    console.log("SetIntervalExample")

    const [counter, setCounter] = useState(1)

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log(`tick ${counter}`)
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <div>
        {counter} counter
    </div>
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log(`Component rendered with counter ${counter}`)

    useEffect(() => {
        console.log(`Effect occurred with counter ${counter}`)

        return () => {
            // Reset function processing when component will unmount
            // and before calling the Effect again

            // when calling the effect again counter has old value
            console.log(`RESET EFFECT with counter ${counter}`)
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <div>
        <button onClick={increase}>+</button>
        Counter: {counter}
    </div>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("")

    useEffect(() => {
        const handlePress = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.document.addEventListener("keypress", handlePress)

        return () => {
            window.document.removeEventListener("keypress", handlePress)
        }
    }, [text])

    return (
        <div>
            Typed text: {text}
        </div>
    )
}