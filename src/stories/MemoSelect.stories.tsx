import React, {ChangeEvent, useMemo, useState} from 'react';
import {Select} from '../components/Select/Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'MemoSelectWithFilteredDrinks',
}
export type DrinkType = {
    value: string
    title: string
    isCarbonatedWithSugar: boolean
    isMineralWater: boolean
    isTea: boolean
}

const NewMessagesCounter = (props: { count: number }) => {
    console.log("NewMessagesCounter rendering")

    return <div>{props.count}</div>
}
const NewMessagesCounterWithReactMemo = React.memo(NewMessagesCounter)
const SelectWithReactMemo = React.memo(Select)

const initialState: DrinkType[] = [
    {value: "1", title: "Fanta", isCarbonatedWithSugar: true, isMineralWater: false, isTea: false},
    {value: "2", title: "Coca Cola", isCarbonatedWithSugar: true, isMineralWater: false, isTea: false},
    {value: "3", title: "Borjomi", isCarbonatedWithSugar: false, isMineralWater: true, isTea: false},
    {value: "4", title: "Pepsi", isCarbonatedWithSugar: true, isMineralWater: false, isTea: false},
    {value: "5", title: "Darida", isCarbonatedWithSugar: false, isMineralWater: true, isTea: false},
    {value: "6", title: "Lipton", isCarbonatedWithSugar: false, isMineralWater: false, isTea: true},
    {value: "7", title: "Minskaya 4", isCarbonatedWithSugar: false, isMineralWater: true, isTea: false},
    {value: "8", title: "Greenfield", isCarbonatedWithSugar: false, isMineralWater: false, isTea: true},
    {value: "9", title: "Tess", isCarbonatedWithSugar: false, isMineralWater: false, isTea: true},
]

export const FilteredByCarbonatedWithSugar = () => {
    console.log("HelpsToReactMemoSelect rendering")
    const [drinks, setDrinks] = useState<DrinkType[]>(initialState)
    const [carbonatedWithSugarValue, setCarbonatedWithSugarValue] = useState("0")
    const [count, setCount] = useState(0)

    const filteredDrinksByCarbonatedWithSugar = useMemo(() => {
        return drinks.filter(drink => drink.isCarbonatedWithSugar)
    }, [drinks])
    // const drinks = useMemo(() => getDrinksArray(), [])

    const onClickCountHandler = () => {
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={onClickCountHandler}>+</button>

            <NewMessagesCounterWithReactMemo count={count}/>
            <SelectWithReactMemo value={carbonatedWithSugarValue}
                                 onChangeItem={setCarbonatedWithSugarValue}
                                 items={filteredDrinksByCarbonatedWithSugar}/>
        </>
    )
}

export const FilteredDrinksByTea = () => {
    console.log("HelpsToReactMemoSelect rendering")
    const [drinks, setDrinks] = useState<DrinkType[]>(initialState)
    const [teaValue, setTeaValue] = useState("0")
    const [count, setCount] = useState(0)

    const onClickCountHandler = () => {
        setCount(count + 1)
    }
    const filteredDrinksByTea = useMemo(() => {
        return drinks.filter(drink => drink.isTea)
    }, [drinks])

    return (
        <>
            <button onClick={onClickCountHandler}>+</button>
            <NewMessagesCounterWithReactMemo count={count}/>
            <SelectWithReactMemo value={teaValue}
                                 onChangeItem={setTeaValue}
                                 items={filteredDrinksByTea}/>
        </>
    )
}
export const FilteredDrinksByMineralWater = () => {
    console.log("HelpsToReactMemoSelect rendering")
    const [drinks, setDrinks] = useState<DrinkType[]>(initialState)
    const [mineralWaterValue, setMineralWaterValue] = useState("0")
    const [count, setCount] = useState(0)

    const onClickCountHandler = () => {
        setCount(count + 1)
    }
    const filteredDrinksByMineralWater = useMemo(() => {
        return drinks.filter(drink => drink.isMineralWater)
    }, [drinks])

    return (
        <>
            <button onClick={onClickCountHandler}>+</button>

            <NewMessagesCounterWithReactMemo count={count}/>
            <SelectWithReactMemo value={mineralWaterValue}
                                 onChangeItem={setMineralWaterValue}
                                 items={filteredDrinksByMineralWater}/>
        </>
    )
}
