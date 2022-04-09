/**
 * Escribir una funcion que reciba dos parametros
 * Se debe retornar true si ambos parametros son iguales 
 * ya sea por tipo o valor
 */

const isEqualValues = (a, b) => {
    return a === b;
}

console.log(' Function isEqualValues :');
console.log(isEqualValues(2, 3));
console.log(isEqualValues(3, 3));
console.log(isEqualValues(1, "1"));
console.log(isEqualValues("10", "10"));


/**
 * Escribir una funcion que reciba un parametro
 * Debiendo retornar el tipo de parametro
 */

const isParamType = (a) => {
    return typeof (a);
}

console.log(' Function isParamType :');
console.log(isParamType(2));
console.log(isParamType({}));
console.log(isParamType("1"));
console.log(isParamType([2, 3, 4]));
console.log(isParamType(false));

/**
 * Escribir una funcion que reciba ser parametros y realice la siguiente operacion
 * suma de a + b, el resultado una diferencia con c, de ese resultado, una multiplicacion con d
 * con ese resultado, una divisiion con e y por ultimo la potencia elevado a la f
 */
const parameterSum = (a, b, c, d, e, f) => {
    return (((((a + b) - c) * d) / e) ** f)
}

console.log(' Function parameterSum :');
console.log(parameterSum(6, 5, 4, 3, 2, 1));
console.log(parameterSum(6, 2, 1, 4, 2, 3));
console.log(parameterSum(2, 3, 6, 4, 2, 3))

/**
 * Funcion que recibi dos parametros (text y flag). 
 * Un param. flag es igual a "start" y y debe mostrar los primeros tres caracteres de text
 * En caso de venir "end" em el param. flag, debe mostrar los ultimos tres caracteres de text
 */

const descriptText = (text, flag = "start") => {
    flag = flag.toLocaleLowerCase();
    if (flag === "start") return (text.substr(0, 3))
    if (flag === "end") return (text.substr(-3));
}

console.log("Descrip Text Function :");
console.log(descriptText("abcdefg", "start"));
console.log(descriptText("abdcefg", "end"));
console.log(descriptText("ab", "end"));
console.log(descriptText("abcdefg"));


/**
 * Funcion que recibi dos parametros (text y flag). 
 * Un param. flag es igual a "start" y y debe mostrar los primeros tres caracteres de text
 * En caso de venir "end" em el param. flag, debe mostrar los ultimos tres caracteres de text
 */

const descriptTextName = (fullname, flag = "") => {
    const [first, ...rest] = fullname.split(' ');
    if (!flag || !rest.length) return fullname;
    return flag === "lastname" ? rest.join(' ') : first;
}

console.log("Descrip Text Function with name or fullname:");
console.log(descriptTextName("jhon williams Smith", "firstaneme"));
console.log(descriptTextName("jhon williams Smith", "lastname"));
console.log(descriptTextName("jhon williams Smith"));
console.log(descriptTextName("jhon", "lastname"));

/**
 * 
 * @param {num} number 
 * @returns bool
 */

const isPar = number => {
    return number % 2 === 0;
}
console.log("Function is Par: ")
console.log(isPar(8));
console.log(isPar(-10));
console.log(isPar(7));
console.log(isPar(-41));
console.log(isPar(0));

/**
 * 
 * @param {a, b} string
 * @returns number
 */

const getStringsQuantity = (a, b) => {
    return b.match(new RegExp(a, 'gi')).length;
}

console.log("Function getStringsQuantity: ")
console.log(getStringsQuantity("A", "quantas veces el valor de 'A' ocurre aqui"));
console.log(getStringsQuantity("as", "cuantas veces el valor de A ocurre aqui"));
console.log(getStringsQuantity("q", "Quantas veces el valor de A, ocurre Aqui"));

/**
 * Escribir una funcion que reciba dos parametros (un objeto y un string)
 * Retornar true si el string está dentro de una propiedad del objeto.
 * Caso contrario, retornar false
 */


const isStringContainer = (obj, str) => {
    if (obj.hasOwnProperty(str)) return true;
    return false;
}

console.log(' Function isStringContainer :');
console.log(isStringContainer({ a: 1, b: 2, c: 3 }, "b"));
console.log(isStringContainer({ x: "a", y: "b", z: "c" }, "a"));
console.log(isStringContainer({ x: "a", y: "b", z: "c" }, "z"));


/**
 * 
 * @param {a} array
 * @returns array
 */


const arrayTruncate = (arr) => {
    return arr.slice(3);
}

console.log(' Function arrayTruncate :');
console.log(arrayTruncate([1, 2, 3, 4, 5]));
console.log(arrayTruncate([1, 2, 3, 4, 5, 6]));
console.log(arrayTruncate([1, 2, 3]));
console.log(arrayTruncate([1]));
console.log(arrayTruncate([1, 2, 3, 4]));

/**
 * 
 * @param {min,max} num, num
 * @returns number
 */
//Random number in a user set interval;

const randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInRange(10, 500));

/**
 * 
 * @param {a, b} arr, num/bool
 * @returns array
 */

const filteredNumbers = (a, b) => {
    return a.filter((el) => el != b);
}

