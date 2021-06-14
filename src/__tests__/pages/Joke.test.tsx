import { Joke } from "../../pages/Joke";
import { render } from "@testing-library/react";

describe("Home Page", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = render(<Joke />);
  });

  it("renders successfully", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
