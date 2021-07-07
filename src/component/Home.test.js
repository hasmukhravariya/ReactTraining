import { Link, MemoryRouter as Router } from 'react-router-dom';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Home from "./Home"

Enzyme.configure({ adapter: new Adapter() })

describe("Home component", () => {
  const wrapper = render(<Router>
            <Home />
          </Router>,);
  it("renders Home component without crashing", () => {
    shallow(<Home />);
  });

  it("to check 2 links renders properly", () => {
     expect(wrapper.find(".button")).toHaveLength(2);
  });

  it("to check 2 links routes properly", () => {
    const add=wrapper.find("#add");
    const view=wrapper.find("#view");
    expect(add.text()).toEqual('Add User');
    expect(view.text()).toEqual('View Users');
    expect(add.prop('href')).toBe('/form');
    expect(view.prop('href')).toBe('/allusers');
  });

});



