import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {OnOff} from "./OnOff"
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Controlled Components/OnOff',
  component: OnOff,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },

} as ComponentMeta<typeof OnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;
const callback = action("On or Off want to change")

export const OnMod = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnMod.args = {
  switchOn: true,
  setSwitchOn: callback
};

export const OffMod = Template.bind({});
OffMod.args = {
  switchOn: false,
  setSwitchOn: callback
};

export const OnOffChanging = () => {
  const [switchOn, setSwitchOn] = useState(false)

  return <OnOff
      switchOn={switchOn}
      setSwitchOn={setSwitchOn}
  />
}





