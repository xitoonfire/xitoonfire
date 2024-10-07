import { StoryFn, Meta } from '@storybook/react';
import Row from './Row';

export default {
  title: 'Layout/Row',
  component: Row,
  argTypes: {
    gap: { control: { type: 'radio', options: ['none', 'small', 'medium', 'large'] } },
    alignItems: { control: { type: 'radio', options: ['start', 'center', 'end'] } },
    justifyContent: { control: { type: 'radio', options: ['start', 'center', 'end', 'between', 'around'] } },
  },
} as Meta;

const Template: StoryFn<any> = (args) => (
  <Row {...args}>
    <div className="bg-gray-300 p-4">Item 1</div>
    <div className="bg-gray-400 p-4">Item 2</div>
    <div className="bg-gray-500 p-4">Item 3</div>
    <div className="bg-gray-600 p-4">Item 4</div>
  </Row>
);

export const Default = Template.bind({});
Default.args = {
  gap: 'medium',
  alignItems: 'start',
  justifyContent: 'start',
};

export const CenteredRow = Template.bind({});
CenteredRow.args = {
  gap: 'medium',
  alignItems: 'center',
  justifyContent: 'center',
};

export const JustifiedBetween = Template.bind({});
JustifiedBetween.args = {
  gap: 'large',
  alignItems: 'start',
  justifyContent: 'between',
};