// #! /usr/bin/env node
// // Person Personality Check Program: By Using OOP
// import chalk from "chalk";
// import inquirer from "inquirer";
// class Person {
//   name: string;
//   age: number;
//   personality: string;
//   constructor(name: string, age: number, personality: string) {
//     this.name = name;
//     this.age = age;
//     this.personality = personality;
//   }
//   greet() {
//     switch (this.personality) {
//       case 'introvert':
//         return chalk.cyan.bold(`Hello, I'm ${this.name}. I enjoy quiet time and deep conversations.`);
//       case 'extrovert':
//         return chalk.cyan.bold(`Hey there, I'm ${this.name}! I love meeting new people and going to social events.`);
//       case 'ambivert':
//         return chalk.cyan.bold(`Hi, I'm ${this.name}. I enjoy a balance of social time and alone time.`);
//       case 'thinker':
//         return chalk.cyan.bold(`Greetings, I'm ${this.name}. I love analyzing situations and thinking things through.`);
//       case 'feeler':
//         return chalk.cyan.bold(`Hi, I'm ${this.name}. I make decisions based on my feelings and the impact on others.`);
//       case 'perceiver':
//         return chalk.cyan.bold(`Hey, I'm ${this.name}. I prefer to keep my options open and go with the flow.`);
//       default:
//         return chalk.cyan.bold(`Hi, I'm ${this.name}.`);
//     }
//   }
//   describePersonality() {
//     switch (this.personality) {
//       case 'introvert':
//         return chalk.cyan.bold(`${this.name} prefers quiet environments and values deep connections with a few close friends.`);
//       case 'extrovert':
//         return chalk.cyan.bold(`${this.name} thrives in social settings and enjoys being around people.`);
//       case 'ambivert':
//         return chalk.cyan.bold(`${this.name} has a balance of extrovert and introvert traits, enjoying both socializing and alone time.`);
//       case 'thinker':
//         return chalk.cyan.bold(`${this.name} is analytical and logical, often making decisions based on facts and logic.`);
//       case 'feeler':
//         return chalk.cyan.bold(`${this.name} is empathetic and makes decisions based on emotions and the impact on others.`);
//       case 'perceiver':
//         return chalk.cyan.bold(`${this.name} is adaptable and spontaneous, preferring to keep options open.`);
//       default:
//         return chalk.cyan.bold(`${this.name} has a unique personality that doesn't fit into a specific category.`);
//     }
//   }
//   celebrateBirthday() {
//     this.age++;
//     return chalk.bold(`\n${chalk.cyan.bold(this.name)} is now ${chalk.cyan.bold(this.age)} years old!`);
//   }
// }
// // Function to create a new person object
// function createPerson() {
//   inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: chalk.bold("What's the person's name?"),
//       },
//       {
//         type: 'number',
//         name: 'age',
//         message: chalk.bold("What's the person's age?"),
//       },
//       {
//         type: 'list',
//         name: 'personality',
//         message: chalk.bold("What's the person's personality?"),
//         choices: [
//           'introvert', 
//           'extrovert', 
//           'ambivert', 
//           'thinker', 
//           'feeler', 
//           'perceiver',
//           'other'
//         ],
//       },
//     ])
//     .then((answers: { name: string; age: number; personality: string }) => {
//       const { name, age, personality } = answers;
//       const person = new Person(name, age, personality);
//       console.log(person.greet());
//       console.log(person.describePersonality());
//       celebrate(person);
//     });
// }
// // Function to celebrate person's birthday
// function celebrate(person: Person) {
//   inquirer
//     .prompt({
//       type: 'confirm',
//       name: 'celebrate',
//       message: chalk.blue.bold('\nDo you want to celebrate their birthday?'),
//     })
//     .then(answer => {
//       if (answer.celebrate) {
//         console.log(person.celebrateBirthday());
//       } else {
//         console.log(chalk.green.bold('\nMaybe next time!'));
//       }
//     });
// }
// // Start the program
// createPerson();
// import inquirer from "inquirer";
// interface Score {
//   introvert: number;
//   extrovert: number;
//   thinker: number;
//   feeler: number;
//   perceiver: number;
//   ambivert: number;
// }
// interface Answers {
//   social_preference: 'being alone or with a few close friends' | 'being in large groups and socializing' | 'both';
//   decision_making: 'logic and facts' | 'feelings and the impact on others';
//   planning: 'keeping options open' | 'having a structured plan';
// }
// interface BirthdayAnswer {
//   celebrate: boolean;
// }
// class Person {
//   name: string;
//   age: number;
//   personality: string;
//   constructor(name: string, age: number, personality: string) {
//     this.name = name;
//     this.age = age;
//     this.personality = personality;
//   }
//   greet() {
//     return `Hi, I'm ${this.name}. Nice to meet you!`;
//   }
//   describePersonality() {
//     switch (this.personality) {
//       case 'introvert':
//         return `${this.name} prefers quiet environments and values deep connections with a few close friends.`;
//       case 'extrovert':
//         return `${this.name} thrives in social settings and enjoys being around people.`;
//       case 'ambivert':
//         return `${this.name} has a balance of extrovert and introvert traits, enjoying both socializing and alone time.`;
//       case 'thinker':
//         return `${this.name} is analytical and logical, often making decisions based on facts and logic.`;
//       case 'feeler':
//         return `${this.name} is empathetic and makes decisions based on emotions and the impact on others.`;
//       case 'perceiver':
//         return `${this.name} is adaptable and spontaneous, preferring to keep options open.`;
//       default:
//         return `${this.name} has a unique personality that doesn't fit into a specific category.`;
//     }
//   }
//   celebrateBirthday() {
//     this.age++;
//     return `${this.name} is now ${this.age} years old!`;
//   }
// }
// function determinePersonality(answers: Answers): string {
//   let score: Score = { introvert: 0, extrovert: 0, thinker: 0, feeler: 0, perceiver: 0, ambivert: 0 };
//   // Increment scores based on answers
//   if (answers.social_preference === 'being alone or with a few close friends') score.introvert++;
//   if (answers.social_preference === 'being in large groups and socializing') score.extrovert++;
//   if (answers.decision_making === 'logic and facts') score.thinker++;
//   if (answers.decision_making === 'feelings and the impact on others') score.feeler++;
//   if (answers.planning === 'keeping options open') score.perceiver++;
//   if (answers.planning === 'having a structured plan') score.thinker++;
//   if (answers.social_preference === 'both') score.ambivert++;
//   // Find the personality type with the highest score
//   const highestScore = Math.max(...Object.values(score));
//   const personality = (Object.keys(score) as (keyof Score)[]).find(key => score[key] === highestScore);
//   return personality || 'other';
// }
// function askPreferences(name: string, age: number) {
//   inquirer
//     .prompt([
//       {
//         type: 'list',
//         name: 'social_preference',
//         message: 'Do you prefer:',
//         choices: ['being alone or with a few close friends', 'being in large groups and socializing', 'both'],
//       },
//       {
//         type: 'list',
//         name: 'decision_making',
//         message: 'Do you make decisions based on:',
//         choices: ['logic and facts', 'feelings and the impact on others'],
//       },
//       {
//         type: 'list',
//         name: 'planning',
//         message: 'Do you prefer:',
//         choices: ['keeping options open', 'having a structured plan'],
//       },
//     ])
//     .then((answers: Answers) => {
//       const personality = determinePersonality(answers);
//       const person = new Person(name, age, personality);
//       console.log(person.greet());
//       console.log(person.describePersonality());
//       celebrate(person);
//     });
// }
// // Function to create a new person object
// function createPerson() {
//   inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: "What's your name?",
//       },
//       {
//         type: 'number',
//         name: 'age',
//         message: "What's your age?",
//       },
//     ])
//     .then((answers: { name: string; age: number }) => {
//       const { name, age } = answers;
//       askPreferences(name, age);
//     });
// }
// // Function to celebrate person's birthday
// function celebrate(person: Person) {
//   inquirer
//     .prompt({
//       type: 'confirm',
//       name: 'celebrate',
//       message: 'Do you want to celebrate your birthday?',
//     })
//     .then((answer: BirthdayAnswer) => {
//       if (answer.celebrate) {
//         console.log(person.celebrateBirthday());
//       } else {
//         console.log('Maybe next time!');
//       }
//     });
// }
// // Start the program
// createPerson();
import inquirer from 'inquirer';
import chalk from 'chalk';
class Person {
    name;
    personality;
    constructor(name, personality) {
        this.name = name;
        this.personality = personality;
    }
    greet() {
        return chalk.bold(`\nHi, I'm ${chalk.cyan.bold(this.name)}. Nice to meet you!\n`);
    }
    describePersonality() {
        const descriptions = {
            introvert: 'prefers quiet environments and values deep connections with a few close friends.',
            extrovert: 'thrives in social settings and enjoys being around people.',
            ambivert: 'has a balance of extrovert and introvert traits, enjoying both socializing and alone time.',
            thinker: 'is analytical and logical, often making decisions based on facts and logic.',
            feeler: 'is empathetic and makes decisions based on emotions and the impact on others.',
            perceiver: 'is adaptable and spontaneous, preferring to keep options open.',
            other: 'has a unique personality that doesn\'t fit into a specific category.'
        };
        return chalk.bold(`${chalk.cyan.bold(this.name)} is a ${chalk.cyan.bold(this.personality)}. ${this.name} ${descriptions[this.personality] || descriptions.other}`);
    }
}
function determinePersonality(answers) {
    const score = { introvert: 0, extrovert: 0, thinker: 0, feeler: 0, perceiver: 0, ambivert: 0 };
    if (answers.social_preference === 'being alone or with a few close friends')
        score.introvert++;
    if (answers.social_preference === 'being in large groups and socializing')
        score.extrovert++;
    if (answers.decision_making === 'logic and facts')
        score.thinker++;
    if (answers.decision_making === 'feelings and the impact on others')
        score.feeler++;
    if (answers.planning === 'keeping options open')
        score.perceiver++;
    if (answers.planning === 'having a structured plan')
        score.thinker++;
    if (answers.social_preference === 'both')
        score.ambivert++;
    const highestScore = Math.max(...Object.values(score));
    const personality = Object.keys(score).find(key => score[key] === highestScore);
    return personality || 'other';
}
function askPreferences(name) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'social_preference',
            message: chalk.green.bold('\nDo you prefer:'),
            choices: ['being alone or with a few close friends', 'being in large groups and socializing', 'both'],
        },
        {
            type: 'list',
            name: 'decision_making',
            message: chalk.green.bold('\nDo you make decisions based on:'),
            choices: ['logic and facts', 'feelings and the impact on others'],
        },
        {
            type: 'list',
            name: 'planning',
            message: chalk.green.bold('\nDo you prefer:'),
            choices: ['keeping options open', 'having a structured plan'],
        },
    ]).then((answers) => {
        const personality = determinePersonality(answers);
        const person = new Person(name, personality);
        console.log(person.greet());
        console.log(person.describePersonality());
    });
}
function createPerson() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: chalk.cyan.bold("\nWhat's your name?"),
        }
    ]).then((answers) => {
        const { name } = answers;
        askPreferences(name);
    });
}
// Start the program
createPerson();
