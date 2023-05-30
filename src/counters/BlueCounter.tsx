import { AtomicVariable, useVariable } from "react-atomic-variables";
import { ReactNode } from "react";

export const BlueCounterVariable = new AtomicVariable(0);

type Props = {
  children?: ReactNode;
};

let numRenders = 0;

export const BlueCounter = ({ children }: Props) => {
  const [counter, setCounter] = useVariable(BlueCounterVariable);

  numRenders++;

  return (
    <div className={"counter blue"}>
      <p>Blue Counter: {counter}</p>
      <p>Times Rendered: {numRenders}</p>

      <button onClick={() => setCounter((c) => c + 1)}>Increment</button>
      <button onClick={() => setCounter((c) => c - 1)}>Decrement</button>

      {children}
    </div>
  );
};
