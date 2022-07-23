import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

//console.log("Creating a starting balance");
const initBal = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(initBal);
console.log("Hello, Alice and Bobs!");

//console.log("Launching...");
const ctcAlice = accAlice.contract(backend);

console.log("Creating new Bobs");


const allTheBobs = [];


const startBobs = async () => {
  const newBob = async (who) => {
    const acc = await stdlib.newTestAccount(initBal);
    const ctc = acc.contract(backend, ctcAlice.getInfo());
    allTheBobs.push(acc.getAddress());
  };

  await newBob('Bob1');//this creates a new Bob, with the starting balance and add it to the array
  await newBob('Bob2');
  await newBob('Bob3');
  await newBob('Bob4');
  await newBob('Bob5');

  console.log(allTheBobs);
  console.log("Thats it goodbye");
};


await ctcAlice.p.Alice({
  //Lets define ready, which is Alice interact object
  getset: () => {
    console.log("Alice is now ready");
    startBobs();
  },
});


