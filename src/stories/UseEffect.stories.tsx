import React, {useEffect, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
    setTimeout(() => {
      console.log("setTimeout")
      document.title = String(counter)
    }, 1000)
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

    setInterval(() => {
      console.log(`tick ${counter}`)
      setCounter( state => state + 1)
    }, 1000)

  }, [])

  return <div>
      {counter} counter
  </div>
}


