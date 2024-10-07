import { StoryFn, Meta } from '@storybook/react';
import CheckboxGroup from './Groupedcheckbox';


export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn<any> = (args) => <CheckboxGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  checkboxes: [
    { id: 'option1', label: 'Option 1', checked: false },
    { id: 'option2', label: 'Option 2', checked: true },
    { id: 'option3', label: 'Option 3', checked: false },
  ],
  onChange: (id: string) => console.log(`Checkbox ${id} changed`),
};