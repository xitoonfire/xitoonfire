import { StoryFn, Meta } from '@storybook/react';
import Select from './Select';
import React from 'react'; 

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    size: { control: { type: 'radio', options: ['small', 'medium', 'large'] } },
    variant: { control: { type: 'radio', options: ['default', 'outlined', 'filled'] } },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<any> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'default-select',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  value: 'option1',
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => console.log(e.target.value),
  size: 'medium',
  variant: 'default',
};

export const Outlined = Template.bind({});
Outlined.args = {
  id: 'outlined-select',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  value: 'option1',
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => console.log(e.target.value),
  size: 'large',
  variant: 'outlined',
};

export const Filled = Template.bind({});
Filled.args = {
  id: 'filled-select',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  value: 'option1',
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => console.log(e.target.value),
  size: 'small',
  variant: 'filled',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled-select',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  value: 'option1',
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => console.log(e.target.value),
  size: 'medium',
  variant: 'default',
  disabled: true,
};