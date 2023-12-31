import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
  }
  
  const Container: React.FC<ContainerProps> = ({ children }) => (
    <div className="container mx-auto">
      {children}
    </div>
  );

export default Container