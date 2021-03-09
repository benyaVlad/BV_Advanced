const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


//Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
// У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]]


function getStudentsPairs (students){
    let studentsMale = [students[0], students[1], students[4]];
    let studentsFemale = [students[2], students[3], students[5]];
    let studentsPairs = [];
    for (let i = 0; i < studentsMale.length; i++){
        studentsPairs[i] = [studentsMale[i], studentsFemale[i]];
    }
    return studentsPairs;
}
let pairs = getStudentsPairs(students);
console.log(pairs)


//Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
//Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]


function getStudentsThemes (pairs, themes){
    let studentsPairsThemes = [];
    themes = [themes[1], themes[0], themes[2]];
    for (let i = 0; i < pairs.length; i++){
        studentsPairsThemes[i] = [pairs[i], themes[i]];
    }
    return studentsPairsThemes;
}
let studentsThemes = getStudentsThemes(pairs, themes);
console.log(studentsThemes);


//Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]


function getStudentsMarks (students, marks){
    let studentMarks = [];
    for ( let i = 0; i < students.length; i++){
        studentMarks[i] = [students[i], marks[i]];
    }
    return studentMarks;
}
let studentsProgress = getStudentsMarks(students, marks);
console.log(studentsProgress);


//Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив):
// [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]


function getPairsRandomMarks (studentsThemes, marks){
    let pairsMarks = [];
    for (let i = 0; i < studentsThemes.length; i++){
        pairsMarks[i] = [studentsThemes[i], marks[Math.floor(Math.random()*marks.length)]]
    }
    return pairsMarks;
}
let pairsProgress = getPairsRandomMarks(studentsThemes, marks);
console.log(pairsProgress);