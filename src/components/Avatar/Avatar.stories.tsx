import { StoryFn, Meta } from '@storybook/react';
import Avatar from './Avatar'

export default {
  title: 'Utility/Avatar',
  component: Avatar,
  argTypes: {
    size: { control: { type: 'radio', options: ['small', 'medium', 'large'] } },
    shape: { control: { type: 'radio', options: ['circle', 'square'] } },
    bgColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<any> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'User profile',
  size: 'medium',
  shape: 'circle',
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  initials: 'JD',
  size: 'medium',
  shape: 'circle',
  bgColor: '#1a73e8',
};

export const LargeSquare = Template.bind({});
LargeSquare.args = {
  src: 'https://via.placeholder.com/150',
  size: 'large',
  shape: 'square',
};

export const SmallInitials = Template.bind({});
SmallInitials.args = {
  initials: 'AB',
  size: 'small',
  shape: 'circle',
  bgColor: '#ff5722',
};