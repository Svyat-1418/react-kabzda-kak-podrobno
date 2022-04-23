import React from "react";
import {RatingValueType} from "../../App";

type RatingPropsType = {
    ratingValue: RatingValueType
    setRatingValue: (ratingValue: RatingValueType) => void
}
type StarPropsType = {
    selected: boolean
    ratingValue: RatingValueType
    setRatingValue: (ratingValue: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering")

    return (
        <div>
            <Star selected={props.ratingValue > 0} setRatingValue={props.setRatingValue} ratingValue={1}/>
            <Star selected={props.ratingValue > 1} setRatingValue={props.setRatingValue} ratingValue={2}/>
            <Star selected={props.ratingValue > 2} setRatingValue={props.setRatingValue} ratingValue={3}/>
            <Star selected={props.ratingValue > 3} setRatingValue={props.setRatingValue} ratingValue={4}/>
            <Star selected={props.ratingValue > 4} setRatingValue={props.setRatingValue} ratingValue={5}/>
        </div>
    )
}


function Star(props: StarPropsType) {
    console.log("Star rendering")

    const onClickHandler = () => {
        props.setRatingValue(props.ratingValue)
    }

    return <span onClick={onClickHandler}>
        {props.selected ? <b>Star </b> : "Star "}
    </span>
}