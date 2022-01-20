import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import Story from "./components/Story";

test("Story Renders Correctly", () => {
  render(<Story title="Story 1" text="Episode 1" />);
  const title = screen.getByText(/Story 1/i);
  expect(title).toBeInTheDocument();
});

test("Renders Excercise", () => {
  render(<App />);
  const excercise = screen.getByTestId("excercise");
  expect(excercise).toBeInTheDocument();
});

test("Excercise Button Click", async () => {
  render(<App />);
  const buttons = screen.getAllByTestId("wordButton");
  buttons.map((button) => {
    fireEvent.click(button);
  });
  let answer = await waitFor(() => screen.getByTestId("answer"));
  //let answerArr = answer.split(" ")
  expect(answer).toBeInTheDocument()
});
