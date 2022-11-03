import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Task text", () => {
  render(<App />);

  const Task = screen.getByText("Task");
  expect(Task).toBeDefined();
});
