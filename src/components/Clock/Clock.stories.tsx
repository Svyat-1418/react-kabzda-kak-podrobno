import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Clock} from "./Clock";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Clock Story',
    component: Clock
} as ComponentMeta<typeof Clock>;

export const ClockBaseExample = () => {
    return (
        <>
            <Clock/>
        </>
    )
}