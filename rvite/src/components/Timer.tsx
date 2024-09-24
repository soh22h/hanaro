import { useRef, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  // useRef 훅을 사용하여 타이머 ID를 저장할 변수를 선언
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  //setInterval로 생성된 타이머 객체를 저장하는 ref,초기값은 null
  const startTimer = () => {
    if (!timerRef.current) {
      // 타이머가 실행 중이 아닐 때만 타이머 시작
      timerRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000); // 1초마다 count 증가
    }
  };

  const stopTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current); // 타이머 정지
      //timerRef.current에 저장된 타이머 ID를 사용하여 정지
      timerRef.current = null; // 타이머 ID 초기화, 나중에 다시 startTimer가 실행되도록
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default Timer;