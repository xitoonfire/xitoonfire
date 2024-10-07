import { Meta, StoryFn } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template:StoryFn<any> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'default',
  label: 'Default Checkbox',
  checked: false,
  onChange: () => console.log('Checkbox clicked'),
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'checked',
  label: 'Checked Checkbox',
  checked: true,
  onChange: () => console.log('Checkbox clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled',
  label: 'Disabled Checkbox',
  checked: false,
  disabled: true,
  onChange: () => console.log('Checkbox clicked'),
};