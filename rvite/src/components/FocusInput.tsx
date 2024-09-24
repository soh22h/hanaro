import React, { useRef } from 'react';

function FocusInput() {
  // useRef 훅을 사용하여 input 요소를 참조할 변수를 선언
  const inputRef = useRef(null);

  const handleClick = () => {
    // input 요소에 포커스 설정
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={handleClick}>Focus the Input</button>
    </div>
  );
}

export default FocusInput;