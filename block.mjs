import pkg from 'crypto-js';
const { SHA256 } = pkg;

export class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previoushash = previousHash;
        this.hash = "hello";
    }

    calculateHash(){
        return SHA256(this.index+this.previoushash+this.timestamp+JSON.stringify(this.data)).toString();
    }
}