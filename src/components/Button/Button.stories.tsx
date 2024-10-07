import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    shape: {
      control: {
        type: 'select',
        options: ['rounded', 'boxed'],
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// Primary Button
export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
  size: 'medium',
  shape: 'rounded',
};

// Secondary Button
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  size: 'medium',
  shape: 'boxed',
};

// Tertiary Button
export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary Button',
  variant: 'tertiary',
  size: 'medium',
  shape: 'rounded',
};

// Disabled Button
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  variant: 'primary',
  size: 'medium',
  shape: 'rounded',
  disabled: true,
};

// Large Rounded Button
export const LargeRounded = Template.bind({});
LargeRounded.args = {
  label: 'Large Rounded Button',
  variant: 'primary',
  size: 'large',
  shape: 'rounded',
};

// Small Boxed Button
export const SmallBoxed = Template.bind({});
SmallBoxed.args = {
  label: 'Small Boxed Button',
  variant: 'secondary',
  size: 'small',
  shape: 'boxed',
};