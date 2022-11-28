//№ 1
// Функция проверяет переданное число на простоту и печатает на экран да или нет
// const prime = 4;
// const isPrime = (num) => {
//     if (num < 2) {
//         return false;
//     }
//    for (let i = 2; i < Math.sqrt(num); i += 1) {
//     if (num % i === 0) {
//         return false;
//     }
//     return true
//     }
// }
// const sayPrimeOrNot = (num) => {
//     const text = isPrime(num) ? 'yes' : 'no';
//     console.log(text)
// }
// console.log(isPrime(prime))

//№ 2
//Функция возвращает среднее арефметическое всех переданных аргументов
// const sum = [3, 6, 2, 5, 9]
// const average = (...num) => {
//     const count = num.length;
//     if (count === 0) {
//         return null
//     }
//     return _.sum(numbers) / count;
// }
// console.log(average(sum));

//№ 3
//Функция конвертирует даты в массив человеко-читаемых строк 
const data = [1993, 3, 24];
const convert = (...coll) => {
    const formattedDates = [];
    for (const item of coll) {
        const date = new Date(...item);
        const formattedDate = date.toDateString();
        formattedDates.push(formattedDate);
    }
    return formattedDates;
}

console.log(convert(data))

//№ 4
//Функция возвращает последние n символ строки в обратном порядке
const obr = 'power';
const run = (text) => {
    const takeLast = (str, length) => {
        if (str.length === 0 || str.length < length) {
            return null
        }
        const result = [];
        for (let i = str.length - 1; result.length < length; i -= 1) {
            result.push(str[i]);
        }
        return result.join('');
    }
    return takeLast(text, 4)
}
console.log(run(obr))

//№ 5
//Функция принимает на вход список пользоваетелй и возвращает самых взрослых
const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];
const takeOldest = (users, count = 1) => {
    const sorted = _.sortBy(users, ({birthday}) => Date.parse(birthday));
    return sorted.slice(0, count) 
};

//№ 6
//Функция принимает на вход список польхователей и возвращает плоский список их детей
const userss = [
    {
      name: 'Tirion',
      children: [
        { name: 'Mira', birthday: '1983-03-23' },
      ],
    },
    { name: 'Bronn', children: [] },
    {
      name: 'Sam',
      children: [
        { name: 'Aria', birthday: '2012-11-03' },
        { name: 'Keit', birthday: '1933-05-14' },
      ],
    },
    {
      name: 'Rob',
      children: [
        { name: 'Tisha', birthday: '2012-11-03' },
      ],
    },
  ];
  const getChildren = (users) => {
    const childrenOfUsets = users.map(({children}) => children)
    return childrenOfUsets.flat()
  }
  console.log(getChildren(userss))

  // № 7
  //Функция принимает список и возращает плоский список подруг всех пользователей
  const users1 = [
    {
      name: 'Tirion',
      friends: [
        { name: 'Mira', gender: 'female' },
        { name: 'Ramsey', gender: 'male' },
      ],
    },
    { name: 'Bronn', friends: [] },
    {
      name: 'Sam',
      friends: [
        { name: 'Aria', gender: 'female' },
        { name: 'Keit', gender: 'female' },
      ],
    },
    {
      name: 'Rob',
      friends: [
        { name: 'Taywin', gender: 'male' },
      ],
    },
  ];

  const getGirls = (users) => {
    const friendsOfUsers = users.map(({friends}) => friends);
    return friendsOfUsers.flat().filter(({gender}) => gender ==='female')
  }

  console.log(getGirls(users1))


//№ 8 
//Функция группирует объкты по заданому свойству
  const students = [
    { name: 'Tirion', class: 'B', mark: 3 },
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
  ];

const groupBy = (objects, key) => 
    objects.reduce((acc, object) => {
        const groupName = object[key];
        const group = acc[groupName] ?? [];
        return {...acc, [groupName]: group.concat(object) }
    }, {});
console.log(groupBy(students, 'class'))


//№ 9
//Функция принимает на вход список эмейлов и возвращает количество емейлов расположенных на каждом бесплатном домене
const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];
//Когда куплю подписку выписать функицю !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const getFree = () => {

}

//№ 10
//Функция находит наименьший делитель заданного числа 
const del = 15;
const small = (num) => {
    const iter = (acc) => {
        if (acc > num / 2) {
            return num
        }
        if (num % acc === 0) {
            return acc;
        }
        return iter(acc + 1);
    };
    return iter(2)
}
console.log(small(del))

//№ 11
//Функция находить сумму последовательность целых чисел задача решается с помощью рекурсии
const sumb = 1;
const sune = 5;
const sequenceSum = (begin, end) => {
    if (begin > end) {
        return NaN
    }
    if (begin === end) {
        return begin;
    }
    return begin +sequenceSum(begin + 1, end);
}
console.log(sequenceSum(sumb, sune))  

	