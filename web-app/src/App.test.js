import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, getByTestId, getByText } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import Dashboard from './Dashboard';

describe("<Display />", () => {
  it("renders without crashing using ReactDOM", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without crashing", () => {
    render(<Dashboard />);
  });

  it("renders strike numbers", () => {
    const { findAllByText, getByText }= render(<Dashboard />);
    let button = getByText(/Striike/)
    
    fireEvent.click(button);
    findAllByText(/Strike:1/);
    fireEvent.click(button);
    findAllByText(/Strike:2/)
    fireEvent.click(button);
    findAllByText(/Strike:3/)
    fireEvent.click(button);
    findAllByText(/Strike:0/)
    findAllByText(/Hit:0/)

  });

  it("renders strike numbers", () => {
    const {  findAllByText, getByText }= render(<Dashboard />);
    let button = getByText(/Striike/)
    
    fireEvent.click(button);
    findAllByText(/Strike:1/);
    fireEvent.click(button);
    findAllByText(/Strike:2/)
    fireEvent.click(button);
    findAllByText(/Strike:3/)
    fireEvent.click(button);
    findAllByText(/Strike:0/)
    findAllByText(/Hit:0/)

  });

  it("renders strike numbers", () => {
    const { findAllByText, getByText }= render(<Dashboard />);
    let button = getByText(/Balls/)
    
    fireEvent.click(button);
    findAllByText(/Ball:1/);
    fireEvent.click(button);
    findAllByText(/Ball:2/)
    fireEvent.click(button);
    findAllByText(/Ball:3/)
    fireEvent.click(button);
    findAllByText(/Ball:3/)
    fireEvent.click(button);
    findAllByText(/Ball:4/)
    fireEvent.click(button);
    findAllByText(/Ball:0/)
    findAllByText(/Hit:0/)

  });

  it("renders strike numbers", () => {
    const { findAllByText, getByText }= render(<Dashboard />);
    let button = getByText(/Foul/)

    fireEvent.click(button);
    findAllByText(/Strike:1/);
    fireEvent.click(button);
    findAllByText(/Strike:2/)
    fireEvent.click(button);
    findAllByText(/Strike:2/)

  });
  
  
  
});