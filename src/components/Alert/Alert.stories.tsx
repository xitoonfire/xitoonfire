import { StoryFn, Meta } from '@storybook/react';
import Alert from './Alert';
export default {
  title: 'Feedback/Alert',
  component: Alert,
  argTypes: {
    type: { control: { type: 'radio', options: ['success', 'error', 'warning', 'info'] } },
    dismissible: { control: 'boolean' },
  },
} as Meta;
const Template: StoryFn<any> = (args) => <Alert {...args}>This is an alert message.</Alert>;
export const Info = Template.bind({});
Info.args = {
  type: 'info',
  dismissible: false,
};
export const Success = Template.bind({});
Success.args = {
  type: 'success',
  dismissible: false,
};
export const Error = Template.bind({});
Error.args = {
  type: 'error',
  dismissible: false,
};
export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  dismissible: false,
};
export const Dismissible = Template.bind({});
Dismissible.args = {
  type: 'info',
  dismissible: true,
  onClose: () => alert('Alert closed!'),
};