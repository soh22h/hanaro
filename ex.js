// var gg = 1; let bb = 2; 
// function f1(x, y) {
//     var gg = 11;
//     console.log();
//     f2('first');
//     {
//         const xx = 99;
//         f2('nest-first');
//         var zz = 88;
//         function f2(t) { console.log(); }
//         let lll = 0;
//     }
//     function f2(t, u) { console.log(); }
//     function f2(t, u, v) { console.log(); }
//     var zz = 800;
//     f2('second');
// }
// function f2(g) {
//     console.log();
// }
// let xx = 9;
// if(gg > 0) { var kk = 33; const yy = 9; }
// f1(1, 2);
// console.log();
// f2('third');


// const dog = {
//     name : 'Max',
//     showMyName() {
//         console.log(`My name is ${this.name}`);
//     },
//     whatsYourName() {
//         setTimeout(() => this.showMyName(), 1000);  //setTimeout(this.showMyName, 1000); 으로 할 시 whatsYourName() 함수 안의 name을 바라보기에 error
//     }
// }

// //() : 화살표 함수 사용 시 그 함수를 호출한 상위객체를 바라보게 함

// console.log(dog.name);
// // dog.showMyName();
// dog.whatsYourName();

// let check = true;
//  const fn = (
//      (x, y) => {
//          if(check) {
//              check = false;
//              return `번호 ${x} ${y}`;
//          }
//  });

// function once(fp) {
//     let called = false;
//     return function(...args){
//         if(!called){
//             called = true;
//             return fn(...args);
//         }
//     }
// }

// // --------------------------------------

// let delay = 1000;
// function once(fp) {
//     let called = false;
//     return function(...args){
//         if(!called){
//             called = true;
//             time = setTimeout(() => called = false, delay);
//             return fn(...args);
//         }
//     }
// }


// const fn = (
//     (x, y) => {
//         if(check) {
//             check = false;
//             setTimeout(() => {check = true}, 1000);
//             return `번호 ${x} ${y}`;
//         }
// });
// console.log(fn(7,3));
// console.log(fn(5,2));
// console.log(fn(8,4));
// console.log(fn(1,2));

// setTimeout(() => console.log(fn(0,9)), 1000);


// const before = () => console .log('before...');
// const after = () => console.log('after..');
// const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
// const someFn2 = (id, nickname, email, level) => console.log(`${id}/${nickname}/${email}/${level}`);
// const template = (f) => {
    
//     return (...args) => {
//         before();
//         f(...args);
//         after;
//     }
// }
// const temp = template(someFn); // before - someFn - after 실행
// const temp2 = template(someFn2); // before - someFn2 - after 실행
// temp('sico','hello');
// temp2(1, 'sico', 'sico@gmail.com', 5);




// const weeks = ['일', '월', '화', '수', '목', '금', '토'];
// let widx = -1;

// const getNextWeek = () => { 

//     widx += 1;
//     if (widx >= weeks.length) widx = 0;

//     return `${weeks[widx]}요일`;
// }


// let cnt = 0;
// const intl = setInterval(() => {
//     console.log('cal', cnt, getNextWeek());
//     if ((cnt += 1) === 8) clearInterval(intl);
// }, 1000);


