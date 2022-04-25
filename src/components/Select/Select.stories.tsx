import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Select} from "./Select"
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
const callback = action("Select want to change")

export const WithValue = Template.bind({});
WithValue.args = {
    value: "1",
    onChangeItem: callback,
    items: [
        {value: "1", title: "Coca Cola"},
        {value: "2", title: "Sprite"},
        {value: "3", title: "Fanta"},
    ]
};

export const WithoutValue = Template.bind({});
WithoutValue.args = {
    onChangeItem: callback,
    items: [
        {value: "1", title: "Coca Cola"},
        {value: "2", title: "Sprite"},
        {value: "3", title: "Fanta"},
    ]
};

export const Changeable = () => {
    const [value, setValue] = useState("2")

  return (
      <Select value={value}
              onChangeItem={setValue}
              items={
                  [
                      {value: "1", title: "Coca Cola"},
                      {value: "2", title: "Sprite"},
                      {value: "3", title: "Fanta"},
                  ]

              }
      />
  )
}