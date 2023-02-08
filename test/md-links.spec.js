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
    const path = '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/pruebalinks.md'
    const array = [{
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/pruebalinks.md',
    }];
    expect(mdLinks(path, { validate: false })).resolves.toStrictEqual(array);//Se usa para probar que los objetos tienen los mismos tipos y estructura.
  });
  it('Debe retornar un array con objetos con propiedades href, text, file, status, message', () => {
    const path = '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/pruebalinks.md'
    const array = [{
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/pruebalinks.md',
        status: 200,
        message: 'ok'
      }
    ];
    expect(mdLinks(path, { validate: true })).resolves.toStrictEqual(expect.anything(array));
  });
});
