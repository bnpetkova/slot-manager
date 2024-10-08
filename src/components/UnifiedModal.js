import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import TenantInfoForm from "./TenantInfoForm";
import DocumentStoreForm from "./DocumentStore";
import DatapacksPanel from "./DatapacksPanel";
import LicenseManagementPanel from "./LicenseManagementPanel";


const UnifiedModal = ({ open, onClose, onCreateTenant, datapacks }) => {
  const [activeTab, setActiveTab] = useState("TenantInfo");
  const [tenantFormSubmit, setTenantFormSubmit] = useState(null); // to store form submit function

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Set form submit handler for TenantInfo
  const handleTenantFormSubmit = (submitHandler) => {
    setTenantFormSubmit(() => submitHandler);
  };

  return (
    <Modal show={open} onClose={onClose} className="max-h-screen overflow-y-auto">
      <Modal.Body>
        <div className="flex space-x-4 mb-4 border-b pb-2">
          <Button
            className={`text-blue-500 ${
              activeTab === "TenantInfo" ? "underline" : ""
            }`}
            onClick={() => handleTabClick("TenantInfo")}
          >
            Tenant Info
          </Button>
          <Button
            className={`text-blue-500 ${
              activeTab === "Licensing" ? "underline" : ""
            }`}
            onClick={() => handleTabClick("Licensing")}
          >
            Licensing
          </Button>
          <Button
            className={`text-blue-500 ${
              activeTab === "Datapacks" ? "underline" : ""
            }`}
            onClick={() => handleTabClick("Datapacks")}
          >
            Datapacks
          </Button>
          <Button
            className={`text-blue-500 ${
              activeTab === "DocumentStore" ? "underline" : ""
            }`}
            onClick={() => handleTabClick("DocumentStore")}
          >
            Document Store
          </Button>
        </div>

        {activeTab === "TenantInfo" && (
          <TenantInfoForm
            onSubmit={(tenantData) => {
              onCreateTenant(tenantData); // Call tenant creation
              onClose(); // Close modal after creation
            }}
            onSetFormSubmit={handleTenantFormSubmit} // Pass down submit handler
            onClose={onClose}
          />
        )}
        {activeTab === "Licensing" && <LicenseManagementPanel />}
        {activeTab === "Datapacks" && <DatapacksPanel datapacks={datapacks} />}
        {activeTab === "DocumentStore" && <DocumentStoreForm onClose={onClose} />}
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" onClick={onClose}>
          Close
        </Button>
        <Button
          color="gray"
          onClick={() => {
            if (tenantFormSubmit) {
              tenantFormSubmit(); // Trigger form submit if on TenantInfo tab
            }
          }}
        >
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UnifiedModal;
