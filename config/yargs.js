const argv= require('yargs')
            .command('crear','Crear un elemento por hacer',{
                description:{
                    demand:true,
                    alias:'d',
                    desc:'Descripcion de la tarea por hacer'
                }
            })
            .command('actualizar','Actualiza el estado completo de una tarea',{
                
                    description:{
                        demand:true,
                        alias:'d',
                        desc:'Descripcion de la tarea por hacer'
                    },
                    completado:{
                        default:true,
                        alias:'c',
                        desc:'Marca como completado o pendiente la tarea'
                    }
                
            })
            .command('borrar','Elimina una tarea',{
                
                description:{
                    demand:true,
                    alias:'d',
                    desc:'Descripcion de la tarea por eliminar'
                },
          
            
        })
            .help()
            .argv;



module.exports={
    argv
}