console.log("Funcion filteredNumbers: ")
console.log(filteredNumbers([1, 2, 3, 4], 2))
console.log(filteredNumbers([1, 3, 4, 1], 1));
console.log(filteredNumbers([1, 1, 1, 3, 4], 1));
console.log(filteredNumbers([4, 2, 4, 5, 6], 7));
console.log(filteredNumbers([4, 2, false, 5, 6], false));


/**
 * 
 * @param {a, b} arr, string
 * @returns array
 */

const sortFunction = (a, order = "asc") => {
    return order === "asc" ? a.sort() : a.sort().reverse();
}

console.log("Funcion sortFunction");
console.log(sortFunction([2, 3, 4, 1], "asc"));
console.log(sortFunction([6, 2, 8, 1, 5], "desc"));
console.log(sortFunction(["uva", "manzana", "naranja"], "asc"));
console.log(sortFunction(["t", "b", "s", "z", "m"]));
console.log(sortFunction(["t", "b", "s", "z", "m"], "desc"));

/**
 * 
 * @param {a, b} arr, arr
 * @returns array
 */

const arrConcat = (a, b) => {
    return [...new Set([...a, ...b].sort())];
}

console.log("Funcion arrConcat");
console.log(arrConcat([2, 3, 4, 1], [3, 4, 5]));
console.log(arrConcat([6, 2, 8, 1, 9], [8, 9]));
console.log(arrConcat(["uva", "manzana", "naranja"], ["manzana", "naranja", "pera", "mango"]));
console.log(arrConcat(["t", "b", "s", "z"], ["t", "z", "s", "m"]));


/**
 * 
 * @param {a, b} arr, num
 * @returns array
 */

//Una funcion que reciba un array y un numero y devuelva
//La suma de los valores del array mayores al parametro b

const arrReduceGreaterThan = (a, b) => {
    return a.sort().reduce((total, i) => (i > b) ? total + i : 0, 0);
}

console.log("Funcion arrReduceGreaterThan");
console.log(arrReduceGreaterThan([2, 3, 4, 1], 3));
console.log(arrReduceGreaterThan([6, 2, 8, 1, 9], 9));
console.log(arrReduceGreaterThan([4, 5, 6, 1, 3, 2, 9, 7], 3));
console.log(arrReduceGreaterThan([1, 2, 3, 4, 5, 6], 5));


/**
 * 
 * @param {min, max} num, num
 * @returns array
 */

//Una funcion que reciba un array y un numero y devuelva
//La suma de los valores del array mayores al parametro b

const arrFilledFromMinToMax = (min, max) => {
    return Array(max - min + 1).fill(min).map((prev, next) => prev + next);
}

console.log("Funcion arrFilled: ");
console.log(arrFilledFromMinToMax(1, 3));
console.log(arrFilledFromMinToMax(5, 9));
console.log(arrFilledFromMinToMax(2, 3));
console.log(arrFilledFromMinToMax(1, 5));


/**
 * 
 * @param {arr obj} 
 * @returns array
 */

//Una funcion que reciba un array y un numero y devuelva
//La suma de los valores del array mayores al parametro b

const cityReducer = (arr) => {
    return arr.map(el => `${el.addres}, ${el.city} - ${el.state}, ${el.zipcode}, ${el.country}`)
}

console.log("Funcion cityReducer: ");
console.log(cityReducer([{
    addres: "Av. Rivadavia 8000",
    city: "CABA",
    state: "Buenos Aires",
    zipcode: "1615",
    country: "AR",
}, {
    addres: "Av. America 500",
    city: "Saenz Peña",
    state: "3 de Febrero",
    zipcode: "1676",
    country: "AR",
}, {
    addres: "Principal Avenue 123",
    city: "Miami",
    state: "Florida",
    zipcode: "11035",
    country: "USA",
}]));


/**
 * 
 * @param {key, value} arr, arr
 * @returns obj
 */

const objectKeyValueFromArray = (key, val) => {
    return Object.fromEntries(key.map((el, i) => [el, val[i]]))
}

console.log("Funcion onjKeyValueFromArray: ");
console.log(objectKeyValueFromArray(["a", "b", "c", "d"], [1, 5, 3, 4]));

/**
 * 
 * @param {date, date} 
 * @returns bool
 */

const _isDateEqual = (date1, date2) => {
    return (date1.toString() === date2.toString());
}

console.log("Funcion _isDateEqual: ");
console.log(_isDateEqual(
    new Date('2022/04/08 06:30:00'),
    new Date('2022/04/08 06:29:00'),
));
console.log(_isDateEqual(
    new Date('2022/04/08 06:30:00'),
    new Date('2022/04/08 06:30:00'),
));
console.log(_isDateEqual(
    new Date('2021/04/08 06:30:00'),
    new Date('2022/04/08 06:30:00'),
));


const differenceDay = (date1, date2) => {
    return ((date2 - date1) / (1000 * 3600 * 24))
}

console.log("Funcion differenceDay: ");
console.log(differenceDay(
    new Date('2022/04/08 06:30:00'),
    new Date('2022/04/08 06:29:00'),
));
console.log(differenceDay(
    new Date('2022/04/08 06:30:00'),
    new Date('2022/04/08 06:30:00'),
));
console.log(differenceDay(
    new Date('2021/04/08 06:30:00'),
    new Date('2022/04/08 06:30:00'),
));