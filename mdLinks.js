const {
  existsSync,
  reviewAbsolute,
  returnOnlyFilesMd,
  getAllLinks,
  validatedLinks,
} = require('./mdLinks_Index.js')


const mdLinks = (route, options) => {
  //resolve(resuelto) cuando se resuelve la promesa, y reject no,relacionado al then y catch, resolve y reject son callback,son funciones!! 
  return new Promise((resolve, reject) => {
    const pathAbsolute = reviewAbsolute(route);
    //verificamos si la ruta existe, le pasamos la fn reviewAbsolute que verifica
    //si el path es absoluto, sino que lo vuelva absoluto
    if (existsSync(pathAbsolute)) {
      const files = returnOnlyFilesMd(pathAbsolute);
      //Promise.all - devuelve una promesa que termina correctamente cuando todas las promesas en el argumento
      //iterable han sido concluídas con éxito, o bien rechaza la petición con el motivo pasado por la primera 
      //promesa que es rechazada
    
      const links = Promise.all(files.map((file) => getAllLinks(file)));
      if (files.length === 0) {
        reject('THIS FILE DOES NOT EXIST')
      };
    
      if (options.validate === true) {
        const valid = links.then((res) => validatedLinks(res.flat())
        .catch((error) => console.log(error)));
        resolve(valid);
        return;
      }else if (options.validate === false) {
        resolve(links.then((res) => res.flat()));
        return;
      };
    }
    else {
      reject('THIS PATH DOES NOT EXIST')
    }
  });
};


module.exports = {
  mdLinks
};
