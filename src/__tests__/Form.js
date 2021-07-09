import { MemoryRouter as Router } from "react-router-dom";
import { render as rtlRender, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import Reducer from "../reducer/index";
import Form from "../component/Form";

const initialReducerState = {
  save: {
    name: "",
    id: "",
    gender: "",
    country: "",
    email: "",
    phone: "",
    password: "",
    description: ""
  },
  user: { users: [] }
};

const render = (
  ui,
  {
    initialState = initialReducerState,
    store = createStore(Reducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

test("can render with redux with defaults", () => {
  render(
    <Router>
      <Form />
    </Router>
  );
  // console.log(screen);
  // userEvent.click(screen.getByText('+'))

  // expect(screen.getByText('count-value')).toHaveTextContent('1')
});
