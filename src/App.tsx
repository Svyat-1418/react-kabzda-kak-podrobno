import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

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

            <Accordion titleValue={"Menu 1"} collapsed={true}/>
            <Accordion titleValue={"Menu 2"} collapsed={false}/>

            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <hr/>
            <OnOff isOn={false}/>
            <OnOff isOn={true}/>
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
