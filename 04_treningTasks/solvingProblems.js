//------------- З А Д А Н И Е ------------------------------------------------------------------------------------------
// Необходимо реализовать функцию, которая при каждом вызове будет выводить следующее число Фибоначчи
// * Со звёздочкой - Реализовать задание без функции-помощника
// Требования: В скрипте не должно быть глобальных переменных; Допускается наличие максимум двух функций
// в основном коде (основная - fibonacci, и функция-помощник);
// Внутри функции может быть создано любое количество переменных и функций

//------------- Р Е Ш Е Н И Е ------------------------------------------------------------------------------------------
// Решение без *-------------------------------------------------------
function makeFibonacciFunction(firstNumber = 1, secondNumber = 0) {
  return () => {
    secondNumber += firstNumber;
    firstNumber = secondNumber - firstNumber;
    return secondNumber
  }
}
const fibonacci = makeFibonacciFunction()
// Решение со *----------------------------------------------------------
const fibonacciStar = ((firstNumber = 1, secondNumber = 0) => () => {
    secondNumber += firstNumber;
    firstNumber = secondNumber - firstNumber;
    return secondNumber;
})();
// Вывод в консоль--------------------------------------------------------
while (confirm('Проведем итерацию?')) {
    console.log(fibonacci(), fibonacciStar());
}

//------------- З А Д А Н И Е ------------------------------------------------------------------------------------------
// Пусть функция Palindrome (str) принимает передаваемый параметр str и возвращает строку true,
// если параметр является палиндромом (строка такая же, как вперед, так и назад),
// в противном случае возвращает строку false.
// Например: «racecar» в обратном направлении также означает «racecar».
// Знаки препинания и цифры не входят в строку.

//------------- Р Е Ш Е Н И Е ------------------------------------------------------------------------------------------
function Palindrome(str) {
    str = str.toLowerCase().match(/[a-z]/g).join('');
    const strReverse = str.split('').reverse().join('');
    return str === strReverse;
}
console.log(Palindrome("racecar"));

//------------- З А Д А Н И Е ------------------------------------------------------------------------------------------
// Попросите функцию FindIntersection(strArr) прочитать массив строк, хранящийся в strArr,
// который будет содержать 2 элемента: первый элемент будет представлять список разделенных запятыми чисел,
// отсортированных в порядке возрастания, второй элемент будет представлять второй список разделенных
// запятыми числа (также отсортированные). Ваша цель - вернуть разделенную запятыми строку, содержащую числа,
// которые встречаются в элементах strArr в отсортированном порядке. Если пересечения нет, вернуть строку false.

//------------- Р Е Ш Е Н И Е ------------------------------------------------------------------------------------------
function FindIntersection(strArr) {
    let result = [];
    const nums1 = strArr[0].split(', ');
    const nums2 = strArr[1].split(', ');

    let map = nums1.reduce((acc, i) => {
        acc[i] = acc[i] ? acc[i] + 1 : 1;
        return acc;
    }, {});

    for (let i = 0; i < nums2.length; i++) {
        const current = nums2[i];
        let count = map[current];
        if (count && count > 0) {
            result.push(+current);
            map[current] -= 1;
        }
    }

    result = result.reverse()
    for (let i = 0; i < result.length; i++) {
        const current = String(result[i]);
        result[i] = current.split('').reverse().join('')
    }

    if (result.length === 0) {
        return false
    } else {
        return `${result}`;
    }
}
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));

//------------- З А Д А Н И Е ------------------------------------------------------------------------------------------
// Пусть функция RomanNumeralReduction (str) прочитает str, которая будет строкой римских цифр в порядке убывания.
// Используемые числа: I для 1, V для 5, X для 10, L для 50, C для 100, D для 500 и M для 1000.
// Ваша программа должна возвращать то же число, что и str, используя меньший набор латинских букв. цифры.
// Например: если str равно «LLLXXXVVVV», это 200, поэтому ваша программа должна вернуть CC, потому что это
// кратчайший способ записать 200 с использованием римской системы счисления, указанной выше. Если строка дана
// в самой короткой форме, просто верните ту же самую строку.

//------------- Р Е Ш Е Н И Е ------------------------------------------------------------------------------------------
function RomanNumeralReduction(str) {
    const nums = {
    M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1,
    }

    const arr = str.split('')
    let intNum = 0;
    for (let i = 0; arr.length > i; i++) {
        if (nums[arr[i]]) intNum += nums[arr[i]]
    }

    let result = '';

    for (key in nums) {
        result += key.repeat(Math.floor(intNum/nums[key]));
        intNum %= nums[key];
    }

    result = result.split('').reverse().join('');
    return `${result}`;
}
console.log(RomanNumeralReduction("LLLXXXVVVV"));

//------------- З А Д А Н И Е ------------------------------------------------------------------------------------------
// Пусть функция EightQueens (strArr) прочитает strArr, который будет массивом, состоящим из положений восьми ферзей
// на стандартной шахматной доске 8x8 без других фигур на доске. Структура strArr будет следующей:
// ["(x, y)", "(x, y)", ...], где (x, y) представляет позицию текущего ферзя на шахматной доске (x и y)
// оба будут в диапазоне от 1 до 8, где 1,1 - это нижний левый угол шахматной доски, а 8,8 - верхний правый угол).
// Ваша программа должна определить, все ли ферзи размещены таким образом, чтобы ни одна из них не нападала
// друг на друга. Если это верно для данного ввода, верните строку true, в противном случае верните первого
// ферзя в списке, который атакует другую фигуру в том же формате, в котором она была предоставлена.
// Например: если strArr - это ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1 , 6) "," (7,7) "," (5,8) "],
// тогда ваша программа должна вернуть строку true. Соответствующая шахматная доска ферзей для этого входа
// приведена ниже (взято из Википедии).

//------------- Р Е Ш Е Н И Е ------------------------------------------------------------------------------------------
function MatrixChallenge(strArr) {
    const n = 8;
    let xArr = [];
    let yArr = [];
    for (let i = 0; i < n; i++){
        xArr.push(strArr[i][1]);
        yArr.push(strArr[i][3]);
    }
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (xArr[i] === xArr[j] || yArr[i] === yArr[j]
                || Math.abs(xArr[i] - xArr[j]) === Math.abs(yArr[i] - yArr[j])){
                return strArr[i];
            }
        }
    }
    return 'true';
}
console.log(MatrixChallenge(["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"]));