import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Rating} from "./Rating"
import {action} from "@storybook/addon-actions";
import {RatingValueType} from "../../App";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Controlled Components/Rating',
  component: Rating,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },

} as ComponentMeta<typeof Rating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;
const callback = action("Rating want to change")

export const RatingOne = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RatingOne.args = {
  ratingValue: 1,
  setRatingValue: callback
};
export const RatingTwo = Template.bind({});
RatingTwo.args = {
  ratingValue: 2,
  setRatingValue: callback
};
export const RatingThree = Template.bind({});
RatingThree.args = {
  ratingValue: 3,
  setRatingValue: callback
};
export const RatingFour = Template.bind({});
RatingFour.args = {
  ratingValue: 4,
  setRatingValue: callback
};
export const RatingFive = Template.bind({});
RatingFive.args = {
  ratingValue: 5,
  setRatingValue: callback
};


export const RatingChanging = () => {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

  return <Rating
      ratingValue={ratingValue}
      setRatingValue={setRatingValue}
  />
}





