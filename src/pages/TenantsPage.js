import React, { useState } from "react";
import { Button, Card } from "flowbite-react";
import CopyExistingTenant from "../components/CopyExistingTenant.js";
import LoadingAnimation from "../components/LoadingAnimation.js";
import UnifiedModal from "../components/UnifiedModal.js";
import TenantTable from "../components/TenantTable.js";
import StartingTenants from "../utils/StartingTenants.js";

const initialTenants = StartingTenants;

function TenantsPage() {
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
    if (!newTenant.tenantName) {
      console.error("Tenant name is missing.");
      return;
    }

    setCreationLog({
      tenantName: newTenant.tenantName,
      message: `Tenant creation has started for ${newTenant.tenantName}. Updates will appear here.`,
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

  const handleLogClick = (tenantName) => {
    console.log(`Logs clicked for: ${tenantName}`);
  };

  const handleDatapackClick = (tenantName) => {
    console.log(`Datapacks clicked for: ${tenantName}`);
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

      <TenantTable
        tenants={tenants}
        onDelete={handleDelete}
        onLogClick={handleLogClick}
        onDatapackClick={handleDatapackClick}
      />


      <UnifiedModal
        open={isModalOpen}
        onClose={closeUnifiedModal}
        onCreateTenant={handleAddTenant}
      />

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
          tenantName={temporaryTenant.tenantName}
          onTenantClick={handleTenantClick}
        />
      )}
    </div>
  );
}

export default TenantsPage;
