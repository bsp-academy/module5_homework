let input = prompt ("Введите значение");
let num = +input;

if (typeof num === "number" && !isNaN(num)) {
    if (num % 2 === 0) {
        console.log ("Число " + num + " четное");
    } else {
        console.log ("Число " + num + " нечетное");
    }
} else {
    console.log ("Упс, кажется вы ошиблись");
}
