const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};


/*
Створіть функцію getMyTaxes.call(country, salary) -> number;
– яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.
Функція повинна викликатись через call та працювати з даними через this
 */

getMyTaxes = function(salary) {
    return this.tax * salary;
}
console.log (`Податок `, getMyTaxes.call(ukraine, 2000));



/*
Створіть функцію getMiddleTaxes.call(country) -> number; – яка
рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні.
(tax * middleSalary). Функція повинна викликатись через call та працювати
з даними через this
 */


getMiddleTaxes = function(country) {
    return this.middleSalary * this.tax;
}
console.log (`Середній показник податків `, getMiddleTaxes.call(ukraine));



/*
Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує,
скільки всього податків платять IT-спеціалісти у кожній країні.
(tax * middleSalary * vacancies). Функція повинна викликатись через call та
працювати з даними через this
 */


getTotalTaxes = function(country) {
    return this.tax * this.middleSalary * this.vacancies;
}
console.log(`Всього податків `, getTotalTaxes.call(ukraine));



/*
Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду:
{ salary: number, taxes: number, profit: number } кожні 10 секунд. Значення
salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes –
розраховується в залежності від вибраної країни та значення salary
profit = salary - taxes;
 */

getMySalary = function(country) {
    const minSalary = 1500;
    const maxSalary = 2000;
    setInterval(() => {
        mySalary = {};
        mySalary.randomSalary = Math.floor(Math.random() * (maxSalary - minSalary) + minSalary);
        mySalary.taxes = Math.floor(this.tax * mySalary.randomSalary);
        mySalary.profit = mySalary.randomSalary - mySalary.taxes;
        console.log(mySalary);
    }, 10000);
}
getMySalary.call(ukraine);
