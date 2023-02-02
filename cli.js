#!/usr/bin/env node
const { mdLinks } = require('./mdLinks.js');
//const chalk = require('chalk');
const { totalLinks, uniqueLinks, brokenLinks } = require('./cli_stats.js');
const figlet = require('figlet');

// const inquirer = require('inquirer');

//process.argv se utiliza para pasar los argumentos al proceso node.js cuando se ejecuta en la línea de comandos.
const option = process.argv.slice(2);
//console.log(option);
const userPath = process.argv[2];

const validate = option.includes('--validate')|| option.includes('--v');
const stats = option.includes('--stats')|| option.includes('--s');
const help = option.includes('--help') || option.includes ('--h');

if (option.length === 1) {
    mdLinks(userPath, { validate: false })
        .then(resolve => {
            console.log(resolve) //traer mi funcion de bienvenida
        })
        .catch((reject) => {
            error(reject);
            if(reject === 'THIS FILE DOES NOT EXIST'){
            //console.log(chalk.red.bold('THIS FILE DOES NOT EXIST')) code: 'ERR_REQUIRE_ESM'
            //}
        }
    });

} else {
    if (validate && stats) {
        mdLinks(userPath, { validate: true })
            .then(resolve => {
                console.log(totalLinks(resolve))
                console.log(uniqueLinks(resolve))
                console.log(brokenLinks(resolve))
            })
            .catch((error) => {
                Error(error);
            });
        }else if(validate) {
            mdLinks(userPath, { validate: true }) 
            .then(resolve => {
                console.log(resolve.flat());
            })
            .catch((error) => {
                Error(error);
            });
        }else if(stats) {
            mdLinks(userPath, { validate: true }) 
            .then(resolve => {
                console.log(totalLinks(resolve));
                console.log(uniqueLinks(resolve));
            })
            .catch((error) => {
                Error(error);
            });
        } else if(help){
            mdLinks(userPath, { validate: true })
            .then(resolve => {
                console.log(resolve);
            })
            .catch((error) => {
                Error(error);
            });
        } else{
            mdLinks(userPath, { validate: true })
            .then(resolve => {
                console.log(resolve);
            })
            .catch((error) => {
                Error(error);
            });
        }
        }



// const welcom = msn => {
//     console.log(chalk.bold.cyan(figlet.textSync(msn, { 
//       font:  'ANSI Shadow',
//       horizontalLayout: 'default',
//       verticalLayout: 'default'
//     })));
//   };



// mdLinks('./README.md').then((route)=>{
// console.log(mdLinks('./README.md'));
// })
// .catch((error) => {
//     console.log(error);
// });