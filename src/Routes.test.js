import React from "react";
import Enzyme, { shallow } from "enzyme";
import Routes from "./Routes";
import Home from "./component/Home";
import Result from "./component/Result";
import Form from "./component/Form";
import AllUsers from "./component/AllUsers";
import UpdateForm from "./component/UpdateForm";
import { Route } from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
let pathMap = {};
describe("routes using array of routers", () => {
  beforeAll(() => {
    const component = shallow(<Routes />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });
  it("should show Home component for / router ", () => {
    expect(pathMap["/home"]).toBe(Home);
  });
  it("should show Form component for /form router", () => {
    expect(pathMap["/form"]).toBe(Form);
  });
  it("should show AllUser component techdomain for /allusers", () => {
    expect(pathMap["/allusers"]).toBe(AllUsers);
  });
  it("should show Result component for /result router", () => {
    expect(pathMap["/result"]).toBe(Result);
  });
  it("should show UpdateForm component techdomain for /allusers", () => {
    expect(pathMap["/updateform"]).toBe(UpdateForm);
  });
});
