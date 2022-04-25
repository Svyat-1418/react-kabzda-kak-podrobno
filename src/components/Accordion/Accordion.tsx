import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (accordionCollapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}
type AccordionTitlePropsType = {
    title: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (accordionCollapsed: boolean) => void
}
type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue} accordionCollapsed={props.accordionCollapsed} setAccordionCollapsed={props.setAccordionCollapsed} />
            {!props.accordionCollapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={() => props.setAccordionCollapsed(!props.accordionCollapsed)}>{props.title}</h3>
    )
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map((item, index) =>
                <li
                    key={index}
                    onClick={() => { props.onClick(item.value) }}
                >
                    {item.title}
                </li>)}
        </ul>
    )
}

