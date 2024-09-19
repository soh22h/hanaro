// range 함수를 작성하세요.
const range = (start = 0, end = 0, step = start > end ? -1 : 1) => { 
    //step == gap
    let arr = [];

    if((start - end) * step > 0) return arr;

    arr.push(start);
    if(step == 0) return arr;

    let fixedNum = String(step).split(".").length - 1;

    for(let i = start + step; ; i += step) {
        i = Number(i.toFixed(fixedNum));  

        if((step > 0 && i > end) || (step < 0 && i < end)) break;
        arr.push(i);
    }
    
    return arr;
};

module.exports = { range };
