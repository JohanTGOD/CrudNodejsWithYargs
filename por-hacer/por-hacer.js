const fs = require('fs');


let listadoPorhacer=[];


const crear = (description)=>{

    cargarDB();
    let porhacer = {

        description,
        completado:false

    };

    listadoPorhacer.push(porhacer)
    guardarDB();

    return porhacer
}

const cargarDB= ()=>{

    try {
        listadoPorhacer = require('../db/dats.json');
    } catch (error) {
        listadoPorhacer=[];
    }

        

}

const guardarDB = ()=>{

    

    let data = JSON.stringify(listadoPorhacer);
    fs.writeFile('db/dats.json',data,(err)=>{

        if (err) {
            throw new Error("No se pudo grabar",err)
        }
    });

}

const getListado=()=>{

    cargarDB();
    return listadoPorhacer;

}

const actualizar = (description,completado = true)=>{

    cargarDB();

    //esta variable bsuca dentro de todo el arreglo la descripcio, si no lo encuentra poene un -1
    //si lo encuentra cualquier otro numero
    let index = listadoPorhacer.findIndex(aliasJohan=>{

        return aliasJohan.description === description;
    })

    if (index>=0) {
        listadoPorhacer[index].completado= completado;
        guardarDB();
        return true
    }
    else{

        return false
    }

}


const eliminar = (descripcion)=>{

    cargarDB();
    //esta variable bsuca dentro de todo el arreglo la descripcio, si no lo encuentra poene un -1
    //Excluye el dato por lo que la nuevo arreglo va a ser mas pequeño o mas grande
    
    
    let nuevoListado = listadoPorhacer.filter(alias=>{
        return alias.description !==descripcion;
    })

    if(nuevoListado.length=== listadoPorhacer.length){
       return false
    }else{
        
        listadoPorhacer=nuevoListado;
        guardarDB();
        return true
    }



}







module.exports={
    crear,
    getListado,
    actualizar,
    eliminar
};