import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Home from "../component/Home";

test("Test that link are route properly", () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  expect(screen.getByText("Add User").closest("a")).toHaveAttribute(
    "href",
    "/form"
  );
  expect(screen.getByText("View Users").closest("a")).toHaveAttribute(
    "href",
    "/allusers"
  );
});
