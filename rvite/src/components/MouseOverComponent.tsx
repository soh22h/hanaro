import { useRef } from "react";
// import "./App.css";

function MouseOverComponent() {
  // useRef 훅을 사용하여 div 요소를 참조할 변수를 선언
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => {
    if (divRef.current) {
      divRef.current.textContent = "Mouse Over!"; // 마우스 오버 시 텍스트 변경
    }
  };

  const handleMouseOut = () => {
    if (divRef.current) {
      divRef.current.textContent = "Mouse Out!"; // 마우스 아웃 시 텍스트 변경
    }
  };

  return (
    <div
      ref={divRef}
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "lightgray",
        textAlign: "center",
        lineHeight: "100px",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      Hover me!
    </div>
  );
}

export default MouseOverComponent;