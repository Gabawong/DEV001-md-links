const { mdLinks } = require('../mdLinks.js');

describe('mdLinks', () => {

  it('Debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('Deberia devolver una promesa', () => {
    return mdLinks()
      .then(() => {
        expect(mdLinks).toBe(typeof 'promise')
      })
      .catch((error) => { error });
  });
  it('Debe retornar un array con objetos con propiedades href, text, file', () => {
    const path = '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/dataLovers.md'
    const array = [{
      href: 'https://postimg.cc/1fYMqZMd',
      text: '![DATA-LOVE-3.jpg](https://i.postimg.cc/mgTnKL9T/DATA-LOVE-3.jpg)',
      file: '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/dataLovers.md',
    }];
    expect(mdLinks(path, { validate: false })).resolves.toEqual(array);//Se usa para probar que los objetos tienen los mismos tipos y estructura.
  });
  it('Debe retornar un array con objetos con propiedades href, text, file, status, message', () => {
    const path = '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/dataLovers.md'
    const array = [{
      href: 'https://postimg.cc/1fYMqZMd',
      text: '![DATA-LOVE-3.jpg](https://i.postimg.cc/mgTnKL9T/DATA-LOVE-3.jpg)',
      file: '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/dataLovers.md',
      status: 200,
      message: 'ok'
    }];
    expect(mdLinks(path, { validate: true })).resolves.toEqual(array);
  });

});
