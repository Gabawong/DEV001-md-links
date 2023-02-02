
// const  figlet  =  require ( 'figlet' ) ;

const totalLinks = (array) => `Total : ${array.length}`;
//Se usa el metodo set para traer solo un link si es que se repitiesen
const uniqueLinks = (array) => {
    const unique = [...new Set(array.map(link => link.href))];
    return stats = `Unique : ${unique.length}`;
}
//para traer los links que estan rotos
const brokenLinks = (array) => {
    const broken = array.filter((link) => link.status === 'Fail ' || link.status > 400 || link.status < 199)
    return statsBroken = `Broken : ${broken.length}`;
}


// const welcome = figlet('¡¡WELCOME  MdLinks' , ( err ,  datos ) => { 
//     if  ( err )  { 
//         console . log ( 'Algo salió mal...' ) ; 
//         console . dir ( err ) ; 
//         return ; 
//     } 
//     console . log ( datos ) 
// });

module.exports = {
    totalLinks,
    uniqueLinks,
    brokenLinks
    
}