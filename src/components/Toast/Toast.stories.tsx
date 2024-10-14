import { StoryFn, Meta } from '@storybook/react';
import { useState, useEffect } from 'react';
import Toast from './Toast';

export default {
  title: 'Feedback/Toast',
  component: Toast,
  argTypes: {
    type: { control: { type: 'radio', options: ['success', 'error', 'warning', 'info'] } },
    duration: { control: { type: 'number', min: 1000, max: 10000, step: 1000 } },
  },
} as Meta;

const Template: StoryFn<any> = (args) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    
    setVisible(true);
  }, [args]);

  return (
    <>
      {visible ? (
        <Toast {...args} onClose={() => setVisible(false)} />
      ) : (
        <div /> 
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  message: 'This is an info toast.',
  type: 'info',
  duration: 3000,
};

export const Success = Template.bind({});
Success.args = {
  message: 'Operation was successful!',
  type: 'success',
  duration: 3000,
};

export const Error = Template.bind({});
Error.args = {
  message: 'An error occurred!',
  type: 'error',
  duration: 3000,
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'Warning: Check your inputs!',
  type: 'warning',
  duration: 3000,
};