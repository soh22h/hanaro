const assert = require('assert');

const arr = [1, 2, 3, 4, 5];

const hong = {id : 1, name : 'Hong'};
const kim = {id : 2, name : 'Kim'};
const lee = {id : 3, name : 'Lee'};
const users = [hong, lee, kim];

Array.prototype.mapBy = function (key) {
    return this.map((u) => u[key]);
}
Array.prototype.findBy = function (...args) {
    return this.find(u => u[args[0]] === args[1]);
}
Array.prototype.filterBy = function (...args) {
    return this.filter((u) => {
        return u[args[0]] == args[1];
    })
}
Array.prototype.rejectBy = function (...args) {
    return this.filter((u) => {
        u[args[0]] != args[1];
    })
}
Array.prototype.sortBy = function (key) {
    const [target, order] = key.split(':');

    if(order === 'desc') {
        return this.sort((a, b) => b[target] - a[target]);
    }
    
    return this.sort((a, b) => a[target] - b[target]);
}

console.log(users.mapBy('id'));
console.log(users.mapBy('name'));
console.log(users.filterBy('id', 2));
console.log(users.rejectBy('id', 2));
console.log(users.findBy('name', 'Kim'));
console.log(users.sortBy('name'));
console.log(users.sortBy('name:desc'));
// assert.deepStrictEqual(users.mapBy('id'), [1, 3, 2]);
// assert.deepStrictEqual(users.mapBy('name'), ['Hong', 'Lee', 'Kim']);
// assert.deepStrictEqual(users.filterBy('id', 2), [kim]);
// assert.deepStrictEqual(users.rejectBy('id', 2), [hong, lee]);
// assert.deepStrictEqual(users.findBy('name', 'Kim'), kim);
// assert.deepStrictEqual(users.sortBy('name'), [kim, lee, hong]);
// assert.deepStrictEqual(users.sortBy('name:desc'), [hong, lee, kim]);
// assert.deepStrictEqual(users.By(), );



/**
 * // mapBy: 특정 키의 값을 추출하여 배열로 반환
Array.prototype.mapBy = function (key) {
  return this.map(item => item[key]);
};

// findBy: 특정 키의 값과 일치하는 첫 번째 객체를 반환
Array.prototype.findBy = function (key, value) {
  return this.find(item => item[key] === value);
};

// filterBy: 특정 키의 값과 일치하는 모든 객체를 배열로 반환
Array.prototype.filterBy = function (key, value) {
  return this.filter(item => item[key] === value);
};

// rejectBy: 특정 키의 값과 일치하지 않는 객체들을 배열로 반환
Array.prototype.rejectBy = function (key, value) {
  return this.filter(item => item[key] !== value);
};

// sortBy: 특정 키를 기준으로 배열을 정렬, "key:desc" 형식으로 전달하면 내림차순 정렬
Array.prototype.sortBy = function (key) {
  const [sortKey, order] = key.split(':');
  return this.slice().sort((a, b) => {
    if (a[sortKey] > b[sortKey]) return order === 'desc' ? -1 : 1;
    if (a[sortKey] < b[sortKey]) return order === 'desc' ? 1 : -1;
    return 0;
  });
};

// firstObject: 배열의 첫 번째 객체를 반환
Object.defineProperty(Array.prototype, 'firstObject', {
  get: function () {
    return this[0];
  }
});

// lastObject: 배열의 마지막 객체를 반환
Object.defineProperty(Array.prototype, 'lastObject', {
  get: function () {
    return this[this.length - 1];
  },
  set: function (value) {
    this[this.length - 1] = value;
  }
});

// 테스트 데이터
const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const users = [hong, lee, kim];

// 테스트 코드
console.log(users.mapBy('id')); // [1, 3, 2]
console.log(users.mapBy('name')); // ['Hong', 'Lee', 'Kim']
console.log(users.filterBy('id', 2)); // [kim]
console.log(users.rejectBy('id', 2)); // [hong, lee]
console.log(users.findBy('name', 'Kim')); // kim
console.log(users.sortBy('name')); // [hong, kim, lee]
console.log(users.sortBy('name:desc')); // [lee, kim, hong]
console.log(users.firstObject); // hong
console.log(users.lastObject); // kim

// lastObject 설정 테스트
users.lastObject = lee;
console.log(users.lastObject); // lee
users.lastObject = hong;
console.log(users.lastObject); // hong
 * 
 */