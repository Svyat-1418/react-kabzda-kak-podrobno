import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {UncontrolledAccordion} from "./UncontrolledAccordion"
//import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Uncontrolled Components/UncontrolledAccordion',
  component: UncontrolledAccordion,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },

} as ComponentMeta<typeof UncontrolledAccordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />;
//const callback = action("Accordion want to collapse or uncollapse")

export const CollapsedUncontrolledAccordion = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CollapsedUncontrolledAccordion.args = {
  titleValue: "CollapsedUncontrolledAccordion",
};

export const UncollapsedUncontrolledAccordion = Template.bind({});
UncollapsedUncontrolledAccordion.args = {
  titleValue: "UncollapsedUncontrolledAccordion",
};







