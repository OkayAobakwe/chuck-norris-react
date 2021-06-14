import { Home } from "../../pages/Home";
import { render } from "@testing-library/react";

describe("Home Page", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = render(<Home />);
  });

  it("renders successfully", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
