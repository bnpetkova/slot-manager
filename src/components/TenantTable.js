import React, { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import LoadingAnimation from "./LoadingAnimation";
import { Table, Button } from "flowbite-react";
import LicenseManagementModal from "./LicenseManagementModal";

function TenantTable({ tenants, onDelete, onLogClick, onDatapackClick }) {
  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleExpirationClick = (tenant) => {
    setSelectedTenant(tenant);
    setIsLicenseModalOpen(true);
  };

  const handleLicenseModalClose = () => {
    setIsLicenseModalOpen(false);
    setSelectedTenant(null);
  };

  const handleLicenseUpdate = (tenantName) => {
    console.log("License updated for", tenantName);
    setIsLicenseModalOpen(false);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedTenants = [...tenants].sort((a, b) => {
    if (sortConfig.key) {
      const order = sortConfig.direction === "asc" ? 1 : -1;
      if (a[sortConfig.key] < b[sortConfig.key]) return -order;
      if (a[sortConfig.key] > b[sortConfig.key]) return order;
    }
    return 0;
  });

  return (
    <>
      <Table className="border-collapse border border-slate-400">
        <Table.Head className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <Table.HeadCell
            onClick={() => handleSort("status")}
            className="cursor-pointer"
          >
            Status{" "}
            {sortConfig.key === "status" &&
              (sortConfig.direction === "asc" ? "↑" : "↓")}
          </Table.HeadCell>
          <Table.HeadCell
            onClick={() => handleSort("name")}
            className="cursor-pointer"
          >
            Tenant Name{" "}
            {sortConfig.key === "name" &&
              (sortConfig.direction === "asc" ? "↑" : "↓")}
          </Table.HeadCell>
          <Table.HeadCell
            onClick={() => handleSort("flavor")}
            className="cursor-pointer"
          >
            Flavor{" "}
            {sortConfig.key === "flavor" &&
              (sortConfig.direction === "asc" ? "↑" : "↓")}
          </Table.HeadCell>
          <Table.HeadCell
            onClick={() => handleSort("licenseType")}
            className="cursor-pointer"
          >
            License Type{" "}
            {sortConfig.key === "licenseType" &&
              (sortConfig.direction === "asc" ? "↑" : "↓")}
          </Table.HeadCell>
          <Table.HeadCell
            onClick={() => handleSort("expirationDate")}
            className="cursor-pointer"
          >
            Expiration Date{" "}
            {sortConfig.key === "expirationDate" &&
              (sortConfig.direction === "asc" ? "↑" : "↓")}
          </Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {sortedTenants.map((tenant) => (
            <Table.Row
              key={tenant.id}
              className="border-collapse border border-slate-400"
            >
              <Table.Cell>
                {tenant.status === "inprogress" && (
                  <LoadingAnimation
                    tenantName={tenant.name}
                    onTenantClick={onLogClick}
                  />
                )}
                {tenant.status === "completed" && (
                  <FaCheckCircle
                    className="text-green-500"
                    data-testid="completed-icon"
                  />
                )}
                {tenant.status === "failed" && (
                  <FaTimesCircle
                    className="text-red-500"
                    data-testid="failed-icon"
                  />
                )}
                {tenant.status === "existing" && (
                  <FaExclamationCircle
                    className="text-yellow-500"
                    data-testid="existing-icon"
                  />
                )}
              </Table.Cell>
              <Table.Cell>{tenant.name}</Table.Cell>
              <Table.Cell>{tenant.flavor}</Table.Cell>
              <Table.Cell>{tenant.licenseType}</Table.Cell>
              <Table.Cell>
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => handleExpirationClick(tenant)}
                >
                  {tenant.expirationDate}
                </span>
              </Table.Cell>
              <Table.Cell className="flex space-x-2">
                <Button
                  onClick={() => onLogClick(tenant.name)}
                  className="text-blue-500 bg-transparent hover:text-blue-700"
                >
                  Logs
                </Button>
                <Button
                  onClick={() => onDatapackClick(tenant.name)}
                  className="text-blue-500 bg-transparent hover:text-blue-700"
                >
                  Datapacks
                </Button>
                <Button
                  onClick={() => onDelete(tenant.id)}
                  className="text-red-500 bg-transparent hover:text-red-700"
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      {selectedTenant && (
        <LicenseManagementModal
          open={isLicenseModalOpen}
          onClose={handleLicenseModalClose}
          onUpdate={handleLicenseUpdate}
          tenantName={selectedTenant.name}
        />
      )}
    </>
  );
}



export default TenantTable;
