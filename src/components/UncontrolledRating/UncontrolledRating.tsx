import React, {useState} from "react";

type UncontrolledRatingPropsType = {
    defaultValue: RatingValueType
    getLocalStateValue: (ratingValue: RatingValueType) => void
}

type StarPropsType = {
    selected: boolean
    setRatingValue: () => void
}
type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    console.log("Rating rendering")
    const [ratingValue, setRatingValue] =
        useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={ratingValue > 0}
                  setRatingValue={() => {setRatingValue(1); props.getLocalStateValue(1) }} />
            <Star selected={ratingValue > 1}
                  setRatingValue={() => {setRatingValue(2); props.getLocalStateValue(2) }} />
            <Star selected={ratingValue > 2}
                  setRatingValue={() => {setRatingValue(3); props.getLocalStateValue(3) }} />
            <Star selected={ratingValue > 3}
                  setRatingValue={() => {setRatingValue(4); props.getLocalStateValue(4) }} />
            <Star selected={ratingValue > 4}
                  setRatingValue={() => {setRatingValue(5); props.getLocalStateValue(5) }} />
        </div>
    )
}


function Star(props: StarPropsType) {
    console.log("Star rendering")

    return <span onClick={props.setRatingValue}>
        {props.selected ? <b>Star </b> : "Star "}
    </span>
}
