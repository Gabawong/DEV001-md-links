#!/usr/bin/env node
const chalk = require('chalk');
const { mdLinks } = require('./mdLinks.js');
const { totalLinks, uniqueLinks, brokenLinks } = require('./cli_stats.js');
const { instruction, msnHelp, msnError,msn1} = require('./style.js')



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
            console.log(msn1('md-links-go!'));
            console.log(chalk.bold.bgCyan('These are the links found, you can enter the commands to see the statistics, if you have doubts enter --help.\n'));
            console.log(resolve.flat());
            //return msnError('Enter the command md-links-go, then the desired path (example: directory/example.md) You can enter --help to know the commands')
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