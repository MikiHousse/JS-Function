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

// Складывание чисел равные 3 
const colls = [8, 9, 21, 19, 18, 22, 7]
const calc = (coll) => {
    let sum = 0;
    for (let i = 0; i < coll.length; i++) {
        if (coll[i] % 3 === 0) {
            sum += coll[i]
        }
    }
    return sum
};
console.log(calc(colls))

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
console.log(arif(colls))



