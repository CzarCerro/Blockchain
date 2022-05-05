import { Block } from "./block.mjs";
import { Blockchain } from "./blockchain.mjs";


let ExampleCoin = new Blockchain
ExampleCoin.addBlock(new Block(1, "12/12/2022", {amount: 4}))
ExampleCoin.addBlock(new Block(2, "12/12/2022", {amount: 10}))

console.log(JSON.stringify(ExampleCoin, null, 4));

