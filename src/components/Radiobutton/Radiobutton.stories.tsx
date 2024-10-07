import { StoryFn, Meta } from '@storybook/react';
import RadioButton from './Radiobutton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<any> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'default',
  label: 'Default Radio',
  name: 'example',
  value: 'default',
  checked: false,
  onChange: () => console.log('Radio clicked'),
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'checked',
  label: 'Checked Radio',
  name: 'example',
  value: 'checked',
  checked: true,
  onChange: () => console.log('Radio clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled',
  label: 'Disabled Radio',
  name: 'example',
  value: 'disabled',
  checked: false,
  disabled: true,
  onChange: () => console.log('Radio clicked'),
};