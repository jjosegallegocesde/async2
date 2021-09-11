let datosUsuario={
    nombre:"juan@gmail.com",
    password:"admin123"
}

function conectarConNetflix(datosUsuario,generarRespuesta){
    console.log("Iniciando peticion...(esperando)");
    setTimeout(function(){
        if(datosUsuario.password=="admin123"){

            generarRespuesta(200)
        }else{
            generarRespuesta(204)
        }
    },5000)
}

conectarConNetflix(datosUsuario,function(estado){
    if(estado==200){
        console.log("exito");
        descargarPelis(function(respuesta){
            console.log(respuesta)
        })

    }else{
        console.log("falla");
    }
})

function descargarPelis(generarRespuesta2){

    console.log("inicando proceso 2...");
    setTimeout(function(){

        generarRespuesta2("CATALOGO ON")


    },5000)

}