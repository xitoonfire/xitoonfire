import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark", // or 'dark'
    brandTitle: "UNT UI Library",
    brandUrl: "http://www.unt.edu.mk/",
    brandImage: "/unt.png", // Path to your custom logo
  }),
});

