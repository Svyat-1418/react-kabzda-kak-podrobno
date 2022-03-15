import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}
type UncontrolledAccordionTitlePropsType = {
    title: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendering")
    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div>
            <UncontrolledAccordionTitle title={props.titleValue}/>
            {!collapsed && <UncontrolledAccordionBody/>}
            <button onClick={() => setCollapsed(!collapsed)}>Toggle</button>
        </div>
    )
}


function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    console.log("UncontrolledAccordionTitle rendering")
    return (
        <h3>{props.title}</h3>
    )
}

function UncontrolledAccordionBody() {
    console.log("UncontrolledAccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion