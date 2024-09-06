const assert = require("assert");

// const arr = [1, 2, 3, 4, 5];
// //1 
// console.log(arr.slice(1, 3));

// //2
// console.log(arr.slice(2));

// //3
// const arr1 = arr.splice(1, 3);
// console.log(arr);

// //4
// arr.splice(1, 0, 2, 3, 4);
// console.log(arr);

// //5
// const arr2 = arr.splice(2);
// console.log(arr);

// //6
// arr.splice(2, 2, 3, 4, 5);
// console.log(arr);

// //7
// // arr.splice(2, 0, 'X', 'Y', 'Z');
// // arr.splice(5, 1);
// // console.log(arr);

// //8
// const a = [... arr.slice(0, 2), ... 'XYZ', ... arr.slice(3)];
// console.log(a);

/*

const push = (arr, ... a) => {
    return [... arr, ... a];
}

const pop = (arr, a = 1) => {
    return arr.slice(-a);
}

const shift = (arr, a = 1) => {  //default a = 1
    return arr.slice(a);
}

const unshift = (arr, ... a) => {
    return [... a, ... arr];
}

const arr = [1, 2, 3, 4];
assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), [4]);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);


const deleteArray = (arr, ... a) => {
    const array = [... arr];
    const index = a[0];
    let count = arr.length - a[0];

    if(a.length > 1) count = a[1] - a[0];

    array.splice(index, count);

    return array;
}

const deleteArray1 = (arr, ... a) => {
    const array = [... arr];

    const index = arr.findIndex((item) => {
        return item[a[0]] === a[1];
    });

    array.splice(index, 1);

    return array;
}

-> type에 따른 다른 처리

function deleteArray(arr, startOrKey, endOrValue = Infinity) {
  if (typeof startOrKey === 'number') {
    return arr.filter((_, i) => i < startOrKey || i >= endOrValue);  //i가 index니까 그 index 외의 값들 가져오는 걸로 
  }

  return arr.filter(a => a[startOrKey] !== endOrValue);  //말그대로 지울 생각을 하지말고 그거 말고 출력한다는 생각으로 그 반대를 가져오면 되지
}

assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);
const Hong = {id: 1, name: 'Hong'};
const Kim = {id: 2, name: 'Kim'};
const Lee = {id: 3, name: 'Lee'};
const users = [Hong, Kim, Lee];
assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray1(users,'id', 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray1(users, 'name', 'Lee'), [Hong, Kim]);


const hong = {id: 1, name: 'Hong'};
const choi = {id: 5, name: 'Choi'};
const kim = {id: 2, name: 'kim'};
const lee = {id: 3, name: 'Lee'};
const park = {id: 4, name: 'Park'};

const users = {
    arr : [kim, lee, park],   // 오염되면 안됨!!
    addUser(item) {    
        return [... this.arr, item];
    },
    removeUser(item) {
        // const array = [... this.arr];
    
        // const index = array.findIndex((a) => {
        //     return a === item
        // });
    
        // array.splice(index, 1);
    
        // return array;

        return [... this.arr].filter((a) => a !== item);
    },
    changeUser(... args) {
        // const array = [... this.arr];
        // const index = array.findIndex((a) => {
        //     return a === args[0]
        // });
    
        // array.splice(index, 1, args[1]);
    
        // return array;

        return [... this.arr].map((a) => a === args[0] ? args[1] : a);
    }
}

console.log(users.addUser(hong)); // [kim, lee, park, hong]
console.log(users.removeUser(lee)); // [kim, park]
console.log(users.changeUser(kim, choi)); //[choi, lee, park)

const arr = [1, 2, 3, true];
const ret1 = arr.map((a) => a + '');
assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

const classNames = (...args) => {
    // let string = "";

    // args.map((a) => {
    //     string += a;
    // })

    // string = string.replaceAll(" ", "");
    
    // return string.split('').join(' ');

    return args.reduce((acc, item) => `${acc}${acc && item && ' '}${item && item}`);
}

const ret2 = classNames('', 'a b c', 'd', '', 'e');
assert.strictEqual(ret2, 'a b c d e');
// 주의: ' a b cd e'면 안됨!!

const reduce = (arr, fn, initValue = 0) => {
    return arr.reduce(fn, initValue);
}

console.log(reduce([1, 2, 3], (a, b) => a + b, 0)); // 6면 통과!
//cf. [1,2,3].reduce((a,b) => a + b, 0); // 6

console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b)); // 15면 통과!
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1)); // 120이면 통과!
console.log(reduce([2, 2, 2], (a, b) => a * b, 1)); // 8이면 통과!
console.log(reduce([3, 3, 3], (a, b) => a * b, 0));  // 0이면 통과!
// console.log(reduce(users, (acc, user) => acc + user.name));
*/

// reduce를 사용해야 함
// const arr = [1, 2, 3, 4, 5];

// const fn1 = (a) => a ** 2;
// const fn2 = (a) => Math.sqrt(a);
// const fn3 = (a) => a ** 3;

// arr.reduce(fn1, a)))
//     .reduce(fn2, ).reduce(fn3));

// console.log(arr);


const keyPair = (arr, sum) => {
    let sortedArr = [...arr];
    sortedArr = sortedArr.toSorted((a, b) => a - b);

    let f = 0, l = sortedArr.length - 1;

    for(let i = 0;  i < sortedArr.length; i++) {
        if(sortedArr[f] + sortedArr[l] < sum) f++;
        else if(sortedArr[f] + sortedArr[l] > sum) l--;
        else break;
    }
    
    return [f, l].map((fl) => arr.findIndex((a) => a === sortedArr[fl]));
}

assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [1, 5]);