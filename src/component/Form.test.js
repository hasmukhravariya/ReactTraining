import { Link, MemoryRouter as Router } from 'react-router-dom';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from "react-redux";
import Form from "./Form"
import {  addUser } from "../actions/UserActions";
import { save } from "../actions/SaveActions";
import configureStore from 'redux-mock-store';
 
const mockStore = configureStore([]);

Enzyme.configure({ adapter: new Adapter() })

describe("Home component", () => {

  let store;
  let component;
  let wrapper;
  const initialstate={
      emailError: "",
      phoneError: "",
      passError: "",
      error: "",
      obj: {
        id: 0,
        name: "",
        gender: "",
        country: "",
        email: "",
        phone: "",
        password: "",
        description: ""
      }
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

  afterEach(() => wrapper.unmount());

  it("renders Form component without crashing", () => {
     expect(wrapper.find(".container")).toHaveLength(1);
  });

  it("to check link routes properly", () => {
    const back=wrapper.find("Link");
    expect(back.text()).toEqual('Back');
    expect(back.prop('to')).toBe('/');
  });

  it("to check form flieds", () => {
    const form=wrapper.find("textarea");
    console.log(form.text())
  });

});