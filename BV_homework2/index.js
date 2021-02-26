let firstNumberN = +prompt("Введіть перше ціле число");
let secondNumberM = +prompt("Введіть друге ціле число");

if (Number.isInteger(firstNumberN) && Number.isInteger(secondNumberM)) {
    let sum = 0;
    let checkEvenNumbers = confirm("Чи бажаєте пропускати парні числа?");
    if (checkEvenNumbers) {
        for(let i = firstNumberN; i <= secondNumberM; i++){
            if (i % 2 != 0) {
                sum += i;
            }
        }
       alert('Сума чисел дорівнює : ' + (sum));
    } else {
        for(let i = firstNumberN; i <= secondNumberM; i++){
            sum += i;
        }
    }
    alert ('Сума чисел дорівнює : ' + (sum));
} else {
    alert("Введіть ЦІЛЕ число!!!")
}
