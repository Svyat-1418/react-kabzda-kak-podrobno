import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}
type AccordionTitlePropsType = {
    title: string
    accordionCollapsed: boolean
    setAccordionCollapsed: (newValue: boolean) => void
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendering")
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)


    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                setAccordionCollapsed={setAccordionCollapsed}
                accordionCollapsed={accordionCollapsed}
            />
            {!accordionCollapsed && <AccordionBody/>}
        </div>
    )
}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    const onClickHandler = () => {
        props.setAccordionCollapsed(!props.accordionCollapsed)
    }

    return (
        <h3 onClick={onClickHandler}>{props.title}</h3>
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

