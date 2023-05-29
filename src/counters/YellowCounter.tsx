import { AtomicVariable, useVariable } from "../variable";
import { ReactNode } from "react";

export const YellowCounterVariable = new AtomicVariable(0);

type Props = {
  children?: ReactNode;
};

let numRenders = 0;

export const YellowCounter = ({ children }: Props) => {
  const [counter, setCounter] = useVariable(YellowCounterVariable);

  numRenders++;

  return (
    <div className={"counter yellow"}>
      <p>Yellow Counter: {counter}</p>
      <p>Times Rendered: {numRenders}</p>

      <button onClick={() => setCounter((c) => c + 1)}>Increment</button>
      <button onClick={() => setCounter((c) => c - 1)}>Decrement</button>

      {children}
    </div>
  );
};
