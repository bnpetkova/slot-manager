import React, { useState } from "react";
import { Button, Card } from "flowbite-react";
import CopyExistingTenant from "../components/CopyExistingTenant.js";
import UnifiedModal from "../components/UnifiedModal.js";
import TenantTable from "../components/TenantTable.js";
import StartingTenants from "../utils/StartingTenants.js";
import DatapacksModal from "../components/DatapacksModal.js";
import LicenseManagementModal from "../components/LicenseManagementModal.js";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const initialTenants = StartingTenants;

const datapacks = [
  { id: 1, name: "Datapack A", description: "Description for Datapack A" },
  { id: 2, name: "Datapack B", description: "Description for Datapack B" },
  { id: 3, name: "Datapack C", description: "Description for Datapack C" },
];

function TenantsPage() {
  const [tenants, setTenants] = useState(initialTenants);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [creationLog, setCreationLog] = useState(null);
  const [temporaryTenant, setTemporaryTenant] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [showCreationLog, setShowCreationLog] = useState(false);
  const [selectedTenantLog, setSelectedTenantLog] = useState(null);
  const [isDatapacksModalOpen, setIsDatapacksModalOpen] = useState(false);
  const [selectedTenantForDatapacks, setSelectedTenantForDatapacks] =
    useState(null);

  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const openUnifiedModal = () => setIsModalOpen(true);
  const closeUnifiedModal = () => setIsModalOpen(false);

  const handleAddTenant = (newTenant) => {
    setTemporaryTenant({ ...newTenant, status: "inprogress"});
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
    setSelectedTenantForDatapacks(tenantName);
    setIsDatapacksModalOpen(true);
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-5 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <Button
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 mt-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              onClick={openUnifiedModal}
            >
              Create New Tenant
            </Button>
            <CopyExistingTenant />
          </div>
          <h2 className="flex-grow text-center text-3xl font-bold dark:text-white mt-4">
            Tenants
          </h2>
          <div className="flex items-center space-x-2">
            <Button className="ml-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 mt-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Flavors
            </Button>
            <button
              className="ml-4 text-gray-900 dark:text-gray-100 focus:outline-none"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              <FontAwesomeIcon icon={faMoon} className="text-xl" />
            </button>
            <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 w-auto text-center text-sm bg-gray-700 text-white rounded-md py-1 opacity-0 transition-opacity duration-200 hover:opacity-100">
              Toggle dark mode
            </span>
          </div>
        </div>

        <TenantTable
          tenants={tenants}
          onDelete={handleDelete}
          onLogClick={handleLogClick}
          onDatapackClick={handleDatapackClick}
          isCreating={isCreating}
          temporaryTenant={temporaryTenant}
          handleTenantClick={handleTenantClick}
        />

        <UnifiedModal
          open={isModalOpen}
          datapacks={datapacks}
          onClose={closeUnifiedModal}
          onCreateTenant={handleAddTenant}
        />

        <DatapacksModal
          open={isDatapacksModalOpen}
          onClose={() => setIsDatapacksModalOpen(false)}
          tenantName={selectedTenantForDatapacks}
          datapacks={datapacks}
        />
        <LicenseManagementModal
          open={isLicenseModalOpen}
          onClose={() => setIsLicenseModalOpen(false)}
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

      </div>
    </div>
  );
}

export default TenantsPage;
