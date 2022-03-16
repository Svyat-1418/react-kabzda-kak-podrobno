import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}
type UncontrolledAccordionTitlePropsType = {
    title: string
    collapsed: boolean
    changeCollapsed: (newValue: boolean) => void
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("UncontrolledAccordion rendering")
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const changeCollapsed = (newValue: boolean) => {
        setCollapsed(newValue)
    }
    
    return (
        <div>
            <UncontrolledAccordionTitle
                title={props.titleValue}
                changeCollapsed={changeCollapsed}
                collapsed={collapsed}
            />
            {!collapsed && <UncontrolledAccordionBody/>}
            {/*<button onClick={() => setCollapsed(!collapsed)}>Toggle</button>*/}
        </div>
    )
}


function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    console.log("UncontrolledAccordionTitle rendering")
    const onClickHandler = () => {
        props.changeCollapsed(!props.collapsed)
    }
    
    return (
        <h3 onClick={onClickHandler}>{props.title}</h3>
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