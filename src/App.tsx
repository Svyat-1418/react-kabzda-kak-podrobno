import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";

type PageTitlePropsType = {
    title: string
}

function App() {
    console.log("App rendering")
    return (
        <div className="App">
            {/*<PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>

            Article 1
            <Rating value={3}/>*/}

            <UncontrolledAccordion titleValue={"Menu 1"} />
            <UncontrolledAccordion titleValue={"Menu 2"} />

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
