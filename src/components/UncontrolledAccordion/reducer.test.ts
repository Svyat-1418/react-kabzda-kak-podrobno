import {reducer, InitialStateType, toggleAccordionCollapsed} from "./reducer"

let startState: InitialStateType

beforeEach(() => {
    startState = { accordionCollapsed: false }
})

test(`value of property 'accordionCollapsed' should change to false`, () => {
    startState.accordionCollapsed = true

    const endState = reducer(startState, toggleAccordionCollapsed(startState.accordionCollapsed))

    expect(endState.accordionCollapsed).toBeFalsy()
    expect(endState.accordionCollapsed).not.toBeTruthy()
})
test("value of property 'accordionCollapsed' should change to true", () => {
    const endState = reducer(startState, toggleAccordionCollapsed(startState.accordionCollapsed))

    expect(endState.accordionCollapsed).toBeTruthy()
    expect(endState.accordionCollapsed).not.toBeFalsy()
})
test("reducer should throw error if action have fake type", () => {
    expect(() => {
        reducer(startState, {type: "FAKE_TYPE"})
    }).toThrowError()
})