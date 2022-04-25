export const reducer = (state: InitialStateType, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case "TOGGLE_ACCORDION_COLLAPSED":
            return { ...state, accordionCollapsed: !action.accordionCollapsed }
        default:
            throw "action type is not correct"
    }

}

// actions
export const toggleAccordionCollapsed = (accordionCollapsed: boolean) =>
    ({ type: "TOGGLE_ACCORDION_COLLAPSED", accordionCollapsed} as const)

// types
export type InitialStateType = { accordionCollapsed: boolean }
export type ToggleAccordionCollapsedType = ReturnType<typeof toggleAccordionCollapsed>
type ActionsType = ToggleAccordionCollapsedType