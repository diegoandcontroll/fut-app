import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { dataTable } from "../../utils";
import { Table } from "../table";
describe("Table", () => {
  const data = dataTable;

  it("should render table with correct data", () => {
    render(<Table data={data} />);

    // Check table head
    expect(screen.getByText("t.jog")).toBeInTheDocument();
    expect(screen.getByText("t.vit")).toBeInTheDocument();
    expect(screen.getByText("t.der")).toBeInTheDocument();
    expect(screen.getByText("t.emp")).toBeInTheDocument();

    // Check table body
    data.forEach(({ games, victories, defeats, draws }) => {
      expect(screen.getAllByText(games)[0]).toBeInTheDocument();
      expect(screen.getAllByText(victories)[0]).toBeInTheDocument();
      expect(screen.getAllByText(defeats)[0]).toBeInTheDocument();
      expect(screen.getAllByText(draws)[0]).toBeInTheDocument();
    });
  });
});
