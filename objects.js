// import _ from 'lodash';
// № 1
const lesson = {
    name: 'ДеструКТУРИЗАЦИЯ',
    description: 'каК увтдеТь друзЕй'
};
const reg = (les) => {
    les.name = _.capitalize(les.name);
    les.description = les.description.toLowerCase()
    return les
}
console.log(reg(lesson))

//№ 2
const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };

const company = (com1, com2) => {
    const keys = ['neme', 'state', 'website'];
    for (const key of keys) {
        if (com1[key] !== com2[key]) {
            return false;
        }
    }
    return true
}

console.log(company(company1, company2))

//№ 3
const domen = {
    scheme: 'https',
    name: 'hexlet.io',
}

const getDomainInfo = (file) => {
    const parts = file.split('://');
    const name = _.last(parts);
    const scheme = parts.length > 1 ? parts[0] : 'http';
    const info = {scheme, name};
    return info
}
console.log(getDomainInfo(domen))

//№ 4
const text = 'one two three two ONE one wow';
const words = () => {
    const words = _.words(sentence);
    const result = {};
    for (const word of words) {
        const lowerWord = word.toLowerCase();
        result[lowerWord] = (result[lowerWord] ?? 0) + 1;
    }
    return result;
};

console.log(words(text))

//№ 5
const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
};

const perv = (data, keys) => {
    const result = {};
    for (const key of keys) {
        if (Object.hasOwn(data, key)) {
            result[key] = data[key];
        }
    }
    return result;
}
console.log(perv(data, ['user', 'os']))

//№ 6

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
        if (!hasProperty) {
            return null
        }
        current = current[key];
    }
    return current
  }

console.log(iz(data1, ['hosts', 0]))

//№ 7