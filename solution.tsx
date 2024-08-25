import React from 'react';

// Step 1: Define the Props interface
interface GreetingProps {
  name: string; // 'name' prop should be a string
}

// Step 2: Annotate the props in the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Step 3: Return JSX with type safety
  return <div>Hello, {name}!</div>;
};

export default Greeting;
