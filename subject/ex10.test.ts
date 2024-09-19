import { ArrayList } from './ex10';
import assert from 'assert';
console.log('🚀  ArrayList:', ArrayList);
//  여기에 테스트코드를 작성하세요.

const alist = new ArrayList([1, 2]); 

assert.deepStrictEqual(alist.listToArray({ value: 1, rest: { value: 2, rest: null} }), [1,2]);
assert.deepStrictEqual(alist.arrayToList([1,2]), { value: 1, rest: { value: 2, rest: null } });
assert.deepStrictEqual(alist.toString(), "{ value: 1, rest: { value: 2, rest: null } }");
assert.deepStrictEqual(alist.add(3), { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } });
assert.deepStrictEqual(alist.add(5, 1), { value: 1, rest: { value: 5, rest: { value: 2, rest: { value: 3, rest: null } } } });
assert.deepStrictEqual(alist.remove(2), { value: 1, rest: { value: 5, rest: { value: 3, rest: null } } });
assert.deepStrictEqual(alist.add(22, 1), { value: 1, rest: { value: 22, rest: { value: 5, rest: { value: 3, rest: null } } } });
assert.deepStrictEqual(alist.add(33, 1), { value: 1, rest: { value: 33 , rest: { value: 22, rest: { value: 5, rest: { value: 3, rest: null } } } } });
assert.deepStrictEqual(alist.toString(), "{ value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 5, rest: { value: 3, rest: null } } } } }");
assert.deepStrictEqual(alist.set(1, 300), { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 5, rest: { value: 3, rest: null } } } } });
assert.deepStrictEqual(alist.get(2), 22);
assert.deepStrictEqual(alist.size(), 5);
assert.deepStrictEqual(alist.indexOf(300),  1);
assert.deepStrictEqual(alist.contains(300), true);
assert.deepStrictEqual(alist.contains(301), false);
assert.deepStrictEqual(alist.isEmpty(), false);
assert.deepStrictEqual(alist.peek(), 3);
assert.deepStrictEqual(alist.toArray(), [1, 300, 22, 5, 3]);
assert.deepStrictEqual(alist.iterator().next(), { value: 1, done: false });
assert.deepStrictEqual(alist.removeByIndex(3), { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3, rest: null } } } });
assert.deepStrictEqual(alist.clear(), 0);


/*
ArrayList Methods
- add(value), 값 추가
- add(value, index), 특정 index에 값 추가
- get(index) : 특정 index의 값 읽기
- remove(value), 
- removeByIndex(index)
- set(index, value) : 변경
- contains(value) cf. includes()
- indexOf(value)
- size() cf. length
- iterator()
- toArray() : values
- isEmpty
- clear()
- print(),
- peek,
- toString()
*/