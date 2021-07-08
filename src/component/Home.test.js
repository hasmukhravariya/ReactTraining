import Enzyme, { shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter as Router } from "react-router-dom";
import Home from "./Home";

Enzyme.configure({ adapter: new Adapter() });

describe("Home component", () => {
  const wrapper = render(
    <Router>
      <Home />
    </Router>
  );
  it("renders Home component without crashing", () => {
    shallow(<Home />);
  });

  it("to check 2 links renders properly", () => {
    expect(wrapper.find(".button")).toHaveLength(2);
  });

  it("to check 2 links routes properly", () => {
    const add = wrapper.find("#add");
    const view = wrapper.find("#view");
    // console.log(add.text());
    expect(add.text()).toEqual("Add User");
    expect(view.text()).toEqual("View Users");
    expect(add.prop("href")).toBe("/form");
    expect(view.prop("href")).toBe("/allusers");
  });
});
