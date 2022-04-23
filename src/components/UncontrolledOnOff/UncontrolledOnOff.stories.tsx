import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {UncontrolledOnOff} from "./UncontrolledOnOff"
//import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Uncontrolled Components/UncontrolledOnOff',
  component: UncontrolledOnOff,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },

} as ComponentMeta<typeof UncontrolledOnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args} />;
//const callback = action("On or Off want to change")

export const OnMod = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnMod.args = {
  defaultValue: true
};

export const OffMod = Template.bind({});
OffMod.args = {
  defaultValue: false,
};






