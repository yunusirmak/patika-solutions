import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("App tests", () => {
  let title, input;
  beforeEach(() => {
    render(<App />);
    title = screen.getByText("Emoji Search");
    input = screen.getByRole("search");
  });
  //First test
  test("Should have a title called Emoji Search", () => {
    expect(title).toBeInTheDocument();
  });
  //Second test
  test("Should render 20 emojis with a click to copy message in them", () => {
    const copyEmoji = screen.getAllByText("Click to copy emoji");
    expect(copyEmoji.length).toEqual(20);
  });
  //Third test
  test("Should find the emoji user searches for", () => {
    const emojiName = "dolph";
    userEvent.type(input, emojiName);
    expect(screen.getByText("Dolphin")).toBeInTheDocument();
  });
});
