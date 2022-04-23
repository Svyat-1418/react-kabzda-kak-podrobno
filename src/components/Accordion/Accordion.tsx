import React from "react";

type AccordionPropsType = {
    titleValue: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (accordionCollapsed: boolean) => void
}
type AccordionTitlePropsType = {
    title: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (accordionCollapsed: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue} accordionCollapsed={props.accordionCollapsed} setAccordionCollapsed={props.setAccordionCollapsed} />
            {!props.accordionCollapsed && <AccordionBody/>}
        </div>
    )
}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={() => props.setAccordionCollapsed(!props.accordionCollapsed)}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

