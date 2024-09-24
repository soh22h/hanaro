import { useRef } from "react";
import "./App.css";

function AnimatedPositionBox() {
  // useRef 훅을 사용하여 Box 요소의 위치를 저장할 변수를 선언
  const boxRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0); // Box의 현재 위치를 저장할 변수

  const moveBox = () => {
    const box = boxRef.current;
    if (box) {
      // 현재 위치에서 100px 이동
      positionRef.current += 100;
      box.style.transform = `translateX(${positionRef.current}px)`;
      box.style.transition = "transform 0.5s ease-in-out";
    }
  };

  return (
    <div>
      <div
        ref={boxRef}
        className="box"
        style={{ width: "100px", height: "100px", backgroundColor: "skyblue" }}
      ></div>
      <button onClick={moveBox}>Move Box</button>
    </div>
  );
}

export default AnimatedPositionBox;