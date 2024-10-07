import { StoryFn, Meta } from '@storybook/react';
import Image, { ImageProps } from './Image';

export default {
  title: 'Utility/Image',
  component: Image,
  argTypes: {
    rounded: { control: 'boolean' },
    shadow: { control: 'boolean' },
    border: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
} as Meta<typeof Image>;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Default Image',
};

export const Rounded = Template.bind({});
Rounded.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Rounded Image',
  rounded: true,
};

export const Shadow = Template.bind({});
Shadow.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Shadow Image',
  shadow: true,
};

export const Border = Template.bind({});
Border.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Border Image',
  border: true,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Custom Size Image',
  width: '200px',
  height: '200px',
};