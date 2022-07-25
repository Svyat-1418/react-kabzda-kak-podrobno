import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'useState Story',
};

function generateData() {
  console.log("Generate Data")
  // difficult counting
  return 1
}

export const Example1 = () => {
  console.log("Example1")

  // const initValue = generateData()

  const [counter, setCounter] = useState(generateData)

  return <>
    <button onClick={() => setCounter(state => state + 1)}>+</button>

    {counter}
  </>
}





