import React, { useRef, useState } from "react";

function TextInputColorChanger() {
  const [text, setText] = useState("");
  // useRef 훅을 사용하여 p 요소의 배경색을 저장할 변수를 선언
  const pRef = useRef<HTMLParagraphElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (pRef.current) {
      // 텍스트 길이에 따라 p 요소의 배경색을 변경
      if (e.target.value.length >= 10) {
        pRef.current.style.backgroundColor = "red"; // 10자 이상이면 배경색 빨간색
      } else {
        pRef.current.style.backgroundColor = "green"; // 10자 미만이면 배경색 초록색
      }
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <p ref={pRef} style={{ padding: "10px" }}>
        Text Length: {text.length}
      </p>
    </div>
  );
}

export default TextInputColorChanger;