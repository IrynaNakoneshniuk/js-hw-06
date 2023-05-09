// # Задача 3

// Необхідно створити функцію, яка приймає будь-яку кількість аргументів (чисел) і
// повертає максимальне значення серед них. Аргументи можуть бути передані як
// окремими значеннями, так і в масиві.


const findMax=function(...args) {
    let tmpArray=[];
    args.forEach(element=>Array.isArray(element)?tmpArray=[...element,...tmpArray]:
    tmpArray.push(element));
    return Math.max(...tmpArray);
}

console.log(findMax(1, 4, 2, 8, 5)); // поверне 8
console.log(findMax([1, 4, 2], 8, 5)); // поверне 8
console.log(findMax(1, 4, [2, 8, 5])); // поверне 8