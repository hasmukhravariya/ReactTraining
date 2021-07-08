// import { Link, MemoryRouter as Router } from 'react-router-dom';
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
    // console.log(shallow(<App />));
  });
});
