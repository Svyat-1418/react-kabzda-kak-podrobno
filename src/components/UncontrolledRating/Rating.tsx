import React, {useState} from "react";

type StarIntoUncontrolledRatingPropsType = {
    selected: boolean
}

function UncontrolledRating() {
    console.log("Rating rendering")
    const [value, setValue] = useState<0|1|2|3|4|5>(0)

    return (
        <div>
            <StarIntoUncontrolledRating selected={value > 0}/>
            <button onClick={() => setValue(1)}>1</button>
            <StarIntoUncontrolledRating selected={value > 1}/>
            <button onClick={() => setValue(2)}>2</button>
            <StarIntoUncontrolledRating selected={value > 2}/>
            <button onClick={() => setValue(3)}>3</button>
            <StarIntoUncontrolledRating selected={value > 3}/>
            <button onClick={() => setValue(4)}>4</button>
            <StarIntoUncontrolledRating selected={value > 4}/>
            <button onClick={() => setValue(5)}>5</button>
        </div>
    )
}


function StarIntoUncontrolledRating(props: StarIntoUncontrolledRatingPropsType) {
    console.log("Star rendering")

    if (props.selected) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }
}

export default UncontrolledRating