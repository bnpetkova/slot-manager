import React, { useState } from "react";
import { Table, Button } from "flowbite-react";
import CopyExistingTenant from "./CopyExistingTenant.js";
import TenantInfoModal from "./TenantInfoModal.js";

const initialTenants = [
  {
    id: 1,
    name: "John Doe",
    flavor: "Vanilla",
    licenseType: "Standard",
    expirationDate: "2024-12-31",
  },
  {
    id: 2,
    name: "Mary Jane",
    flavor: "Chocolate",
    licenseType: "Full",
    expirationDate: "2025-11-30",
  },
  {
    id: 3,
    name: "Jack Black",
    flavor: "Caramel",
    licenseType: "Full",
    expirationDate: "2025-08-14",
  },
  {
    id: 4,
    name: "Alice White",
    flavor: "Peach",
    licenseType: "Standard",
    expirationDate: "2024-12-12",
  },
  {
    id: 5,
    name: "Barry Brown",
    flavor: "Strawberry",
    licenseType: "Full",
    expirationDate: "2025-03-20",
  },
  {
    id: 6,
    name: "Millie Green",
    flavor: "Kiwi",
    licenseType: "Standard",
    expirationDate: "2025-11-25",
  },
  {
    id: 7,
    name: "Alexander Shultz",
    flavor: "Chocolate",
    licenseType: "Full",
    expirationDate: "2026-05-15",
  },
  {
    id: 8,
    name: "Katelin Chan",
    flavor: "Cherry",
    licenseType: "Full",
    expirationDate: "2025-09-17",
  },
  {
    id: 9,
    name: "Billie Maquire",
    flavor: "Blueberry",
    licenseType: "Full",
    expirationDate: "2025-07-07",
  },
  {
    id: 10,
    name: "Bradley Peters",
    flavor: "Banana",
    licenseType: "Full",
    expirationDate: "2026-10-01",
  },
];

function TenantTable() {
  const [tenants, setTenants] = useState(initialTenants);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddTenant = (newTenant) => {
    setTenants((prevTenants) => [...prevTenants, newTenant]);
  };


  const handleDelete = (tenantId) => {
    if (window.confirm("Are you sure you want to delete this tenant?")) {
      const updatedTenants = tenants.filter((tenant) => tenant.id !== tenantId);
      setTenants(updatedTenants);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
        <Button className="text-white bg-blue-500 hover:bg-blue-700" onClick={openModal}>Create New Tenant</Button>
        <CopyExistingTenant />
        </div>
        <h2 className="text-lg font-semibold mx-4">Tenants</h2>
        <Button className="text-white bg-blue-500 hover:bg-blue-700">
          Flavors
        </Button>
      </div>

      <Table>
        <Table.Head>
          <Table.HeadCell>Tenant Name</Table.HeadCell>
          <Table.HeadCell>Flavor</Table.HeadCell>
          <Table.HeadCell>License Type</Table.HeadCell>
          <Table.HeadCell>Expiration Date</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {tenants.map((tenant) => (
            <Table.Row key={tenant.id}>
              <Table.Cell>{tenant.name}</Table.Cell>
              <Table.Cell>{tenant.flavor}</Table.Cell>
              <Table.Cell>{tenant.licenseType}</Table.Cell>
              <Table.Cell>{tenant.expirationDate}</Table.Cell>
              <Table.Cell className="flex space-x-2">
                <Button className="text-blue-500 bg-transparent hover:text-blue-700">
                  Logs
                </Button>
                <Button className="text-blue-500 bg-transparent hover:text-blue-700">
                  Datapacks
                </Button>
                <Button
                  onClick={handleDelete}
                  className="text-red-500 bg-transparent hover:text-red-700"
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <TenantInfoModal
        open={isModalOpen}
        onClose={closeModal}
        onCreateTenant={handleAddTenant} 
      />
    </div>
  );
}

export default TenantTable;
