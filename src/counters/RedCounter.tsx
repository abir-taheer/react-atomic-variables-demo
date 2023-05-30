import { AtomicVariable, useVariable } from "react-atomic-variables";
import { ReactNode } from "react";

export const RedCounterVariable = new AtomicVariable(0);

type Props = {
  children?: ReactNode;
};

let numRenders = 0;

export const RedCounter = ({ children }: Props) => {
  const [counter, setCounter] = useVariable(RedCounterVariable);

  numRenders++;

  return (
    <div className={"counter red"}>
      <p>Red Counter: {counter}</p>
      <p>Times Rendered: {numRenders}</p>

      <button onClick={() => setCounter((c) => c + 1)}>Increment</button>
      <button onClick={() => setCounter((c) => c - 1)}>Decrement</button>
      {children}
    </div>
  );
};
