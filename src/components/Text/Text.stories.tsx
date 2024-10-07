import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';
import TextProps  from './Text'; 



export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: { control: 'text', defaultValue: 'Sample text' },
    variant: {
      control: { type: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'small', 'bold', 'italic', 'span', 'highlight'] },
      defaultValue: 'p',
    },
  },
} as Meta;

const Template: StoryFn<typeof TextProps> = (args) => <Text {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
  children: 'This is an H1 Heading',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'h2',
  children: 'This is an H2 Heading',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: 'h3',
  children: 'This is an H3 Heading',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: 'p',
  children: 'This is a paragraph of text.',
};

export const Blockquote = Template.bind({});
Blockquote.args = {
  variant: 'blockquote',
  children: 'This is a blockquote text.',
};

export const SmallText = Template.bind({});
SmallText.args = {
  variant: 'small',
  children: 'This is small text.',
};

export const BoldText = Template.bind({});
BoldText.args = {
  variant: 'bold',
  children: 'This text is bold.',
};

export const ItalicText = Template.bind({});
ItalicText.args = {
  variant: 'italic',
  children: 'This text is italic.',
};

export const SpanText = Template.bind({});
SpanText.args = {
  variant: 'span',
  children: 'This is a span text.',
};

export const HighlightText = Template.bind({});
HighlightText.args = {
  variant: 'highlight',
  children: 'This text is highlighted.',
};