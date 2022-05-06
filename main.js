import { Block } from "./block.mjs";
import { Blockchain } from "./blockchain.mjs";
import {Transaction} from "./transaction.mjs"

let DEGX = new Blockchain
// DEGX.addBlock(new Block(1, "12/12/2022", {amount: 4}))
// DEGX.addBlock(new Block(2, "13/12/2022", {amount: 10}))
// DEGX.addBlock(new Block(2, "14/12/2022", {amount: 15}))

DEGX.createTransaction(new Transaction('address1', 'address2', 100))
DEGX.createTransaction(new Transaction('address2', 'address1', 50))

DEGX.minePendingTransactions("test");
console.log(DEGX.getBalanceOfAddress('test'));
DEGX.minePendingTransactions("test");
console.log(DEGX.getBalanceOfAddress('test'));

