const Block = require('./block');

describe('block', ()=>{
    let data, lastBlock, block;
    beforeEach(()=>{
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);

    });
//test 1
    it('Set the data in block to match the input',()=>{
        expect(block.data).toEqual(data);
    })
// test 2
    it('Set the lastHash in Block to match the hash of the last Block',()=>{
        console.log(block.lastBlock)
        expect(block.lastHash).toEqual(lastBlock.hash);
    })
})