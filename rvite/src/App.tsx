import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//   const [count, setCount] = useState(0)
	const [name, setName] = useState('');


  const welcome = (name: string) => {
      setName(`${name}`)
  }

	/* <button onClick={() => setCount((count) => count + 1)}>
		count is {count}
	</button> */

	// const [isChecked, setIsChecked] = useState(false); // 초기값을 false로 설정

	// return (
	// <div>
	// 	<label>
	// 	<input
	// 		type="checkbox"
	// 		checked={isChecked}
	// 		onChange={() => setIsChecked(!isChecked)}
	// 	/>
	// 	체크박스
	// 	</label>
	// 	<p>현재 상태: {isChecked ? "선택됨" : "선택 안 됨"}</p>
	// </div>
	// );
	
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">	
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
		<input value={name} onChange={e => welcome(e.target.value)} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


// import React, { PropsWithChildren } from "react";

// interface CardProps {
//   title: string;
// }

// const Card: React.FC<PropsWithChildren<CardProps>> = ({ title, children }) => {
//   return (
//     <div style={{ border: "5px solid #ccc", padding: "10px", margin: "10px" }}>
//       <h2>{title}</h2>
//       <div>{children}</div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div>
//       <Card title="1.카드">
//         <p>카드 입니다</p>
//       </Card>
//     </div>
//   );
// }

// export default App;





// import React, { PropsWithChildren } from "react";

// // Container 컴포넌트 정의
// interface ContainerProps {
//   backgroundColor: string;
// }

// const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
//   backgroundColor,
//   children,
// }) => {
//   return (
//     <div style={{ backgroundColor, padding: "20px", margin: "10px" }}>
//       {children}
//     </div>
//   );
// };

// // 사용 예시
// function App() {
//   return (
//     <div>
//       <Container backgroundColor="lightblue">
//         <p>이것은 첫 번째 컨테이너입니다.</p>
//       </Container>
//       <Container backgroundColor="lightgreen">
//         <p>이것은 두 번째 컨테이너입니다.</p>
//       </Container>
//     </div>
//   );
// }

// export default App;




// import React from 'react';

// // Box 컴포넌트 정의
// function Box({ children }) {
//   return (
//     <div style={{ border: '2px solid #ccc', padding: '20px', margin: '10px' }}>
//       {children}
//     </div>
//   );
// }

// // 사용 예시
// function App() {
//   return (
//     <div>
//       <Box>
//         <h1>첫 번째 Box</h1>
//         <p>이것은 첫 번째 Box의 내용입니다.</p>
//       </Box>
//       <Box>
//         <h2>두 번째 Box</h2>
//         <ul>
//           <li>아이템 1</li>
//           <li>아이템 2</li>
//           <li>아이템 3</li>
//         </ul>
//       </Box>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import My from './components/My';
// import './styles.css'; // 스타일을 임포트합니다.

// const SampleSession = {
//   loginUser: { id: 1, name: 'Hong', age: 34 },
//   cart: [
//     { id: 100, name: '라면', price: 3000 },
//     { id: 101, name: '컵라면', price: 2000 },
//     { id: 200, name: '파', price: 5000 },
//   ],
// };

// function App() {
//   const [session, setSession] = useState(SampleSession);

//   const logout = () => {
//     setSession({
//       ...session,
//       loginUser: null,
//     });
//   };

//   return (
//     <div className="app-container">
//       <My session={session} logout={logout} />
//     </div>
//   );
// }

// export default App;



// import React from "react";
// import Login from "./Login";
// import Profile from "./Profile";
// interface User {
//   id: number;
//   name: string;
// }

// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
// }

// interface Session {
//   loginUser: User | null;
//   cart: CartItem[];
// }

// interface MyProps {
//   session: Session;
//   login: (id: number, name: string) => void;
//   logout: () => void;
// }

// const My: React.FC<MyProps> = ({ session, logout, login }) => {
//   return (
//     <div className="my-container">
//       {session.loginUser ? (
//         <Profile user={session.loginUser} logout={logout}></Profile>
//       ) : (
//         <Login login={login} />
//       )}
//       <ul className="cart-list">
//         {session.cart.map((item) => (
//           <li key={item.id} className="cart-item">
//             {item.name} ({item.price.toLocaleString()}원)
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default My;
