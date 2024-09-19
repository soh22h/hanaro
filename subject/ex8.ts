// dummy(mock)입니다. 올바르게 수정하세요.
const debounce = (cb: (i: number) => void, delay: number) => {
    let timer: NodeJS.Timeout | null = null;
    return (i: number) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => cb(i), delay);
    }
};

// throttle 구현
const throttle = (cb: (a: number) => void, delay: number) => {
    let isThrottled = false;
    let t: number | null = null;

    return (i: number) => {
        if (isThrottled) {  //겹쳐 들어옴
            t = i;          //t에 값 할당
            return;
        }

        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;

            if (t !== null) {   // 들어온 실행이 있었을 경우 
                cb(i); 
                t = null;
            }
        }, delay);
    };
};

const debo = debounce((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) debo(i); // 15 출력

const thro = throttle((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) thro(i); // 11 출력