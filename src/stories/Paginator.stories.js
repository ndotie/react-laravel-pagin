import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { ReactLaravelPagin } from "../lib";

const stories = storiesOf("App Paginator", module);

stories.add("Paginator", () => {
  const [results, setResults] = useState();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <ReactLaravelPagin
      baseLink="http://localhost:8000/api/testroute"
      setIsLoading={setIsLoading}
      dataPicker={(data) => data.trips}
      setDataList={setResults}
    />
  );
});
