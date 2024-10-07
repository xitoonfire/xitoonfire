import { StoryFn, Meta } from '@storybook/react';
import Form, { FormValues, FormProps } from './Form';

export default {
  title: 'Form/Form',
  component: Form,
  argTypes: {
    onSubmit: { action: 'submitted' },
    className: { control: 'text' },
  },
} as Meta<FormProps>;

const Template: StoryFn<FormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (values: FormValues) => {
    console.log('Form submitted with values:', values);
  },
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  onSubmit: (values: FormValues) => {
    console.log('Form submitted with values:', values);
  },
  className: 'bg-gray-100 p-6 rounded-lg',
};