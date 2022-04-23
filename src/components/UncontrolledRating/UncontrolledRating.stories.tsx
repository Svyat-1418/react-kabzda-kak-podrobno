import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {UncontrolledRating} from "./UncontrolledRating"
import {action} from "@storybook/addon-actions";
import {RatingValueType} from "../../App";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UnControlled Components/UncontrolledRating',
  component: UncontrolledRating,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },

} as ComponentMeta<typeof UncontrolledRating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args} />;
const callback = action("Rating want to change")

export const UncontrolledRatingWithDefaulValueOne = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UncontrolledRatingWithDefaulValueOne.args = {
  defaultValue: 1,
  getLocalStateValue: callback
};
export const UncontrolledRatingWithDefaulValueTwo = Template.bind({});
UncontrolledRatingWithDefaulValueTwo.args = {
  defaultValue: 2,
  getLocalStateValue: callback
};
export const UncontrolledRatingWithDefaulValueThree = Template.bind({});
UncontrolledRatingWithDefaulValueThree.args = {
  defaultValue: 3,
  getLocalStateValue: callback
};
export const UncontrolledRatingWithDefaulValueFour = Template.bind({});
UncontrolledRatingWithDefaulValueFour.args = {
  defaultValue: 4,
  getLocalStateValue: callback
};
export const UncontrolledRatingWithDefaulValueFive = Template.bind({});
UncontrolledRatingWithDefaulValueFive.args = {
  defaultValue: 5,
  getLocalStateValue: callback
};


