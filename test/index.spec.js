const {
    existsSync,
    isAbsolute,
    isFile,
    arrayForFiles,
    returnOnlyFilesMd,
    readFileLinks,
    getAllLinks,
    validatedLinks
} = require('../index.js');

const { fetch } = require('../__mock__/fetch.js')


//-------------------Si el path existe------------------------
describe('existsSync, esta función retorna un booleano y verifica si existe un directorio o archivo', () => {
    it('Deberia ser una función', () => {
        expect(typeof existsSync).toBe('function');
    });
    it('Si la ruta existe, debe devolver true', () => {
        expect(existsSync('Prueba')).toBe(true);
    });
    it('Si la ruta no existe, debe devolver false', () => {
        expect(existsSync('noexiste')).toBe(false);
    });
});
//------------------- Si el path es absoluto --------------------
describe('isAbsolute, esta función detecta si el path es absoluto', () => {
    it('Deberia ser una función', () => {
        expect(typeof isAbsolute).toBe('function');
    });
    it('Si es una ruta absoluta, debe devolver la misma ruta', () => {
        expect(isAbsolute('/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/README.md')).toBe('/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/README.md');
    });
    it('Si es una ruta relativa, deberia convertirla a absoluta', () => {
        expect(isAbsolute('README.md')).toBe('/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/README.md');
    });
});
//---------------------------- saber si es un archivo ------------------------------------
describe('isFile, funcion para saber si es un archivos, retorna booleano', () => {
    it('Deberia ser una función', () => {
        expect(typeof isFile).toBe('function');
    });
    it('Si es un archivo retornar true', () => {
        expect(isFile('./README.md')).toBe(true)
    });
});
//------Verifica si es archivo o directorio y retorna un array con archivos sino lee el directorio y devuelve los archivos en un array ---------------
describe('arrayForFiles, función para retornar un array con archivos, sino que lea el directorio', () => {
    it('Deberia ser una fucnión', () => {
        expect(typeof arrayForFiles).toBe('function');
    });
    it('Deberia retornar un array si verifica que la ruta es un archivo', () => {
        expect(arrayForFiles('/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba'))
            .toEqual([
                '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/dataLovers.md',
                '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/mdLinks.md',
                '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/pruebalinks.md',
                '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/socialNetwork.md',
                '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/texto.txt'
            ]);
    });
    it('Si le paso un directorio debe retornarme un array con los archivos del directorio', () => {
        expect(arrayForFiles('/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba'))
            .toEqual([
                '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/dataLovers.md',
                '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/mdLinks.md',
                '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/pruebalinks.md',
                '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/socialNetwork.md',
                '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/texto.txt'
            ]);
    });
});
//----------------------------- Retornar solo los archivos md ------------------------------ 
describe('returnOnlyFilesMd, función para retornar solo los archivos md', () => {
    it('Deberia ser una fucnión', () => {
        expect(typeof returnOnlyFilesMd).toBe('function');
    });
    it('Si le pasamos un array de archivos, hace un filtro y deberia retornar un array solo con archivos md', () => {
        expect(returnOnlyFilesMd('/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba'))
            .toEqual([
                '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/dataLovers.md',
                '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/mdLinks.md',
                '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/pruebalinks.md',
                '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/socialNetwork.md',
            ]);
    });
    it('Si le pasamos un directorio, hace un filtro y deberia retornar un array con archivos md ', () => {
        expect(returnOnlyFilesMd('\Prueba')).toEqual([
            "Prueba/subPrueba/dataLovers.md",
            "Prueba/subPrueba/mdLinks.md",
            "Prueba/subPrueba/pruebalinks.md",
            "Prueba/subPrueba/socialNetwork.md",
        ]);
    });
});
//------------------------------Leer los links, función devuelve una promesa --------------------------------------
describe('readFileLinks, función que se encarga de leer los links', () => {
    it('Deberia ser una función', () => {
        expect(typeof readFileLinks).toBe('function');
    });
    //Documentacion jest - promises
    it('Debe devolver una promesa', () => {
        return readFileLinks('/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/mdLinks.md')
            .then(() => {
                expect(readFileLinks).toBe(typeof 'promise')
            })
            .catch((error) => { error });
    });
});
//----------------------------traer los links en un array ------------------------------
describe('getAllLinks, función que trae todos los links en un array', () => {
    it('Debe devolver una promesa', () => {
        return getAllLinks()
            .then(() => {
                expect(getAllLinks).toBe(typeof 'promise')
            })
            .catch((error) => { error });
    });
    it('Debe devolvernos un array con objetos y dentro los links', () => {
        const path = '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/pruebalinks.md';
        const arrayLinks = [{
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'Markdown',
            file: '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/pruebalinks.md'
        }]
        return getAllLinks(path).then((res) => {
            expect(res).toEqual(arrayLinks);
        });
    });
});
//---------------------------------validar links -----------------------------------------------
const link = [{
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/pruebalinks.md'
}];
const errorLink = [{
    href: 'https://es.wikipedia.',
    text: 'Markdown',
    file: '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/pruebalinks.md'
}]

describe('validatedLinks, funcion que valida los links', () => {
    it('Deberia ser una función', () => {
        expect(typeof validatedLinks).toBe('function');
    });
    
    it('Debe de retornar  status y  menssage ok, de los links', () => {
        const linkValidate = [{
            'href': 'https://es.wikipedia.org/wiki/Markdown',
            'text': 'Markdown',
            'file': '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/pruebalinks.md',
            'status': 200,
            'message': 'ok',
        }];
        fetch.mockResolvedValue(link);
        return validatedLinks(link).then((res) => {
            expect(res).toEqual(linkValidate);
        });
    });
    it('Debe de retornar error, status Fail y  menssage No status, de los links', () => {
        const linkInvalidate = [{
            'href': 'https://es.wikipedia.',
            'text': 'Markdown',
            'file': '/Users/gaba/Documents/GABA/BOOTCAMP LABORATORIA /PROYECTOS/DEV001-md-links/DEV001-md-links/Prueba/subPrueba/pruebalinks.md',
            'status': 'Fail request to https://es.wikipedia./ failed, reason: getaddrinfo ENOTFOUND es.wikipedia.',
            'message': 'No status',
        }];
        fetch.mockResolvedValue(errorLink);
        return validatedLinks(errorLink).then((result) => {
            expect(result).toEqual(linkInvalidate);
        });
    });
});