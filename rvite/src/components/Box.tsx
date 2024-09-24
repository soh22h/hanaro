// Box 컴포넌트 정의
function Box({ children}) {
  return (
    <div style={{ border: '2px solid #ccc', padding: '20px', margin: '10px' }}>
      {children}
    </div>
  );
}

export default Box;