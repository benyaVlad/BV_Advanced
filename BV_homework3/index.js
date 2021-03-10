//Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить
// найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8


const getMaxNumber = (number) => Math.max(... Array.from(String(number)).map((symbol) => Number(symbol)));
const userNumber = 123483682;
const getUsersMaxNumber = getMaxNumber(userNumber);
document.writeln(`Функція №1: ${userNumber} => ${getUsersMaxNumber}</br>`);


//Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);


const firstCharUpperCase = function (str){
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
const userName = 'vLaDisLaV';
const firstUsersCharUpperCase = firstCharUpperCase(userName);
document.writeln(`Функція №3: ${userName} => ${firstUsersCharUpperCase}</br>`);


//Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
// (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805


const getNetProfit = function (profit){
    const tax = 0.195;
    return profit - profit * tax;
}
const salary = 15500;
const getFromSalaryNetProfit = getNetProfit(salary);
document.writeln(`Функція №4: ${salary} => ${getFromSalaryNetProfit}</br>`);


//Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5


function getRandomNumber(min, max) {
    topNumber = Math.ceil(min);
    botNumber = Math.floor(max);
    return Math.floor(Math.random() * (topNumber - botNumber + 1)) + botNumber;
}
const firstNumber = 1;
const secondNumber = 10;
let getUsersRandomNumber = getRandomNumber(firstNumber, secondNumber);
document.writeln(`Функція №5: [${firstNumber};${secondNumber}] => ${getUsersRandomNumber}</br>`);


//Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
// Приклад: countLetter("а", "Асталавіста") -> 4


function countLetter(word, letter){
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if (word[i].toLowerCase() === letter.toLowerCase()){
            count++
        }
    }
    return `Буква "${letter}" в слові "${word}" з'являється ${count} раз(-и)`;
}
const usersCountLetter = countLetter( 'Аквалангіст','а');
document.writeln(`Функція №6: ${usersCountLetter} </br>`);


//Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"


function deleteLetters(letterStr, sentence) {
    const newSentence = sentence.replaceAll(letterStr, '');
    return newSentence;
}
const deleteUsersLetter = deleteLetters('б', 'блаблабла');
document.writeln(`Функція №9: Видалити всі літери "б" зі слова "блаблабла" => ${deleteUsersLetter}`);