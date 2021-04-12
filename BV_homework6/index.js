const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

/*Створіть функцію getSubjects(students[0] -->
["Math", "Algorithms", "Data science"] - яка повертає список
предметів для конкретного студента. Зверніть увагу – назву
предмету необхідно повертати з великої літери, а _ – замінити
на пробіл*/


function getSubjects(student){

    const subjectsArray = Object.keys(student.subjects);
    const newSubjectsArray = subjectsArray.map((item) => {
        return (item.charAt(0).toUpperCase() +
            item.slice(1)).replaceAll('_', ' ');
    });
    return newSubjectsArray;
}
console.log(getSubjects(students[0]));

/*Створіть функцію getAverageMark(students[0]) --> 3.79
– яка поверне середню оцінку по усім предметам для переданого студента
НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку.
Можна використовувати функції, написані у попередніх домашніх завданнях :)
 */


function getAverageMarks(student) {
    const marks = Object.values(student.subjects).flat(1);
    return (marks.reduce((a, b) => a + b)/ marks.length).toFixed(2);
};
console.log(getAverageMarks(students[0]));


/*Створіть функцію getStudentInfo(students[0]) -->
{ "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає
 інформацію загального виду по переданому студенту (вам знадобиться
 функція з попереднього завдання). ПОвинна бути виведена інформація:
 курс, ім'я, середня оцінка.
 */


function getStudentsInfo(student) {
    const infoList = {
        course: student.course,
        name: student.name,
        averageMark: getAverageMarks(student)
    }
    return  infoList;
}
console.log(getStudentsInfo(students[0]))



/*Ствроіть функцію getStudentsNames(students) -->
["Anton", "Tanya, "Victor"] – яка повертає імена студентів
у алфавітному порядку.*/


function getStudentsNames(students) {
    return students.map((student) => student.name).sort();
};

console.log(getStudentsNames(students));


/* Створіть функцію getBestStudent(students) --> "Anton"
– яка повертає кращого студента зі списку по показнику середньої оцінки.
*/


function getBestStudent(students) {
    let bestMark = 0;
    let studentName = '';

    students.forEach((student) => {
        const currentMark = getAverageMarks(student);
        if (bestMark < currentMark) {
            bestMark = currentMark;
            studentName = student.name;
        }
    });
    return studentName;
}
console.log(getBestStudent(students));

/*Створіть функцію calculateWordLetters("тест") -->
{ "т": 2, "е": 1, "с": 1 } – яка повертає об'єкт, в якому ключі
це букви у слові, а значення – кількість їх повторень.
*/

