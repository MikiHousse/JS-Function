// import _ from 'lodash';

// const { isObject } = require("lodash");

// № 1
// Преобпазование строки
const lesson = {
    name: 'ДеструКТУРИЗАЦИЯ',
    description: 'каК увтдеТь друзЕй'
};
const reg = (les) => {
    // capitalize изменяет регистп с КАК на Как
    les.name = _.capitalize(les.name);
    les.description = les.description.toLowerCase()
    return les
}
console.log(reg(lesson))

//№ 2
// Функция сравнивает объекты по совпадению данных а не по сылкам 
const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
const company = (com1, com2) => {
    // создаем массив ключей
    const keys = ['neme', 'state', 'website'];
    for (const key of keys) {
        // если хотя бы один кулюч не совподает то false 
        if (com1[key] !== com2[key]) {
            return false;
        }
    }
    return true
}
console.log(company(company1, company2))

//№ 3
// Функция принимает имя сайта и выдает информазию о нем 
//Разобрать функцию когда будет подпискм
const domen = 'http://hexlet.io'

const getDomainInfo = (file) => {
    const parts = file.split('://');
    const name = _.last(parts); // соединяет объект
    const scheme = parts.length > 1 ? parts[0] : 'http'; // если у строки есть длина добавляется строка если нет то http
    const info = {scheme, name};
    return info
}
console.log(getDomainInfo(domen))

//№ 4
// Фунеция считает количесво повтораящихся элементов
const text = 'one two three two ONE one wow';
const words = () => {
    const words = _.words(sentence); // формируем из строки массив
    const result = {};
    for (const word of words) {
        const lowerWord = word.toLowerCase(); // приводим к нижнему регистру
        //если словно уже есть в объекте то 0 иначе + 1
        result[lowerWord] = (result[lowerWord] ?? 0) + 1;
    }
    return result;
};

console.log(words(text))

//№ 5
// Функция выводит всю информациою о искомом объекте
const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
};

const perv = (data, keys) => {
    const result = {};
    for (const key of keys) {
        if (Object.hasOwn(data, key)) { // hasOw указавает сущесвует ли искомое в объекте
            result[key] = data[key];// если да то элемент сохраняется в резултате 
        }
    }
    return result;
}
console.log(perv(data, ['user', 'os']))

//№ 6
// извлекает из объекта любой глубины вложености значение по указанным ключам
const data1 = {
    user: 'ubuntu',
    hosts: {
      0: {
        name: 'web1',
      },
      1: {
        name: 'web2',
        null: 3,
        active: false,
      },
    },
  };
const iz = (data, keys) => {
    let current = data;
    for (const key of keys) {
        const hasProperty = Object.hasOwn(current, key);
        // не и ли там указанного объекута если нет то null иначе помещаем его в переменную
        if (!hasProperty) {
            return null
        }
        current = current[key];
    }
    return current
  }

console.log(iz(data1, ['hosts', 0]))

//№ 7
const company3 = {
    name: null,
    state: 'moderating',
  };
   
const data2 = {
    name: 'Hexlet',
    state: 'published',
  };

const slik = (obj, keys, data) => {
    const filter = keys.length > 0 ? _.pick(data, keys) : data;
    Object.assign(obj, filter)
}
console.log(slik(company3, ['name'], data2));

//№ 8

const data4 = {
    key: 'value',
    key2: {
      key: 'innerValue',
      innerKey: {
        anotherKey: 'anotherValue',
      },
    },
  };

const cloneDeep = (object) => {
    const result = {};
    const entires = Object.entries(object);
    for (const [key, value] of entires) {
        result[key] = isObject(value) ? cloneDeep(value) : value;
    }
    return result;
};

console.log(data4);

//№ 9
const company4 = make('Hexlet', { website: 'hexlet.io', state: 'published' });

const comp = (name, date = {}) => {
    const defaultData = {
        state: 'moderating',
        createdAt: Date.now(),
    };
    return {...defaultData, ...data, name}
}

console.log(comp(company4, make('Hexlet')))

//№ 10
const users = [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  ];

const userFun = (users) => {
    const names = [];
    for (const {name} of users) {
        names.push(name)
    }
    return names.sort()
};

console.log(userFun(users))

//№ 11
// В этой задачем нужны функции которых у меня нет 