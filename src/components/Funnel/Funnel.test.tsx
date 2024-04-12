import { act, render } from "@testing-library/react";
import Funnel from "./Funnel";

describe("Funnel", () => {
  it("should render", () => {
    render(<Funnel />);
  });

  it("should render a button with the text start to find therapy", () => {
    // when
    const { getByText } = render(<Funnel />);

    // then
    expect(getByText("FIND_THERAPY_STEP_BUTTON_TEXT")).toBeInTheDocument();
  });

  it("should move to the next step when the button is clicked", async () => {
    // given
    const { getByText, findAllByText } = render(<Funnel />);
    const button = getByText("FIND_THERAPY_STEP_BUTTON_TEXT");

    // when
    act(() => button.click());

    // then
    expect((await findAllByText("CONSULTATION_STEP_TITLE")).length).toBe(2);
  });

  it("should render a success button from the second page", () => {
    // given
    const { getByText } = render(<Funnel />);
    // when
    act(() => getByText("FIND_THERAPY_STEP_BUTTON_TEXT").click());
    // then
    expect(getByText("SUCCESS_BUTTON")).toBeInTheDocument();
  });

  it("should render a help button", () => {
    // given
    const { getByText } = render(<Funnel />);
    // when
    act(() => getByText("FIND_THERAPY_STEP_BUTTON_TEXT").click());
    // then
    expect(getByText("HELP_BUTTON")).toBeInTheDocument();
  });

  it("should render a back button", () => {
    // given
    const { getByText } = render(<Funnel />);
    // when
    act(() => getByText("FIND_THERAPY_STEP_BUTTON_TEXT").click());
    // then
    expect(getByText("STEP_BACK_BUTTON")).toBeInTheDocument();
  });
});
