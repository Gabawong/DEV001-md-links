#!/usr/bin/env node
const chalk = require('chalk');
const { mdLinks } = require('./mdLinks.js');
const { totalLinks, uniqueLinks, brokenLinks } = require('./cli_stats.js');
const { msn1, msnAlert, instruction, msnHelp, msnError } = require('./style.js')
const { log } = console;


// const inquirer = require('inquirer');

//process.argv se utiliza para pasar los argumentos al proceso node.js cuando se ejecuta en la línea de comandos.
const option = process.argv.slice(2);
//console.log(option);
const userPath = process.argv[2];

const validate = option.includes('--validate') || option.includes('--v');
const stats = option.includes('--stats') || option.includes('--s');
const help = option.includes('--help') || option.includes('--h');


mdLinks(userPath, { validate })
    .then(resolve => {

        if (validate && stats) {
            console.log(chalk.bold.cyan(totalLinks(resolve)));
            console.log(chalk.bold.cyan(uniqueLinks(resolve)));
            console.log(chalk.bold.red(brokenLinks(resolve)));
        } else if (validate) {
            console.log(resolve.flat());
        } else if (stats) {
            console.log(chalk.bold.cyan(totalLinks(resolve)));
            console.log(chalk.bold.cyan(uniqueLinks(resolve)));
        } else if (help) {
            console.log(msnHelp());
        } else{
            return msnError('THIS FILE HAS NO LINKS TO SHOW, TRY ANOTHER PATH')
        }
    })
    .catch((reject) => {
        if (!userPath) {
            return instruction();
        }
        if (help) {
            return msnHelp();
        }
        else{
            return msnError('THIS PATH DOES NOT EXIST, TRY ANOTHER ONE')
        }
    });