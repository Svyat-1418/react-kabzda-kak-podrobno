import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff}from "./components/UncontrolledOnOff/UncontrolledOnOff";

type PageTitlePropsType = {
    title: string
}
export type RatingValueType = 0|1|2|3|4|5

function App() {
    console.log("App rendering")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    const items = [
        {title: "Svyat", value: "1"},
        {title: "Igor", value: "2"},
        {title: "Viktor", value: "3"},
        {title: "Sveta", value: "4"}]

    return (
        <div className="App">
            {/*<PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>

            Article 1
            <Rating value={3}/>*/}

            {/*<UncontrolledAccordion titleValue={"Menu 1"} />
            <UncontrolledAccordion titleValue={"Menu 2"} />*/}

            <Accordion titleValue={"Menu 1"}
                       accordionCollapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed}
                       items={items}
                       onClick={(value) => alert(`User with ID ${value} should be HAPPY!!! `)}
            />
            <Accordion titleValue={"Menu 2"}
                       accordionCollapsed={accordionCollapsed}
                       setAccordionCollapsed={() => setAccordionCollapsed}
                       items={items}
                       onClick={(value) => alert(`User with ID ${value} should be HAPPY!!! `)}
            />

            <Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
            <UncontrolledRating defaultValue={1} getLocalStateValue={(ratingValue: RatingValueType) => {}} />

            <OnOff switchOn={switchOn} setSwitchOn={setSwitchOn}/>
            <UncontrolledOnOff defaultValue={true}/>
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
