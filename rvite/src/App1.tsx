import { useRef } from "react";
import AnimatedBox from "./components/AnimatedBox";
import AnimatedPositionBox from "./components/AnimatedPositionBox";
import ClickCounter from "./components/ClickCounter";
import FocusInput from "./components/FocusInput";
import MouseOverComponent from "./components/MouseOverComponent";
import PreventTyping from "./components/PreventTyping";
import Timer from "./components/Timer";
import VideoPlayer from "./components/Video";
import TextInputColorChanger from "./components/TextInputColorChanger";

function MyComponent() {
  // useRef를 사용하여 참조 객체 생성
  const myInputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    // current 프로퍼티를 통해 input 요소에 접근
    if (myInputRef.current) {
      myInputRef.current.focus(); // input 요소에 포커스 설정
    }
  };

  return (
    <div>
      <input ref={myInputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// 사용 예시
function App() {
  return (
    <div>
        <MyComponent></MyComponent>
        <div>
            <FocusInput></FocusInput>
        </div>
        <div>
            <ClickCounter></ClickCounter>
        </div>
        <div>
            <PreventTyping></PreventTyping>
        </div>
        <div>
            <AnimatedBox></AnimatedBox>
        </div>
        <div>
            <Timer></Timer>
        </div>
        <div>
            <VideoPlayer></VideoPlayer>
        </div>
        <div>
            <AnimatedPositionBox></AnimatedPositionBox>
        </div>
        <div>
            <TextInputColorChanger></TextInputColorChanger>
        </div>
        <div>
            <MouseOverComponent></MouseOverComponent>
        </div>
    </div>
  );
}

export default App;