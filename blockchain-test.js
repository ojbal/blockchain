const Blockchain = require('./blockchain');
const Block = require('./block');

describe('blockchain',()=>{
    let bc;
    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
    })

    it('Start the genesis Block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    })

    it ('ad the new block',() => {
        const data = "khjdsbdcdc";
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length -1].data).toEqual(data);
    });

    it('Validate a valid chain',()=>{
        bc2.addBlock('foo');
        expect(bc2.isValidChain(bc2.chain)).toBe(true);
    });
    it('Validade a chain with a corrupt genesis block',()=>{
        bc2.chain[0].data = 'ydbvsjcscsdcc';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });
    it('invalidate a corrupt chain', ()=>{
        bc2.addBlock('foo');
        bc2.chain[1].data = 'bdsbjhsdbsvd';
        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });
});