import { Meta, StoryFn } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email', 'number', 'date'],
      },
    },
    isRequired: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<any> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: 'Username',
  placeholder: 'Enter your username',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  label: 'Password',
  placeholder: 'Enter your password',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
  label: 'Age',
  placeholder: 'Enter your age',
};

export const Date = Template.bind({});
Date.args = {
  type: 'date',
  label: 'Date of Birth',
};


export const Required = Template.bind({});
Required.args = {
  type: 'text',
  label: 'Required Field',
  placeholder: 'Required field',
  isRequired: true,
};