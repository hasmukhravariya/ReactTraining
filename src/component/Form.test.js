import { MemoryRouter as Router } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import Form from "./Form";
// import { addUser } from "../actions/UserActions";
// import { save } from "../actions/SaveActions";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureStore([thunk]);

Enzyme.configure({ adapter: new Adapter() });

describe("Form component", () => {
  let store;
  // let component;
  let wrapper;
  const initialstate = {
    id: 0,
    name: "",
    gender: "",
    country: "",
    email: "",
    phone: "",
    password: "",
    description: ""
  };

  beforeEach(() => {
    store = mockStore(initialstate);

    store.dispatch = jest.fn();
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <Form />
        </Router>
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });

  it("renders Form component without crashing", () => {
    expect(wrapper.find(".container")).toHaveLength(1);
  });

  it("to check link routes properly", () => {
    const back = wrapper.find("Link");
    expect(back.text()).toEqual("Back");
    expect(back.prop("to")).toBe("/");
  });

  it("to check form flieds", () => {
    wrapper
      .find("#name")
      .simulate("change", { target: { name: "name", value: "Hasmukh" } });
    expect(wrapper.find("#name").prop("value")).toEqual("Hasmukh");
    wrapper
      .find("#phone")
      .simulate("change", { target: { name: "phone", value: "9820115228" } });
    expect(wrapper.find("#phone").prop("value")).toEqual("9820115228");
    wrapper.find("#email").simulate("change", {
      target: { name: "email", value: "Hasmukh16000@gmail.com" }
    });
    expect(wrapper.find("#email").prop("value")).toEqual(
      "Hasmukh16000@gmail.com"
    );
    wrapper.find("#password").simulate("change", {
      target: { name: "password", value: "Hasmukh@16699" }
    });
    expect(wrapper.find("#password").prop("value")).toEqual("Hasmukh@16699");
    wrapper.find("#description").simulate("change", {
      target: { name: "description", value: "Hello There" }
    });
    expect(wrapper.find("#description").prop("value")).toEqual("Hello There");
    wrapper
      .find("#gender")
      .at(1)
      .simulate("change", { target: { checked: true } });
    // console.log(wrapper.find("#description").prop("value"));
  });

  it("to check submit with zero values", () => {
    wrapper.find("select").simulate("change", 0);
    // wrapper
    //   .find("#name")
    //   .simulate("change", { target: { name: "name", value: "Hasmukh" } });
    // wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    // expect(store.dispatch).toHaveBeenCalledTimes(1);
    // expect(store.dispatch).toHaveBeenCalledWith(
    //   save({ payload: "some other text" })
    // );
  });
});
