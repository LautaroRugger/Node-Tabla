


const fs= require('fs');

const crearArchivo = async ( base = 5, listar = false, hasta = 10) =>{


try{

let salida =  '';
for(let m =1; m<=hasta; m++){ 
  
  salida += `${base} x ${ m} = ${base*m}\n`;
    
    }
    if (listar) { 
  console.log(salida);
   }
  
  fs.writeFileSync( `./salida/tabla-${base}.txt`, salida );
  
  return`tabla-${base}.txt creado`;

}  catch(err){
  throw err;
}
 }
    


module.exports = {
    crearArchivo
}











