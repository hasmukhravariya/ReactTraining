import { MemoryRouter as Router } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import UpdateForm from "./UpdateForm";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { editUser } from "../actions/UserActions";

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
    const history = { push: jest.fn() };
    // const editUser = editUser;

    let props = {
      history: history,
      editUser: editUser,
      location: {
        state: {
          name: "Hasmukh",
          id: "1",
          gender: "Male",
          country: "India",
          email: "Hasmukh16000@gmail.com",
          phone: "9820115228",
          password: "Hqwe@1234",
          description: "Hello"
        }
      }
    };

    store.dispatch = jest.fn();
    wrapper = mount(
      <Provider store={store}>
        <Router>
          <UpdateForm {...props} />
        </Router>
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
    jest.clearAllMocks();
  });

  it("renders Form component without crashing", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find("h1")).toHaveLength(1);
    expect(wrapper.find("h1").text()).toEqual("Edit User Details Form");
  });

  it("to check back link routes properly", () => {
    // console.log(wrapper.debug());
    const back = wrapper.find("Link");
    expect(back.text()).toEqual("Back");
    expect(back.prop("to")).toBe("/");
  });

  it("passed data present in store state ", () => {
    wrapper.find("#name").simulate("change", {
      target: { name: "name", value: "Hasmukh Ravariya" }
    });
    expect(wrapper.find("#name").prop("value")).toEqual("Hasmukh Ravariya");
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
