import { render } from "@testing-library/react";
import ConsultationStep from "./ConsultationStep";

describe("ConsultationStep", () => {
  it("should render", () => {
    render(<ConsultationStep />);
  });

  it("should show a title", () => {
    // when
    const { getByText } = render(<ConsultationStep />);

    // then
    expect(getByText("CONSULTATION_STEP_TITLE")).toBeInTheDocument();
  });
});
