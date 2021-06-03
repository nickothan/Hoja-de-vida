import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders react", () => {
  render(<App />);
  const githubLink = screen.getByText(/nickothan/i);
  expect(githubLink).toBeInTheDocument();
});
