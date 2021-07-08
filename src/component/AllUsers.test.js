import { MemoryRouter as Router } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import AllUsers from "./AllUsers";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
// import { deleteUser } from "../actions/UserActions";

const mockStore = configureStore([thunk]);

Enzyme.configure({ adapter: new Adapter() });
describe("AllUsers component", () => {
  let store;
  let wrapper;
  let InitialState = {
    user: {
      users: [
        {
          name: "Hasmukh",
          id: "1",
          gender: "Male",
          country: "India",
          email: "Hasmukh16000@gmail.com",
          phone: "9820115228",
          password: "Hqwe@1234",
          description: "Hello"
        },
        {
          name: "Hitesh",
          id: "2",
          gender: "Male",
          country: "India",
          email: "Hasmukh@gmail.com",
          phone: "9768873575",
          password: "Qwerty@12345",
          description: "Hii"
        }
      ]
    }
  };

  beforeEach(() => {
    store = mockStore(InitialState);

    store.dispatch = jest.fn();
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <AllUsers />
        </Router>
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });

  it("renders Form component without crashing", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
    expect(wrapper.find("h1").text()).toEqual("Users Detail Table");
  });

  it("to check back link routes properly", () => {
    // console.log(wrapper.debug());
    const back = wrapper.find("Link");
    expect(back.text()).toEqual("Back");
    expect(back.prop("to")).toBe("/");
  });

  it("passes data from store state ", () => {
    expect(wrapper.props().users).toBe(InitialState.user.user);
  });

  it("calls a thunk-dispatched action", () => {
    // const id = "1";
    // console.log(wrapper.find("#delete").text());
    // expect(store.getActions()).toContainEqual(saveColor({ color }));
  });
});
