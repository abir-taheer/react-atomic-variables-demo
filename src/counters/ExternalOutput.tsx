import { useValue } from "../variable";
import { RedCounterVariable } from "./RedCounter";
import { BlueCounterVariable } from "./BlueCounter";
import { YellowCounterVariable } from "./YellowCounter";

let numRenders = 0;

export const ExternalOutput = () => {
  const red = useValue(RedCounterVariable);
  const blue = useValue(BlueCounterVariable);
  const yellow = useValue(YellowCounterVariable);

  numRenders++;

  return (
    <div className={"external"}>
      <p>This is a separate component that listens to all of the variables</p>
      <p>Red: {red}</p>
      <p>Blue: {blue}</p>
      <p>Yellow: {yellow}</p>
      <p>This component was rendered {numRenders} times</p>
    </div>
  );
};
