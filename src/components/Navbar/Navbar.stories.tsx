
import { Meta, StoryFn } from '@storybook/react';
import Navbar, { NavbarProps } from './Navbar';

export default {
  title: 'Header/Navbar',
  component: Navbar,
  argTypes: {
    logoSrc: {
      control: 'text',
    },
    altText: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
} as Meta;

const Template: StoryFn<NavbarProps> = (args) => <Navbar {...args} />;

// Default Navbar with Logo
export const DefaultNavbarWithLogo = Template.bind({});
DefaultNavbarWithLogo.args = {
  logoSrc: 'https://example.com/logo.png', // Example logo
  altText: 'My Brand Logo',
  links: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
};

// Navbar with Custom Links and Logo
export const CustomNavbarWithLogo = Template.bind({});
CustomNavbarWithLogo.args = {
  logoSrc: 'https://example.com/custom-logo.png',
  altText: 'Custom Brand Logo',
  links: [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Profile', href: '/profile' },
    { name: 'Settings', href: '/settings' },
  ],
};