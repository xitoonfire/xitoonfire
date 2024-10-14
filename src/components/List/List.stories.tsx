import { StoryFn, Meta } from '@storybook/react';
import List, { ListProps } from './List';

export default {
  title: 'Utility/List',
  component: List,
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    ordered: { control: { type: 'boolean' } },
    className: { control: { type: 'text' } },
    itemClassName: { control: { type: 'text' } },
  },
} as Meta<ListProps>;

const Template: StoryFn<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
};

export const OrderedList = Template.bind({});
OrderedList.args = {
  items: ['First', 'Second', 'Third'],
  ordered: true,
};

export const CustomStyling = Template.bind({});
CustomStyling.args = {
  items: ['Custom Item 1', 'Custom Item 2'],
  className: 'text-lg',
  itemClassName: 'text-blue-500',
};