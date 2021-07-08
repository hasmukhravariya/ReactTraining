import { MemoryRouter as Router } from "react-router-dom";
import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Result from "./Result";

Enzyme.configure({ adapter: new Adapter() });

describe("Result component", () => {
  it("renders Result component without crashing", () => {
    render(
      <Router>
        <Result />
      </Router>
    );
  });

  it("to check link routes properly", () => {
    const wrapper = render(
      <Router>
        <Result />
      </Router>
    );
    const back = wrapper.find("#back");
    expect(back.text()).toEqual("Back");
    expect(back.prop("href")).toBe("/");
  });
});
