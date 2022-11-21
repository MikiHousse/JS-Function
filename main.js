// import uniq from './lodash-master/iniq.js';
// № 1
// Подставляем префикс к каждому элементу массива 
const names = [1, 2, 3];
const def = (coll, preffix = "Mr") => {
    const result = [];
    for(let i = 0; i < coll.length; i++) {
        result[i] = `${preffix} ${coll[i]}`;
        

    }
    return result;
};
console.log(def(names));

// № 2
// переварот массива
const num = [1, 2, 3, 4];
function reverseArr(arr) {
    let ret = [];
            // длина 3         пока i больше или равно 0 из длины вычитаеся 
    for(let i = arr.length - 1; i >= 0; i--) {
        // первым пушиться элемент с инедексом 3 это у нас четверка далее пушиться элемент под инедсом 2 это у нас 3 и так далее
        ret.push(arr[i]);
    }
    return ret;
};
console.log(reverseArr(num));

// № 3
// Складывание чисел равные 3 
const calc = (coll) => {
    let sum = 0;
    for (let i = 0; i < coll.length; i++) {
        if (coll[i] % 3 === 0) {
            sum += coll[i]
        }
    }
    return sum
};
// console.log(calc(colls))

// № 4
// Среднее арифметическое 
const arif = (coll) => {
    const itemCount = coll.length;
    // если массив пуст возвращаем null
    if (coll.length === 0) {
        return null;
    }
    let sum = 0;
    for(const item of coll) {
        sum += item;
    }
    // const res =  sum / itemCount;
    return sum / itemCount
}
// console.log(arif(colls))

// № 5
const colls = [8, 9, 21, 19, 18, 22, 7];
// функция принимает массив и возвращает новый], состоящий из элементов у которых та же четность что и у нулевого элемента.
const getSameParity = (coll) => {
    // пустой ли массив
    if (coll.length === 0) {
        return [];
    }
    const result = [];
    // узнаем у нулевого элемента массива его четность. Если будет отрицательное чисто метод abs сделает его положительным
    const remainder = Math.abs(coll[0] % 2)
    // проверяем четность остальных элементов массива и пушим в массив результ если четность совпадает с нулевым элемнтом массива
    for (const item of coll) {
        if (Math.abs(item % 2) === remainder) {
            result.push(item)
        }
    }
    return result;
}

console.log(getSameParity(colls))

// № 6
const wallent = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
// функция массив кошельков с деньгами и возвращает сумму той валюты которая указана
const getTotalAmount = (arr, curr) => {
    // подсчет суммы
    let result = 0;
    // перебираем элементы массива и сравниваем указанную валюту с помощью метода slice с элементом массива если совпадаем, ведем подсчет
    for (const item of arr) {
        if (curr === item.slice(0, 3)) {
            // Number преобразовывает строку в номер
            result += Number(item.slice(3, item.length));
        }
    }
    return result
}

console.log(getTotalAmount(wallent,'usd'))

// № 7
const scoress = [
    [3, 7],
    [4, 5],
    [4, 4],
    [3, 5],
    [4, 5],
    [3, 5],
    [4, 3],
    [6, 5]
];
// находим команду победтеля
const superSeries = (scores) => {
    let result = 0;
    // перебираем массив
    for (const score of scores) {
        result += Math.sign(score[0] - score[1]);   // считаем элементы внутри массива  и узнаем отрицательное ли получилось значение или нет
    }
    // сравниваем полученное значение 
    if (result > 0) {
        return 'canada'
    }
    if (result < 0) {
        return 'ussr'
    }
    return null
};
console.log(superSeries(scoress))

// № 8
// Генерирует HTML список определений и возвращает строку
const definitios = [
    ['Блямба', 'Выпуклость чего либо'],
    ['Бобр', 'Животное из отряда грызунов']
]

const strings = (arr) => {
    // проверка на путсоту массива 
    if (arr.length === 0) {
        return '';
    }
    const parts = [];
    // перебираем массив 
    for (const item of arr) {
        // нулевой элемент массива записсываем в отдельную переменню
        const name = item[0];
        // также и с первым элементом 
        const description = item[1];
        // пушим в пустой массив форму содержимого документа 
        parts.push(`<dt>${name}</dt><dd>${description}</dd>`);
    }
    // присваеваем рузльтат переменной 
    const innerValue = parts.join(''); // когда куплю подписку узнать зачем эта строчка !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // запихтваем рузльтатт в основной тэг 
    const result = `<dl>${innerValue}</dl>`; 
    return result
}
console.log(strings(definitios))

// № 9
// Функция заменяет указанные слова в предложении на $#%!
const sentence = 'When you play the game of thrones, you win or you die';
const makeCensored = (str, value) => {
    // рабиваем струку на массив строк с помощью split
    let arr = str.split(' ')
    const newArr = [];
    for (let word of arr) {
        // если массив содержит определенный эдемент пушиться его замена если нет то сам массив 
        if (value.includes(word)) {
            newArr.push('$#%!');
        } else {
            newArr.push(word);
        }
    }
        // объединяем все элементы массива в строку 
    return newArr.join(' ');
}
console.log(makeCensored(sentence, ['die', 'play']));

// № 10
// 14 массивы
// найти способ поделючить lodash
// const arr1 = [1, 3, 2, 2];
// const arr2 = [3, 1, 1, 2, 5];
// const getSameCount = (coll1, coll2) => {
//     let count = 0;
//     //получаем массив без повторяющихcя элементов 
//     const uniqColl1 = _.uniq(coll1);
//     const uniqColl2 = _.uniq(coll2);
//     for (const item1 of uniqColl1) {
//         for (const item2 of uniqColl2) {
//             // если элементы равны то увиличиваем счетчик на 1 
//             if (item1 === item2) {
//                 count += 1;
//                 break;
//             }
//         }
//     }
//     return count;
// }
// console.log(getSameCount(arr1, arr2))

// № 11
// Функция считает сколько символов использовано в строке без учета повторяющихся
const text = 'You know nothing Jon Snow'
const countUniqChars = (string) => {
    const uniqChars = [];
    for (const char of string) {
        // если в новом массиве нет такого символа то пушим его в массив
        if (!uniqChars.includes(char)) {
            uniqChars.push(char);
        }
    }
    return uniqChars.length;
}
console.log(countUniqChars(text))

// № 12
//  Пузырьковая сортировка
const bubble = [3, 10, 4, 3];
const bubbleSort = (coll) => {
    // Сохраняем в переменную длину массива
    let stepsCount = coll.length -1;
    // переменная может показать был ли совершен обмен элементов во время перебора массива 
    let swapped;
    // цикл do..while работает так же как и цикл while 
    // разница в проверке тут она делается не до выполнения тела а после
    do {
        swapped = false;
        // перебираем массив и меняем местами элементы если предыдущий больше чем следущий 
        for (let i = 0; i < stepsCount; i += 1) {
            if(coll[i] > coll[i + 1]) {
                // temp временная константа для хранения текущего элемента 
                const temp = coll[i];
                coll[i] = coll[i + 1];
                coll[i + 1] = temp;
                // если сработал if и была совершена перестановка присваиваем swapped, true
                swapped = true;
            }
        }
        // уменьшаем счетчик на 1 т.к самый большой элемент уже находиться в конце массива
        stepsCount -= 1;
    } while (swapped); // продолжаем пока swapped, true
    return coll;
}