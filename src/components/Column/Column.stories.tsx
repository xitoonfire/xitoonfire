import { StoryFn, Meta } from '@storybook/react';
import Column from './Column';

export default {
  title: 'Layout/Column',
  component: Column,
  argTypes: {
    gap: { control: { type: 'radio', options: ['none', 'small', 'medium', 'large'] } },
    alignItems: { control: { type: 'radio', options: ['start', 'center', 'end'] } },
    justifyContent: { control: { type: 'radio', options: ['start', 'center', 'end', 'between', 'around'] } },
  },
} as Meta;

const Template: StoryFn<any> = (args) => (
  <Column {...args}>
    <div className="bg-gray-300 p-4">Item 1</div>
    <div className="bg-gray-400 p-4">Item 2</div>
    <div className="bg-gray-500 p-4">Item 3</div>
    <div className="bg-gray-600 p-4">Item 4</div>
  </Column>
);

export const Default = Template.bind({});
Default.args = {
  gap: 'medium',
  alignItems: 'start',
  justifyContent: 'start',
};

export const CenteredColumn = Template.bind({});
CenteredColumn.args = {
  gap: 'medium',
  alignItems: 'center',
  justifyContent: 'center',
};

export const JustifiedBetween = Template.bind({});
JustifiedBetween.args = {
  gap: 'large',
  alignItems: 'center',
  justifyContent: 'between',
};