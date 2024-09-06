const wm = new WeakMap();  
const m = new Map();
let obj1= {id: 1};
let x = {id: 10};
{
    const obj2 = {id : 2};
    wm.set(obj1, 1);
    m.set(obj1, 1);
    console.log(wm, wm.has(obj1));
    console.log(m, m.has(obj1));

    wm.set(obj2, x);
    m.set(obj2, x);
    obj1 = null; // obj1 주소 변경!
    obj2.id = 3;
    x = {id : 100};
    // x.id = 100;
    console.log(m.keys());     //Map 의 객체는 바로 GC로 안간다는 증명은 keys를 보는 거나 Map 출력 시 null 된 값이 있는지로 볼 수 있음
    console.log(wm, wm.has(obj1), wm.has(obj2));  //false, true
    console.log(m, m.has(obj1), m.has(obj2));     //false, true  얘는 m.has(null) ? 을 물어보니 false인거지 obj1이 있는지를 물어본게 X
} // wm만 전역이라면 obj1, obj2는 GC!!
console.log(m.size, wm.size); // 2, undefined  //map은 { { id: 1 } => 1, { id: 3 } => { id: 10 } } , weakmap은 obj2가 블록 스코프 끝나고 없어졌기에 객체 아예 없음
console.log(wm, wm.has(obj1));  //false
console.log(m, m.has(obj1));    //false
console.log('m.keys>>', [...m.keys()]);
console.log('m.values>>', [...m.values()], obj1, x);

//Map은 강한 참조기 때문에 delete로 객체를 삭제해야 반영이 되어 변하지 않는 상수 저장 시 사용


const ws = new WeakSet();
const s = new Set();
{
    let obj1 = {id : 1};
    const obj2 = {id: 2};
    ws.add(obj1);
    s.add(obj1);
    ws.add(obj2);
    s.add(obj2);

    obj1 = null;
    console.log(ws);
    console.log(s);
}
console.log(s.size, ws.size);
console.log('ws > ', ws);
console.log('s > ', s);

const hrTeam = {id: 1, dname: '인사팀'}; // 홍길동 (인사팀)
const devTeam = {id: 2, dname: '개발팀'};
const depts = [ hrTeam, devTeam ];
const hong = {id: 1, name: 'Hong', dept: 1}; // hong.dept.name =
const kim = {id: 2, name: 'Kim', dept: 2};
const emps = [ hong, kim, {id:3, name: 'Park', dept: 2}, {id: 4, name: 'Choi', dept: 2} ];

// const deptMap = new Map();
// deptMap.set(1, hrTeam);
// deptMap.set(2, devTeam);
// const empMap = new Map();
// empMap.set(1, hong);
// empMap.set(2, kim);
// const empDept = new Map();
// empDept.set({id : hong.id, name : hong.name}, hrTeam);
// empDept.set({id : kim.id, name : kim.name}, devTeam);

// const park = {id : emps[2].id, name : emps[2].name};
// const choi = {id : emps[3].id, name : emps[3].name};
// empDept.set(park, devTeam);
// empDept.set(choi, devTeam);


const deptMap = new Map(depts.map(dept => [dept.id, dept]));

const empMap = new Map(emps.map(emp => [emp.id, emp]));

const empDept = new Map(emps.map(emp => [emp, deptMap.get(emp.dept)]));

const devTeamEmps = [...empDept.entries()]
  .filter(([emp, dept]) => dept.id === devTeam.id)
  .map(([emp, dept]) => emp.name);

console.log(deptMap);
console.log(empMap);
console.log(empDept);
console.log(empDept.get(kim).dname);


Array.prototype.uniqBy = function (prop) {
    return [...new Set(this.map(a => a[prop]))];
};


const intersect = (arr1, arr2)=> {
    return [...new Set(arr1)].filter(item => new Set(arr2).has(item));
}

function diff(arr1, arr2) {
    return [...new Set(arr1)].filter(item => !new Set(arr2).has(item));
}

function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];

console.log(intersect(A, B));

