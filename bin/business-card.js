#!/usr/bin/env node

// Import necessary modules
import boxen from "boxen";
import chalk from "chalk";

// Function to calculate years of experience
const calculateExperience = (startYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

// Set the start year of your experience
const startYearOfExperience = 2019; // Replace with your actual start year

// Calculate years of experience
const yearsOfExperience = calculateExperience(startYearOfExperience);

// Define boxenOptions for the business card
const boxenOptions = {
  padding: 1,
  width: 54,
  title: "Software Engineer",
  titleAlignment: "center",
  borderStyle: "double",
  borderColor: "#ffb626",
};

// Create a bold introduction text
const intro = chalk.bold(
  `Hello, I'm Ajay Vishwakarma, a seasoned Software Engineer with ${yearsOfExperience} years of expertise in crafting high-performance web applications. Proficient in a diverse range of technologies, I excel in delivering scalable solutions that align with business goals. Committed to continuous learning, I stay ahead of industry trends, ensuring innovative and efficient solutions. My collaborative approach and analytical mindset contribute to successful project outcomes. Explore more about my work on my...` +
  "\n\n"
);

// Define the links object
const links = [
  {
    name: chalk.hex("#fff").bgHex("#582be8").bold("Website"),
    url: "https://www.ajayvishu.in/",
  },
  {
    name: chalk.hex("#fff").bgHex("#000").bold("DEV.to"),
    url: "https://dev.to/ajayvishwakarma",
  },
  {
    name: chalk.hex("#fff").bgHex("#6e5494").bold("GitHub"),
    url: "https://github.com/ajayvishu",
  },
];

// Create a string of link names and URLs
const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

try {
  // Print the business card using boxen
  console.log(boxen(intro + linkList, boxenOptions));
} catch (error) {
  console.error("An error occurred: ", error.message);
}
