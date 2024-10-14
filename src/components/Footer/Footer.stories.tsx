import { Meta, StoryFn } from '@storybook/react';
import Footer, { FooterProps } from './Footer';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default {
  title: 'Footer/Footer',
  component: Footer,
  argTypes: {
    links: { control: 'object' },
    socialMedia: { control: 'object' },
    copyright: { control: 'text' },
    className: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />;


export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  links: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  socialMedia: [
    { name: 'Facebook', icon: <FaFacebook />, href: 'https://facebook.com' },
    { name: 'Twitter', icon: <FaTwitter />, href: 'https://twitter.com' },
    { name: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com' },
  ],
  copyright: 'MyWebsite. All rights reserved.',
};


export const NoSocialMediaFooter = Template.bind({});
NoSocialMediaFooter.args = {
  links: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  copyright: 'NoSocialWebsite. All rights reserved.',
};