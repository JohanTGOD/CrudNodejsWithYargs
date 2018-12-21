const  argv = require('./config/yargs').argv;
const crear = require('./por-hacer/por-hacer');
const color = require('colors');



let comando = argv._[0];
console.log("El comando es "+comando);
//genero este switch para cuando desplegue la aplicacion decida lo que quiero hacer
//Example node app (crear/listar/actualizar)
switch (comando) {
    case 'crear':
        let tarea = crear.crear(argv.description)
        console.log(tarea);

        
        break;
    case 'listar':

        let listar = crear.getListado();
        for(let cvbcvb of listar){
            console.log("=============Por Hacer==============".green);
            console.log(cvbcvb.description);
            console.log("estado ", cvbcvb.completado);
            console.log("=====================================".green);
        }
        console.log("Mostrar todas las tareas por hacer");
        console.log(listar);
        break;

    case 'actualizar':
        console.log("Actualiza una tarea por hacer");
        let actualziar = crear.actualizar(argv.description,argv.completado)
        console.log(actualziar);
        break;
    
    case 'borrar':
        console.log("Eliminar");
        let eliminar = crear.eliminar(argv.description);
        console.log("La eleminacion fue ",eliminar);

    default:
        console.log("Comando no reconcido");
        break;
}