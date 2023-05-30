import { RedCounter } from "./counters/RedCounter";
import { BlueCounter } from "./counters/BlueCounter";
import { YellowCounter } from "./counters/YellowCounter";
import { ExternalOutput } from "./counters/ExternalOutput";

export const App = () => {
  return (
    <div>
      <p className={"text-center"}>
        View the source on{" "}
        <a
          href={"https://github.com/abir-taheer/react-atomic-variables-demo"}
          target={"_blank"}
        >
          Github
        </a>
      </p>

      <div className={"root"}>
        <RedCounter>
          <BlueCounter>
            <YellowCounter />
          </BlueCounter>
        </RedCounter>

        <ExternalOutput />
      </div>
    </div>
  );
};
