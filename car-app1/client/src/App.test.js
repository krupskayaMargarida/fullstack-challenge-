import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders car app on nav bar", () => {
  render(<App />);
  const linkElement = screen.getByText(/car app/i);
  expect(linkElement).toBeInTheDocument();
});
