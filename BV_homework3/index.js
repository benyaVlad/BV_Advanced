let getMaxNumber = (number) => Math.max(... Array.from(String(number)).map((symbol) => parseInt(symbol)));
let userNumber = 123483682;
let getUsersMaxNumber = getMaxNumber(userNumber);
document.writeln(`Функція №1: ${userNumber} => ${getUsersMaxNumber}</br>`);


let firstCharUpperCase = function (str){
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
let userName = 'vLaDisLaV';
let firstUsersCharUpperCase = firstCharUpperCase(userName);
document.writeln(`Функція №3: ${userName} => ${firstUsersCharUpperCase}</br>`);


let getNetProfit = function (profit){
    let tax = 0.195;
    return profit - profit * tax;
}
let salary = 15500;
let getFromSalaryNetProfit = getNetProfit(salary);
document.writeln(`Функція №4: ${salary} => ${getFromSalaryNetProfit}</br>`);


function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let firstNumber = 1;
let secondNumber = 10;
let getUsersRandomNumber = getRandomNumber(firstNumber, secondNumber);
document.writeln(`Функція №5: [${firstNumber};${secondNumber}] => ${getUsersRandomNumber}</br>`);


function countLetter(word, letter){
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if (word[i].toLowerCase() === letter.toLowerCase()) count++;
    }
    return `Буква "${letter}" в слові "${word}" з'являється ${count} раз(-и)`;
}
let usersCountLetter = countLetter( 'Аквалангіст','а');
document.writeln(`Функція: №6: ${usersCountLetter} </br>`);


function deleteLetters(letter,word){
    const letterToLowerCase = letter.toLowerCase();
    const wordToLowerCase = word.toLowerCase();
    let newWord = '';
    for (let i = 0; i < wordToLowerCase.length; i++){
        if (wordToLowerCase[i] !== letterToLowerCase){
            newWord += wordToLowerCase[i];
        }
    }
    return `Видаляє літеру "${letter}" зі слова "${word}" => ${newWord}`;
}
const usersDeleteLetters = deleteLetters('b', "blablabla");
document.writeln(`Функція №9: ${usersDeleteLetters}`);

