import React, {ChangeEvent, useRef, useState} from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'input',
    //component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },

};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
//const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const UncontrolledInput = () => <input/>
export const ControlledInputWithFixedValue = () => <input value={"IT-INCUBATOR"}/>

export const TrackValueOfUncontrolledInput = () => {
    const [inputValue, setInputValue] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return <>
        <input onChange={onChangeHandler}/> - actualValue: {inputValue}
    </>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setInputValue(el.value)
    }

    return <>
        <input
            ref={inputRef}
            /*onChange={onChangeHandler}*/
        />
        <button onClick={onClickHandler}>Save</button> - actualValue: {inputValue}
    </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandler} />
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler} />
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandler} >
        <option>Choose city</option>
        <option>Minsk</option>
        <option>Russia</option>
        <option>Kiev</option>
        <option>London</option>
    </select>
}