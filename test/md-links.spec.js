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

});

