import { render } from "@testing-library/react";

import Wizard from "./Wizard";

describe("Checklist", () => {
  it("renders correctly", () => {
    render(<Wizard activeStep={0} />);
  });
});
