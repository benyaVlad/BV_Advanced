//Створіть функцію getRandomArray(length, min, max) – яка повертає масив
// випадкових цілих чисел. У функції є параметри: length - довжина масиву,
// min – мінімальне значення цілого числа, max – максимальне значення цілого числа.


function getRandomArray(length, min, max) {
    const randomArray = Array.from({length});
    return randomArray.map(() => Math.round(Math.random() * (max - min) + min));
}
const usersRandomArray = getRandomArray(20, 1, 50);
document.writeln(`Завдання №1: ${usersRandomArray}</br>`);



//Створіть функцію getAverage(...numbers) – яка рахує середнє
// арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ.


function getAverage(...numbers) {
    const integerNumbers = numbers.filter( number => Number.isInteger(number));
    return average = integerNumbers.reduce((accumulator, currentValue) =>
        accumulator + currentValue) / integerNumbers.length;
}
const  getUsersAverage = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
document.writeln(`Завдання №3: ${getUsersAverage}</br>`);



// Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа
// передані як аргументи функції


function  filterEvenNumbers(...numbers) {
    return evenNumbers = numbers.filter( number => number % 2 !== 0);
}
const usersEvenNumbers = filterEvenNumbers(1, 2, 3, 4, 5, 6);
document.writeln(`Завдання №5: ${usersEvenNumbers}</br>`);


// Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість
// чисел більших 0


function countPositiveNumbers(...numbers) {
    const positiveNumbers = numbers.filter( number => number > 0);
    return positiveNumbers.length;
}
const usersPositiveNumbers = countPositiveNumbers(1, -2, 3, -4, -5, 6);
document.writeln(`Завдання №6: ${usersPositiveNumbers}</br>`);


// Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві
// та залишить тільки ті, які діляться на ціло на 5


function getDividedByFive(...numbers) {
    return specialNumbers = numbers.filter( number => number % 5 === 0);
}
const dividedByFive = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
document.writeln(`Завдання №7: ${dividedByFive}</br>`);


//Створіть функцію divideByThree(word), яка розбиває кожне слово на
// умовні склади по 3 букви.Якщо букв менше трьох – не розбиває.
// Пробіли завжди видаляються. Рядок приводится до нижнього регістру.


function divideByThree(word, partLength) {
    let part = [];
    for (let i = 0; i < word.length; i += partLength) {
        part.push(word.toLowerCase().substring(i, i + partLength));
    }
    return part;
}
document.writeln(`Завдання №9: ${divideByThree('Футуристичний', 3)}`)

