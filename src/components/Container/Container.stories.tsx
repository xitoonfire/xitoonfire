import { StoryFn, Meta } from '@storybook/react';
import Container from './Container';

export default {
  title: 'Layout/Container',
  component: Container,
  argTypes: {
    maxWidth: { control: { type: 'radio', options: ['sm', 'md', 'lg', 'xl', '2xl'] } },
    center: { control: 'boolean' },
    padding: { control: 'boolean' },
    showBoundary: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<any> = (args) => <Container {...args}>Content inside the container</Container>;

export const Default = Template.bind({});
Default.args = {
  maxWidth: 'lg',
  center: false,
  padding: true,
  showBoundary: false,
};

export const WithBoundary = Template.bind({});
WithBoundary.args = {
  maxWidth: 'lg',
  center: false,
  padding: true,
  showBoundary: true,
};

export const CenteredWithBoundary = Template.bind({});
CenteredWithBoundary.args = {
  maxWidth: 'lg',
  center: true,
  padding: true,
  showBoundary: true,
};