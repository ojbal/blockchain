const Block = require('./block');

const genesis = Block.genesis();
const fooBlock = Block.mineBlock(Block.genesis(), 'foobar');

console.log(genesis.toString());

for (let i= 1; i <= 10; i++){
    
console.log(fooBlock.toString());
for(let i= 1; i <= 10; i++){
console.log('Brake');
}
}




/*
ciclo para crear bloques deacuerdo con el limite establecido en el for

for (let i =1; i<= 10; i++){
    block = new Block(Date.now(),"0".repeat(64),"0".repeat(64),`Data${i}`)
    console.log(block.toString());
}
*/

//prueba de datos
/*const block = new Block('12-5-2024',"0".repeat(64),"0".repeat(64),"Datos2 a mostrar");

console.log(block.toString());

console.log(Block.genesis().toString());*/