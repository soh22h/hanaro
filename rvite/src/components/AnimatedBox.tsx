import { useRef } from "react";
import "./App.css";

function AnimatedBox() {
  // useRef 훅을 사용하여 Box 요소를 참조할 변수를 선언
  const boxRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // 여기에 Box 요소에 'animate' 클래스를 추가하여 애니메이션을 적용하세요.
    // 애니메이션이 끝난 후에는 클래스를 제거하세요.
    if (boxRef.current) {
      //animate 클래스를 추가하여 애니메이션 시작
      boxRef.current.classList.add("animate");

      //끝난후 제거
      boxRef.current.addEventListener(
        "animationend",
        () => {
          boxRef.current?.classList.remove("animate");
        },
        { once: true }
      );
    }
  };

  return (
    <div>
      <div
        ref={boxRef}
        className="box"
        style={{ width: "100px", height: "100px", backgroundColor: "skyblue" }}
      ></div>
      <button onClick={handleClick}>Animate Box</button>
    </div>
  );
}

export default AnimatedBox;