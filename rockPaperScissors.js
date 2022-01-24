const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv



let playerToss = argv.move;


let computerTossOptions = ['rock', 'paper', 'scissors'];

let computerToss = computerTossOptions[getRandomInt(3)];

console.log(`Player plays ${playerToss}!`);
console.log(`Computer plays ${computerToss}!`)


if(playerToss === computerToss){
  console.log("Its a tie!")
}else if(playerToss === 'rock' && computerToss === 'scissors' || (playerToss === 'paper' && computerToss === 'rock') || (playerToss === 'scissors' && computerToss === 'paper')){
  console.log("Player Wins!")
}else{
  console.log("Computer Wins!")
}







function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}