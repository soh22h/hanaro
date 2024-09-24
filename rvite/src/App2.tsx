import React, { forwardRef } from "react";

//1. 자식
const MyInput = forwardRef<HTMLInputElement>((props, ref) => (
  <input ref={ref} {...props} />
));
//forwardRef

function ParentComponent() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const focusInput = () => {
    //부모에서 자식 접근
    inputRef.current?.focus();
  };
  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;