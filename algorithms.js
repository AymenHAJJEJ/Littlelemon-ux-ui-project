// for(var i=0; i<10; i++) {
//     console.log(i);
//     i = i + 3; 
// }
    
// console.log("outside of the loop " + i);

// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: ";
    
// if(isSunny) {
//     whatToBring += "sunglasses, ";
// }
// if(temperature < 50) {
//     whatToBring += "a coat, ";
// }
// if(isRaining) {
//     whatToBring += "an umbrella, ";
// }
// whatToBring += "and a smile!";

// console.log(whatToBring);

// for(var i=10; i>0; i--) {
//     if(i != 2) {
//         console.log(i);
//     } else {
//         console.log("ignition!");
//     }
// }
// console.log("liftoff!");

// var countPositives = 0;
// var numbers = [3, 4, -2, 7, 16, -8, 0];

// for (var i=0; i<numbers.length; i++){
//     if (numbers[i] > 0){
//         countPositives++;
//     }
// }
// console.log("there are " + countPositives + " positive values");

// var x = 5;

// function setX(newValue) {
//     x = newValue; 
// }
// console.log(x);
// setX(15);
// console.log(x);

// var x = 5;

// function addToX(amount) {
//     return x + amount;
//     console.log("hello there");
// }
// console.log(x);
// var result = addToX(-10);
// console.log(result);
// console.log(x);

// function isPal(arr) {
//     for(var left=0; left<arr.length/2; left++) {
//         var right = arr.length-1-left;
//         if(arr[left] != arr[right]) {
//             return "Not a pal-indrome!";
//         }
//     }
//     return "Pal-indrome!";
// }
    
// var result1 = isPal( [1, 1, 2, 2, 1] );
// console.log(result1);
    
// var result2 = isPal( [3, 2, 1, 1, 2, 3] );
// console.log(result2);


// function reverse(arr){
//     var start = 0;
//     var end = arr.length-1;
//     while (start < end){
//         var temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
//     return arr;
// }

// var rev = reverse(["a", "b", "c", "d", "e", "f", "g", "h"]);
// console.log(rev);

// function d6() {
//     var roll = Math.random();
//     roll = Math.ceil(roll * 6);
//     return roll;
// }

// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);


// function oracle(lifesAnswers){
//     var choose = lifesAnswers[Math.floor(Math.random()*lifesAnswers.length)];
    
//     return choose;
// }
// var o1 = oracle(lifesAnswers = [
//     "It is certain.",
//     "It is decidedly so.",
//     "Without a doubt.",
//     "Yes – definitely.",
//     "You may rely on it.",
//     "As I see it, yes.",
//     "Most likely.",
//     "Outlook good.",
//     "Yes.",
//     "Signs point to yes.",
//     "Reply hazy, try again.",
//     "Ask again later.",
//     "Better not tell you now.",
//     "Cannot predict now.",
//     "Concentrate and ask again.",
//     "Don't count on it.",
//     "My reply is no.",
//     "My sources say no.",
//     "Outlook not so good.",
//     "Very doubtful."
// ]
// );
// console.log("Oracle can you help me : " + o1);

// var monster = {
//     id: 1,
//     name: "Bulbasaur",
//     types: ["poison", "grass"]
// };

// console.log(monster.name);
// console.log(monster.types[1]);

// var pokémon = [
//     { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
//     { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
//     { "id": 9,   "name": "Blastoise",  "types": ["water"] },
//     { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
//     { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
//     { "id": 23,  "name": "Ekans",      "types": ["poison"] },
//     { "id": 24,  "name": "Arbok",      "types": ["poison"] },
//     { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
//     { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
//     { "id": 52,  "name": "Meowth",     "types": ["normal"] },
//     { "id": 63,  "name": "Abra",       "types": ["psychic"] },
//     { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
//     { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
//     { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
//     { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
//     { "id": 98,  "name": "Krabby",     "types": ["water"] },
//     { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
//     { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
//     { "id": 133, "name": "Eevee",      "types": ["normal"] },
//     { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
//     { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
//     { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
//     { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
// ];

// for(var i=0; i<pokémon.length; i++) {
//     if(pokémon[i].id > 99) {
//         console.log(pokémon[i].name);
//     }
// }

// for(var i=0; i<pokémon.length; i++) {
//     if(pokémon[i].id % 3 == 0) {
//         console.log(pokémon[i]);
//     }
// }

// for(var i=0; i<pokémon.length; i++) {
//     if(pokémon[i].types.length > 1) {
//         console.log(pokémon[i]);
//     }
// }

// for(var i=0; i<pokémon.length; i++) {
//     if(pokémon[i].types.length == 1 && pokémon[i].types == "poison") {
//         console.log(pokémon[i].name);
//     }
// }

// for(var i=0; i<pokémon.length; i++) {
//     if(pokémon[i].types[1] == "flying") {
//         console.log(pokémon[i].types[0]);
//     }
// }

// for(var i=0; i<pokémon.length; i++) {
//     if(pokémon[i].types.length == 1 && pokémon[i].types == "poison") {
//         var first = pokémon.name = "Ekans";
//         var second = pokémon.name = "Arbok";
//         var temp = second;
//         second = first;
//         first = temp;
//         console.log(pokémon[i].name);
//     }
// } 

// function isPresent2d(arr2d, value){
//     for (var i=0; i<arr2d.length; i++){
//         for (var j=0; j<arr2d[i].length; j++){
//             if (value == arr2d[i][j]){
//                 return true;
//             }
//             else{
//                 return false;
//             }
//         }
//     }
// }
// var isp = isPresent2d([ [2, 5, 8], [3, 6, 1], [5, 7, 7] ], 6);
// console.log(isp);


// function flatten(arr2d) {
//     var flat = [];
//     for (var i=0; i<arr2d.length; i++){
//         for (var j=0; j<arr2d[i].length; j++){
//             flat.push(arr2d[i][j]);
//         }
//     }
//     return flat;
// }
    
// var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
// console.log(result); 

