const { name } = require ("./information");
const cowsay = require ("cowsay");

console.log(cowsay.say({
    text : name,
}));