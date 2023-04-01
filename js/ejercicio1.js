const saludar = (nombre, callback) => {
    let nombreMayusculas = nombre.toUpperCase()

setTimeout(() => {
    callback(nombreMayusculas);
    }, 4000);
};

const imprimeNombre =(nombreEnMayusculas) => {
    console.log(nombreEnMayusculas)
};

saludar("gerardo", imprimeNombre);

console.log("final");
// imprimeNombre("gerardo")