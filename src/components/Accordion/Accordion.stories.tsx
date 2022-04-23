import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Accordion} from "./Accordion"
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Controlled Components/Accordion',
  component: Accordion,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },

} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;
const callback = action("Accordion want to collapse or uncollapse")

export const CollapsedAccordion = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CollapsedAccordion.args = {
  titleValue: "CollapsedAccordion",
  accordionCollapsed: true,
  setAccordionCollapsed: callback
};

export const UncollapsedAccordion = Template.bind({});
UncollapsedAccordion.args = {
  titleValue: "UncollapsedAccordion",
  accordionCollapsed: false,
  setAccordionCollapsed: callback
};

export const AccordionChanging = () => {
  const [collapsed, setCollapsed] = useState(false)
  const onClickHandler = () => {
    setCollapsed(!collapsed)
  }

  return <Accordion
      titleValue={'UncollapsedAccordionByClick'}
      accordionCollapsed={collapsed}
    setAccordionCollapsed={onClickHandler}
  />
}





