import { StoryFn, Meta } from '@storybook/react';
import Link, { LinkProps } from './Link'; 

export default {
  title: 'Utility/Link',
  component: Link,
  argTypes: {
    href: { control: 'text' },
    text: { control: 'text' },
    external: { control: 'boolean' },
    underline: { control: 'boolean' },
    className: { control: 'text' },
  },
} as Meta<typeof Link>;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: 'https://example.com',
  text: 'Visit Example',
  external: true,
  underline: true,
};

export const InternalLink = Template.bind({});
InternalLink.args = {
  href: '/about',
  text: 'Go to About Page',
  underline: true,
};

export const NoUnderline = Template.bind({});
NoUnderline.args = {
  href: 'https://example.com',
  text: 'Visit Example',
  external: true,
  underline: false,
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  href: 'https://example.com',
  text: 'Custom Styled Link',
  className: 'text-red-500 hover:text-red-700 font-bold',
  underline: false,
};