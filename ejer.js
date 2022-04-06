const arr = [1, 2, 3, 'c4', 4, 'asd', 'zxcz', 4, 6, 8];
let esNumero = arr.filter(number => !isNaN(number));
console.log(esNumero);


let pepe = [{
    nombre: "anibal", apellido: "perez", edad: 23
}, {
    nombre: "manuel", apellido: "garcia", edad: 30
}, {
    nombre: "anabela", apellido: "gutierrez", edad: 15
}, {
    nombre: "emiliano", apellido: "perez", edad: 40
}]
console.log(pepe);

let pepe2 = [...pepe]
pepe2.push({ nombre: "ana", apellido: "ledesma", edad: 55 })
pepe2 = pepe2.filter(({ apellido }) => apellido === "ledesma").map(({ nombre }) => { return nombre });
console.log(pepe2);

let pepe3 = [];
pepe3 = [...pepe]
pepe3.push({ nombre: "ana", apellido: "ledesma", edad: 55 })
pepe3 = pepe3.filter(({ apellido, edad }) => apellido === "perez" && edad > 25).map(({ nombre }) => { return nombre });
console.log(pepe3);
//console.log(pepe)