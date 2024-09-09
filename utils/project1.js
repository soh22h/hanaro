function trackObjects(command) {
    const [command, id, value = ''] = command.split(' ');

    switch(command) {
        case 'addWeakMap':
            weakMap.set({id: Number(id)}, Number(value));
            break;
        case 'addMap':
            map.set({id : Number(id)}, Number(value));
            break;
        case 'modify':
            let obj = {id : Number(id)};
            if(weakMap.has(obj)) weakMap.set({id : Number(value)}, )
            if(map.has(obj)) map.set({id : Number(value)})
            break;
        case 'checkWeakMap':
            return weakMap.has({id : Number(id)});
        case 'checkMap':
            return map.has({id : Number(id)});
        default:
            break;
    }
}

let obj1 = {id : 1};
let obj2 = {id : 2};
let obj3 = {id : 3};
let obj4 = {id : 4};
let weakMap = new WeakMap();
// weakMap.set(1, 1);
// weakMap.set(2, 2);
// weakMap.set(3, 3);
weakMap.set(4, 4);
weakMap.set(obj1, 1);
weakMap.set(obj2, 2);
weakMap.set(obj3, 3);
weakMap.set(obj4, 4);
let map = new Map();
map.set(obj1, 1);
map.set(obj2, 2);
map.set(obj3, 3);
map.set(obj4, 4);
// map.set(1, 1);
// map.set(2, 2);
// map.set(3, 3);
// map.set(4, 4);

const commands = [
    "addWeakMap 1 100",
    "addMap 1 100",
    "addWeakMap 2 200",
    "addMap 2 200",
    "modify 1 10",
    "checkWeakMap 1",
    "checkWeakMap 10",
    "checkMap 1",
    "checkMap 10"
];


function trackObjects(commands) {
    const wm = new WeakMap();
    const m = new Map();
    let objMap = new Map(); // objID와 객체를 매핑하는 내부 Map
    
    const weakMapResults = [];
    const mapResults = [];
    
    for (let command of commands) {
        const [action, objID, value] = command.split(' ');
        const id = parseInt(objID);
        
        if (action === "addWeakMap") {
            const obj = { id };
            wm.set(obj, parseInt(value));
            objMap.set(id, obj); // 객체를 objID로 매핑하여 저장
        } else if (action === "addMap") {
            const obj = { id };
            m.set(obj, parseInt(value));
            objMap.set(id, obj); // 객체를 objID로 매핑하여 저장
        } else if (action === "modify") {
            const newID = parseInt(value);
            if (objMap.has(id)) {
                const obj = objMap.get(id);
                obj.id = newID;
                objMap.set(newID, obj); // 새 ID로 객체를 갱신
                objMap.delete(id); // 이전 ID로 매핑된 객체 삭제
            }
        } else if (action === "checkWeakMap") {
            const obj = objMap.get(id);
            weakMapResults.push(wm.has(obj));
        } else if (action === "checkMap") {
            const obj = objMap.get(id);
            mapResults.push(m.has(obj));
        }
    }
    
    return { weakMapResults, mapResults };
}