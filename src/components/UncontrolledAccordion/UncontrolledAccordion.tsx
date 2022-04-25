import React, {useReducer} from "react";
import {toggleAccordionCollapsed, reducer} from "./reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string
}
type AccordionTitlePropsType = {
    title: string
    onClickCallback: () => void
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendering")
    // const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [state, dispatch] = useReducer(reducer, { accordionCollapsed: false })

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onClickCallback={() => dispatch(toggleAccordionCollapsed(state.accordionCollapsed) )}

            />
            {!state.accordionCollapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    const onClickHandler = () => {
        props.onClickCallback()
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

