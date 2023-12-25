#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
  padding: 1,
  width: 54,
  title: "software engineer",
  titleAlignment: "center",
  borderStyle: "double",
  borderColor: "#ffb626",
};

const intro = chalk.bold(
  "Hello! I am ajay vishwakarma, an experienced Web Application Developer with a passion for crafting high-performance and scalable web applications. With a dedicated focus spanning over 4 years, I have honed my expertise in various technologies, ensuring robust solutions that stand the test of both functionality and efficiency.\n\n",
);

const links = [
  { name: chalk.hex("#fff").bgHex("#582be8")("Website"), url: "   https://www.ajayvishu.in/" },
  { name: chalk.hex("#fff").bgHex("#000")("DEV.to"), url: "    https://dev.to/ajayvishwakarma" },
  { name: chalk.hex("#fff").bgHex("#6e5494")("GitHub"), url: "    https://github.com/ajayvishu" },
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList, boxenOptions));