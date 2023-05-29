import { RedCounter } from "./counters/RedCounter";
import { BlueCounter } from "./counters/BlueCounter";
import { YellowCounter } from "./counters/YellowCounter";
import { ExternalOutput } from "./counters/ExternalOutput";

export const App = () => {
  return (
    <div className={"root"}>
      <RedCounter>
        <BlueCounter>
          <YellowCounter />
        </BlueCounter>
      </RedCounter>

      <ExternalOutput />
    </div>
  );
};
