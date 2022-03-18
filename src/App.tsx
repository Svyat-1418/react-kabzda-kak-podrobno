import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";

type PageTitlePropsType = {
    title: string
}
export type RatingValueType = 0|1|2|3|4|5

function App() {
    console.log("App rendering")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className="App">
            {/*<PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>

            Article 1
            <Rating value={3}/>*/}

            <UncontrolledAccordion titleValue={"Menu 1"} />
            <UncontrolledAccordion titleValue={"Menu 2"} />

            <Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
            <UncontrolledRating />

            <OnOff />
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
