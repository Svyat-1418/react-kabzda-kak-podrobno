import React, {useState} from "react";

type StarIntoUncontrolledRatingPropsType = {
    selected: boolean
    changeStarValue: (newValue: StarValueType) => void
    newValue: StarValueType
}
type StarValueType = 0 | 1 | 2 | 3 | 4 | 5

function UncontrolledRating() {
    console.log("Rating rendering")
    const [value, setValue] = useState<StarValueType>(0)
    
    const changeStarValue = (newValue: StarValueType) => {
        setValue(newValue)
    }
    
    return (
        <div>
            <StarIntoUncontrolledRating selected={value > 0} changeStarValue={changeStarValue} newValue={1}/>
            {/*<button onClick={() => setValue(1)}>1</button>*/}
            <StarIntoUncontrolledRating selected={value > 1} changeStarValue={changeStarValue} newValue={2}/>
            {/*<button onClick={() => setValue(2)}>2</button>*/}
            <StarIntoUncontrolledRating selected={value > 2} changeStarValue={changeStarValue} newValue={3}/>
            {/*<button onClick={() => setValue(3)}>3</button>*/}
            <StarIntoUncontrolledRating selected={value > 3} changeStarValue={changeStarValue} newValue={4}/>
            {/*<button onClick={() => setValue(4)}>4</button>*/}
            <StarIntoUncontrolledRating selected={value > 4} changeStarValue={changeStarValue} newValue={5}/>
            {/*<button onClick={() => setValue(5)}>5</button>*/}
        </div>
    )
}


function StarIntoUncontrolledRating(props: StarIntoUncontrolledRatingPropsType) {
    console.log("Star rendering")
    const onClickHandler = () => {
        props.changeStarValue(props.newValue)
    }
    
    return props.selected
        ? <span onClick={onClickHandler}><b>Star </b></span>
        : <span onClick={onClickHandler}>Star </span>
}

export default UncontrolledRating