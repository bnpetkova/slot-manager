import React from "react";
import { render, screen } from "@testing-library/react";
import TenantTable from "./TenantTable";
import userEvent from "@testing-library/user-event";

jest.mock("./LoadingAnimation", () => ({ tenantName }) => (
  <div data-testid="loading-animation">Loading {tenantName}</div>
));

describe("TenantTable Component", () => {
  const tenants = [
    { id: 1, name: "John Doe", flavor: "Vanilla", licenseType: "Standard", expirationDate: "2024-12-31", status: "existing" },
    { id: 2, name: "Jane Smith", flavor: "Chocolate", licenseType: "Full", expirationDate: "2025-05-20", status: "inprogress" },
    { id: 3, name: "Jim Brown", flavor: "Caramel", licenseType: "Standard", expirationDate: "2023-12-31", status: "completed" },
    { id: 4, name: "Kate Wilson", flavor: "Strawberry", licenseType: "Full", expirationDate: "2026-03-01", status: "failed" },
  ];

  const mockDelete = jest.fn();
  const mockLogClick = jest.fn();
  const mockDatapackClick = jest.fn();
  const mockTenantClick = jest.fn();

  test("renders the exclamation icon for 'existing'", () => {
    render(
      <TenantTable
        tenants={tenants}
        onDelete={mockDelete}
        onLogClick={mockLogClick}
        onDatapackClick={mockDatapackClick}
        onTenantClick={mockTenantClick}
      />
    );
    const existingIcon = screen.getByTestId("existing-icon");
    expect(existingIcon).toBeInTheDocument();
  });

  test("renders the loading animation for 'inprogress'", () => {
    render(
      <TenantTable
        tenants={tenants}
        onDelete={mockDelete}
        onLogClick={mockLogClick}
        onDatapackClick={mockDatapackClick}
        onTenantClick={mockTenantClick}
      />
    );
    const loadingAnimation = screen.getByTestId("loading-animation");
    expect(loadingAnimation).toBeInTheDocument();
    expect(loadingAnimation).toHaveTextContent("Loading Jane Smith");
  });

  test("renders the check circle icon for 'completed'", () => {
    render(
      <TenantTable
        tenants={tenants}
        onDelete={mockDelete}
        onLogClick={mockLogClick}
        onDatapackClick={mockDatapackClick}
        onTenantClick={mockTenantClick}
      />
    );
    const completedIcon = screen.getByTestId("completed-icon");
    expect(completedIcon).toBeInTheDocument();
  });

  test("renders the times circle icon for 'failed'", () => {
    render(
      <TenantTable
        tenants={tenants}
        onDelete={mockDelete}
        onLogClick={mockLogClick}
        onDatapackClick={mockDatapackClick}
        onTenantClick={mockTenantClick}
      />
    );
    const failedIcon = screen.getByTestId("failed-icon");
    expect(failedIcon).toBeInTheDocument();
  });

  test("calls delete handler when delete button is clicked", () => {
    render(
      <TenantTable
        tenants={tenants}
        onDelete={mockDelete}
        onLogClick={mockLogClick}
        onDatapackClick={mockDatapackClick}
        onTenantClick={mockTenantClick}
      />
    );
    const deleteButton = screen.getAllByText("Delete")[0];
    userEvent.click(deleteButton);
    expect(mockDelete).toHaveBeenCalledWith(1); 
  });
});
