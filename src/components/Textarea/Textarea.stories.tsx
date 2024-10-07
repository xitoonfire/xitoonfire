import { StoryFn, Meta } from '@storybook/react';
import Textarea from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    size: { control: { type: 'radio', options: ['small', 'medium', 'large'] } },
    variant: { control: { type: 'radio', options: ['default', 'outlined', 'filled'] } },
    disabled: { control: 'boolean' },
    resize: { control: { type: 'radio', options: ['none', 'both', 'horizontal', 'vertical'] } },
  },
} as Meta;

const Template: StoryFn<any> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'default-textarea',
  value: '',
  placeholder: 'Enter text...',
  size: 'medium',
  variant: 'default',
  rows: 4,
  resize: 'both',
  disabled: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  id: 'outlined-textarea',
  value: '',
  placeholder: 'Enter text...',
  size: 'medium',
  variant: 'outlined',
  rows: 6,
  resize: 'vertical',
  disabled: false,
};

export const Filled = Template.bind({});
Filled.args = {
  id: 'filled-textarea',
  value: '',
  placeholder: 'Enter text...',
  size: 'large',
  variant: 'filled',
  rows: 8,
  resize: 'none',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled-textarea',
  value: 'This is disabled.',
  placeholder: 'Enter text...',
  size: 'medium',
  variant: 'default',
  rows: 4,
  resize: 'both',
  disabled: true,
};