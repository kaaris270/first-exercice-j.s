/*let age = parseInt(prompt("entre un numero"));
if (age >= 18){
        console.log('felicitation')
}
else if (age = 70){
    console.log('t es vieux mashallah')
}
else{
    console.log('NOP')
}
/* let age = 8;
let vieux = 70;
if (age >= vieux){
    console.log('gratuit')
} else if (age >= 18){
    console.log ('ok')
} else {
    console.log("dehors")
}*/
let nom = prompt("votre nom");
let ageu = parseInt(prompt("votre age"));
if (ageu >= 18 && nom == 'Sofiane'){
    console.log('welcom')
}
else if (nom.length == ageu) {
    console.log('coincoincidence')
}
else if (nom == 'Paul'|| nom == 'Abby'){
    if (ageu > 30 && ageu < 50 ) {
        console.log('OK CA PASS')
    }
    else {
        console.log("bien vu")
    }
}
else{
    console.log('ziva')
}
//else if (ageu = 30 50)

