import React, { PropsWithChildren } from "react";

// Container 컴포넌트 정의
interface ContainerProps {
  backgroundColor: string;
}

const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  backgroundColor,
  children,
}) => {
  return (
    <div style={{ backgroundColor, padding: "20px", margin: "10px" }}>
      {children}
    </div>
  );
};

export default Container;