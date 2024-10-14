import { Meta, StoryFn } from '@storybook/react';
import Card, { CardProps } from './Card'; 

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Card',
  imageUrl: 'https://via.placeholder.com/400',
  content: 'This is a simple card component using React and Tailwind CSS.',
  buttonText: 'Click Me',
  onButtonClick: () => alert('Button clicked!'),
};
