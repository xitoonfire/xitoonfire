import { StoryFn, Meta } from '@storybook/react';
import Grid from './Grid';

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    columns: { control: { type: 'number', min: 1, max: 12, step: 1 } },
    gap: { control: { type: 'radio', options: ['none', 'small', 'medium', 'large'] } },
    responsive: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<any> = (args) => (
  <Grid {...args}>
    <div className="bg-gray-300 p-4">Item 1</div>
    <div className="bg-gray-400 p-4">Item 2</div>
    <div className="bg-gray-500 p-4">Item 3</div>
    <div className="bg-gray-600 p-4">Item 4</div>
    <div className="bg-gray-700 p-4">Item 5</div>
    <div className="bg-gray-800 p-4">Item 6</div>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  columns: 3,
  gap: 'medium',
  responsive: false,
};

export const ResponsiveGrid = Template.bind({});
ResponsiveGrid.args = {
  columns: 4,
  gap: 'medium',
  responsive: true,
};

export const SmallGap = Template.bind({});
SmallGap.args = {
  columns: 3,
  gap: 'small',
  responsive: false,
};

export const LargeGap = Template.bind({});
LargeGap.args = {
  columns: 3,
  gap: 'large',
  responsive: false,
};