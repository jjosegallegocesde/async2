let datosUsuario={
    nombre:"juan@gmail.com",
    password:"admin123"
}

function conectarConNetflix(datosUsuario){
    console.log("Iniciando peticion...(esperando)");
    
    let promesa= new Promise(function(resolve,reject){

        setTimeout(function(){
            if(datosUsuario.password=="admin123"){
    
                resolve("exito")
            }else{
                reject("falla")
            }
        },5000)

    })

    return promesa;  
}


async function procesarPeticion(datosUsuario){

    try{

        let respuesta= await conectarConNetflix(datosUsuario)
        console.log(respuesta);

    }catch(error){
        console.log(error);
    }

}

procesarPeticion(datosUsuario)
