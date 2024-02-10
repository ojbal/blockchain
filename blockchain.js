

const Block = require('./block');


class Blockchain{
    constructor(){
        this.chain = [Block.genesis()];
    
    }
        getLastBlock(){
            return this.chain[this.chain.length -1]
        }

        addBlock(data){
            const block = Block.mineBlock(this.getLastBlock,data)
            this.chain.push(block);
            return block;
        }

        isValidaChain(chain){
            if(JSON.stringify(chain[0])!== JSON.stringify(Block.genesis())){
                return false
            }
            for( let i=1 ; i < chain.length; i++){
                const block = chain[i];
                const lasBlock = chain[i -1];
                if((block.lastHash !== lasBlock.hash) || (block.hash !== Block.blocHash(block))){
                    return false;
                }
            }
            return true;
        }
    }


module.exports = Blockchain;