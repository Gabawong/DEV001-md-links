const chalk = require('chalk');
const figlet = require('figlet');
const { log } = console;

const msn1 = (msn1) => {
    console.log(chalk.bold.cyanBright(figlet.textSync(msn1, {
        font: 'ANSI Shadow',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })));
}

const msnAlert = (msn2) => {
    console.log(chalk.bold.blueBright(figlet.textSync(msn2)));
}
const msnError = (error) => {
    log(chalk.bold.bgRed(`${error}`));
}

const instruction = () => {
    msn1('Welcome');
    log(chalk.bold.bgCyan('Here are the instructions for using md-Links-go: \n'));
    log(chalk.bold.cyan('1. Enter the command md-links-go, then the desired path (example: directory/example.md), a list of found links will appear.\n'));
    log(chalk.bold.cyan('2. If you want to know how many links there are and how many of them are unique, enter --stats after the path to the file.\n'));
    log(chalk.bold.cyan('3. If you want to know how many valid links exist, enter after the path the option: --validate.\n'));
    log(chalk.bold.cyan('4. If you want to know how many are broken in your .md file, add after the path the two options, one followed by the other "--stats and --validate".\n'));
    log(chalk.bold.bgCyan('5. If you have any questions and need to know the commands again, write "md-Links --help" \n'));
}

const msnHelp = () => {
    msn1('Help!')
    log(chalk.bold.bgCyan('need some help ?, ...Try:\n'));
    log(chalk.bold.cyan('--validate (or --v)               -->  shows an array with links and status \n'));
    log(chalk.bold.cyan('--stats (or --s)                  -->  total and unique links \n '));
    log(chalk.bold.cyan('--validate --stats (or --v --s)   -->  total , unique and broken links \n'));
    log(chalk.bold.cyan('--help (or --h)                   -->  you are here \n'));
}
    
    module.exports = {
        msn1,
        msnAlert,
        msnError,
        instruction,
        msnHelp,
    }