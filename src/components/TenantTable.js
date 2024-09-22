import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import LoadingAnimation from "./LoadingAnimation";
import { Table, Button } from "flowbite-react";

function TenantTable({ tenants, onDelete, onLogClick, onDatapackClick }) {
  return (
    <Table className="border-collapse border border-slate-400">
      <Table.Head className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell>Tenant Name</Table.HeadCell>
        <Table.HeadCell>Flavor</Table.HeadCell>
        <Table.HeadCell>License Type</Table.HeadCell>
        <Table.HeadCell>Expiration Date</Table.HeadCell>
        <Table.HeadCell>Actions</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {tenants.map((tenant) => (
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
            <Table.Cell>{tenant.expirationDate}</Table.Cell>
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
  );
}

export default TenantTable;
