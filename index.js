const infos = require ("./information");
const cowsay = require ("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${infos.name} from ${infos.campus}`,
    e : "oO",
    T : "U "
}));