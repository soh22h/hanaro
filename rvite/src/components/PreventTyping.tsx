import React, { useRef } from "react";

function PreventTyping() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 여기에 input 요소의 입력을 방지하고 "Stop typing!" 메시지를 표시하세요.
    if (inputRef.current) {
      inputRef.current.value = "Stop Typing!";
      //  e.preventDefault();
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Try to type here..."
        onInput={handleInput}
      />
    </div>
  );
}

export default PreventTyping;