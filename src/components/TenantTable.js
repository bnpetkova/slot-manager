import React, { useState } from "react";
import { Table, Button, Card } from "flowbite-react";
import CopyExistingTenant from "./CopyExistingTenant.js";
import LoadingAnimation from "./LoadingAnimation.js";
import UnifiedModal from "./UnifiedModal.js";

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
  const [creationLog, setCreationLog] = useState(null);
  const [temporaryTenant, setTemporaryTenant] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [showCreationLog, setShowCreationLog] = useState(false);
  const [selectedTenantLog, setSelectedTenantLog] = useState(null);

  const openUnifiedModal = () => setIsModalOpen(true);
  const closeUnifiedModal = () => setIsModalOpen(false);

  const handleAddTenant = (newTenant) => {
    setTemporaryTenant(newTenant);
    setIsCreating(true);
    setShowCreationLog(false);

    setCreationLog({
      tenantName: newTenant.name,
      message: `Tenant creation has started for ${newTenant.name}. Updates will appear here.`,
    });

    setTimeout(() => {
      setTenants((prevTenants) => [...prevTenants, newTenant]);
      setCreationLog(null);
      setTemporaryTenant(null);
      setIsCreating(false);
      setShowCreationLog(true);
    }, 10000);
  };

  const handleDelete = (tenantId) => {
    if (window.confirm("Are you sure you want to delete this tenant?")) {
      const updatedTenants = tenants.filter((tenant) => tenant.id !== tenantId);
      setTenants(updatedTenants);

      if (creationLog && creationLog.tenantId === tenantId) {
        setCreationLog(null);
      }
    }
  };

  const handleTenantClick = (tenantName) => {
    console.log(`Tenant clicked: ${tenantName}`);
    setSelectedTenantLog({
      tenantName,
      messages: [
        `Licensing tenant: ${tenantName}`,
        `Configuring document store for: ${tenantName}`,
        `Activating tenant...`,
      ],
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <Button
            className="text-white bg-blue-500 hover:bg-blue-700"
            onClick={openUnifiedModal}
          >
            Create New Tenant
          </Button>
          <CopyExistingTenant />
        </div>
        <h2 className="text-lg font-semibold mx-4">Tenants</h2>
        <Button className="text-white bg-blue-500 hover:bg-blue-700">
          Flavors
        </Button>
      </div>

      <Table className="border-collapse border border-slate-400">
        <Table.Head class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <Table.HeadCell>Tenant Name</Table.HeadCell>
          <Table.HeadCell>Flavor</Table.HeadCell>
          <Table.HeadCell>License Type</Table.HeadCell>
          <Table.HeadCell>Expiration Date</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {tenants.map((tenant) => (
            <Table.Row
              className="border-collapse border border-slate-400"
              key={tenant.id}
            >
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
                  onClick={() => handleDelete(tenant.id)}
                  className="text-red-500 bg-transparent hover:text-red-700"
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <UnifiedModal open={isModalOpen} onClose={closeUnifiedModal} onCreateTenant={ handleAddTenant} />

      {selectedTenantLog && (
        <Card className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[500px] h-[200px] p-4 bg-white border border-gray-300 shadow-lg">
          <h3 className="font-bold text-lg text-gray-800">
            Creation Log for: {selectedTenantLog.tenantName}
          </h3>
          <ul className="text-gray-600 mt-2">
            {selectedTenantLog.messages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
          <Button
            className="mt-4 text-white bg-blue-500 hover:bg-blue-700"
            onClick={() => setSelectedTenantLog(null)}
          >
            Close
          </Button>
        </Card>
      )}

      {creationLog && !showCreationLog && (
        <Card className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[500px] h-[200px] p-4 border-t-4 border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-600">
          <h3 className="text-sm font-bold text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            Creation log for: {creationLog.tenantName}
          </h3>
          <p className="text-gray-500 border-b">{creationLog.message}</p>
        </Card>
      )}

      {isCreating && temporaryTenant && (
        <LoadingAnimation
          tenantName={temporaryTenant.name}
          onTenantClick={handleTenantClick}
        />
      )}
    </div>
  );
}



export default TenantTable;
