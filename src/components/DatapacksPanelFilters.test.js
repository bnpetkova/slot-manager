import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DatapacksPanel from "./DatapacksPanel"; 

describe("DatapacksPanel Component", () => {
  const datapacks = [
    { id: 1, name: "Datapack A", description: "Description A" },
    { id: 2, name: "Datapack B", description: "Description B" },
    { id: 3, name: "Datapack C", description: "Description C" },
  ];

  test("renders all datapacks initially", () => {
    render(<DatapacksPanel datapacks={datapacks} />);
    
    expect(screen.getByText("Datapack A")).toBeInTheDocument();
    expect(screen.getByText("Datapack B")).toBeInTheDocument();
    expect(screen.getByText("Datapack C")).toBeInTheDocument();
  });

  test("filters datapacks by name and description", () => {
    render(<DatapacksPanel datapacks={datapacks} />);
    
    fireEvent.change(screen.getByPlaceholderText("Enter name or description"), {
      target: { value: "A" },
    });
    
    expect(screen.getByText("Datapack A")).toBeInTheDocument();
    expect(screen.queryByText("Datapack B")).toBeNull();
    expect(screen.queryByText("Datapack C")).toBeNull();
  });

  test("filters datapacks by checked status", () => {
    render(<DatapacksPanel datapacks={datapacks} />);
    
    fireEvent.click(screen.getByText("Datapack A").closest("tr").querySelector("input[type='checkbox']"));
    
    fireEvent.change(screen.getByLabelText("Filter"), {
      target: { value: "checked" },
    });
    
    expect(screen.getByText("Datapack A")).toBeInTheDocument();
    expect(screen.queryByText("Datapack B")).toBeNull();
    expect(screen.queryByText("Datapack C")).toBeNull();
  });

  test("filters datapacks by unchecked status", () => {
    render(<DatapacksPanel datapacks={datapacks} />);
    
    fireEvent.click(screen.getByText("Datapack B").closest("tr").querySelector("input[type='checkbox']"));
    
    fireEvent.change(screen.getByLabelText("Filter"), {
      target: { value: "unchecked" },
    });
    
    expect(screen.getByText("Datapack A")).toBeInTheDocument();
    expect(screen.queryByText("Datapack B")).toBeNull();
    expect(screen.getByText("Datapack C")).toBeInTheDocument();
  });

  test("handles the 'Uncheck all' action", () => {
    render(<DatapacksPanel datapacks={datapacks} />);
    
    fireEvent.click(screen.getByText("Datapack A").closest("tr").querySelector("input[type='checkbox']"));
    fireEvent.click(screen.getByText("Datapack B").closest("tr").querySelector("input[type='checkbox']"));
    
    fireEvent.click(screen.getByText("Uncheck all"));
    
    expect(screen.getByText("Datapack A").closest("tr").querySelector("input[type='checkbox']").checked).toBe(false);
    expect(screen.getByText("Datapack B").closest("tr").querySelector("input[type='checkbox']").checked).toBe(false);
    expect(screen.getByText("Datapack C").closest("tr").querySelector("input[type='checkbox']").checked).toBe(false);
  });
});
