#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Personality check Program by using OOP:

class Person {
  name: string;
  personality: string;

  constructor(name: string, personality: string) {
    this.name = name;
    this.personality = personality;
  }

  greet() {
    return chalk.bold(
      `\nHi, I'm ${chalk.cyan.bold(this.name)}. Nice to meet you!\n`
    );
  }

  describePersonality() {
    const descriptions: { [key: string]: string } = {
      introvert:
        "prefers quiet environments and values deep connections with a few close friends.",
      extrovert: "thrives in social settings and enjoys being around people.",
      ambivert:
        "has a balance of extrovert and introvert traits, enjoying both socializing and alone time.",
      thinker:
        "is analytical and logical, often making decisions based on facts and logic.",
      feeler:
        "is empathetic and makes decisions based on emotions and the impact on others.",
      perceiver:
        "is adaptable and spontaneous, preferring to keep options open.",
      other:
        "has a unique personality that doesn't fit into a specific category.",
    };
    return chalk.bold(
      `${chalk.cyan.bold(this.name)} is a ${chalk.cyan.bold(
        this.personality
      )}. ${this.name} ${descriptions[this.personality] || descriptions.other}`
    );
  }
}

interface Answers {
  social_preference: string;
  decision_making: string;
  planning: string;
}

function determinePersonality(answers: Answers): string {
  const score: { [key: string]: number } = {
    introvert: 0,
    extrovert: 0,
    thinker: 0,
    feeler: 0,
    perceiver: 0,
    ambivert: 0,
  };

  if (answers.social_preference === "being alone or with a few close friends")
    score.introvert++;
  if (answers.social_preference === "being in large groups and socializing")
    score.extrovert++;
  if (answers.decision_making === "logic and facts") score.thinker++;
  if (answers.decision_making === "feelings and the impact on others")
    score.feeler++;
  if (answers.planning === "keeping options open") score.perceiver++;
  if (answers.planning === "having a structured plan") score.thinker++;
  if (answers.social_preference === "both") score.ambivert++;

  const highestScore = Math.max(...Object.values(score));
  const personality = Object.keys(score).find(
    (key) => score[key] === highestScore
  );

  return personality || "other";
}

function askPreferences(name: string) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "social_preference",
        message: chalk.green.bold("\nDo you prefer:"),
        choices: [
          "being alone or with a few close friends",
          "being in large groups and socializing",
          "both",
        ],
      },
      {
        type: "list",
        name: "decision_making",
        message: chalk.green.bold("\nDo you make decisions based on:"),
        choices: ["logic and facts", "feelings and the impact on others"],
      },
      {
        type: "list",
        name: "planning",
        message: chalk.green.bold("\nDo you prefer:"),
        choices: ["keeping options open", "having a structured plan"],
      },
    ])
    .then((answers: Answers) => {
      const personality = determinePersonality(answers);
      const person = new Person(name, personality);
      console.log(person.greet());
      console.log(person.describePersonality());
    });
}

function createPerson() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: chalk.cyan.bold("\nWhat's your name?"),
      },
    ])
    .then((answers: { name: string }) => {
      const { name } = answers;
      askPreferences(name);
    });
}

// Start the program
createPerson();
