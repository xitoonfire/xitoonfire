import { StoryFn, Meta } from '@storybook/react';
import RadioButtonGroup from './Groupedradiobutton';

export default {
  title: 'Components/RadioButtonGroup',
  component: RadioButtonGroup,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<any> = (args) => <RadioButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'group1',
  options: [
    { id: 'option1', label: 'Option 1', value: 'option1', checked: false },
    { id: 'option2', label: 'Option 2', value: 'option2', checked: true },
    { id: 'option3', label: 'Option 3', value: 'option3', checked: false },
  ],
  onChange: (value: string) => console.log(`Radio ${value} changed`),
};