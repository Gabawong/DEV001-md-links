const {
  existsSync,
  isAbsolute,
  returnOnlyFilesMd,
  getAllLinks,
  validatedLinks,
} = require('./index.js')

const mdLinks = (route, options) => {
  //resolve(resuelto) cuando se resuelve la promesa, y reject no,relacionado al then y catch, resolve y reject son callback,son funciones!! 
  return new Promise((resolve, reject) => {
    const pathAbsolute = isAbsolute(route);
    //verificamos si la ruta existe, le pasamos la fn isAbsolute que verifica
    //si el path es absoluto, sino que lo vuelva absoluto
    if (existsSync(pathAbsolute)) {
      const files = returnOnlyFilesMd(pathAbsolute);
      if (files.length === 0) {
        reject('THIS FILE DOES NOT EXIST')
      }
      getAllLinks(files).then((res) => {
        if (options.validate === true) {
          validatedLinks(res).then((file) => {
            resolve(file)
          });
        };
        if (options.validate === false) {
          resolve(res)
        }
      })
    }
    else {
      reject('THIS PATH DOES NOT EXIST')
    }
  });
};
//mdLinks('./README.md');


module.exports = {
  mdLinks
};
