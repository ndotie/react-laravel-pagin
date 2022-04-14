import React from "react";
import { storiesOf } from "@storybook/react";

import { Just } from "../lib";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return <Just />;
});
