import React from "react";
import { render, screen } from "@testing-library/react";
import TenantTable from "./TenantTable";

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

  test("renders the correct number of rows based on tenants", () => {
    render(
      <TenantTable
        tenants={tenants}
        onDelete={mockDelete}
        onLogClick={mockLogClick}
        onDatapackClick={mockDatapackClick}
        onTenantClick={mockTenantClick}
      />
    );

    const rows = screen.getAllByRole("row");
    
    expect(rows.length - 1).toBe(tenants.length);
  });
});
