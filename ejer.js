const arr = [1, 2, 3, 'c4', 4, 'asd', 'zxcz', 4, 6, 8];
const isNumber = arr.filter(number => !isNaN(number));
console.log(isNumber);


const originalObj = [{
    name: "anibal", lastName: "perez", age: 23
}, {
    name: "manuel", lastName: "garcia", age: 30
}, {
    name: "anabela", lastName: "gutierrez", age: 15
}, {
    name: "emiliano", lastName: "perez", age: 40
}]
console.log(originalObj);

let copyObj = [...originalObj]
copyObj.push({ name: "ana", lastName: "ledesma", age: 55 })
copyObj = copyObj.filter(({ lastName }) => lastName === "ledesma").map(({ name }) => { return name });
console.log(copyObj);

let anotherCopyObj = [];
anotherCopyObj = [...originalObj]
anotherCopyObj.push({ name: "ana", lastName: "ledesma", age: 55 })
anotherCopyObj = anotherCopyObj.filter(({ lastName, age }) => lastName === "perez" && age > 25).map(({ name }) => { return name });
console.log(anotherCopyObj);