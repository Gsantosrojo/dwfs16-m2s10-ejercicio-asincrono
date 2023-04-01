const promesa1 =new Promise((resolve,reject) => {
    setTimeout(() =>{
        let correcto = true;

        if(correcto){
            resolve("Promesa cumplida")
        } else{
            reject("Promesa rechazada")
        }
    }, 3000);
});

promesa1.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error)
});