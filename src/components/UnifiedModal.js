import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import TenantInfoForm from "./TenantInfoForm";
import LicenseManagementModal from "./LicenseManagementModal";
import DeployDatapacks from "./DeployDatapacksModal";
import DocumentStoreForm from "./DocumentStore";

const UnifiedModal = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState("TenantInfo");
  const [licenseModalOpen, setLicenseModalOpen] = useState(false);
  const [datapacksModalOpen, setDatapacksModalOpen] = useState(false);


  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Licensing") {
      setLicenseModalOpen(true);
      setDatapacksModalOpen(false); 
    } else if (tab === "Datapacks") {
      setDatapacksModalOpen(true); 
      setLicenseModalOpen(false); 
    } else {
      setLicenseModalOpen(false);
      setDatapacksModalOpen(false);
    }
  };


  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Body>
        <div className="flex space-x-4 mb-4 border-b pb-2">
          <Button
            className={`text-blue-500 ${activeTab === "TenantInfo" ? "underline" : ""}`}
            onClick={() => handleTabClick("TenantInfo")}
          >
            Tenant Info
          </Button>
          <Button
            className={`text-blue-500 ${activeTab === "Licensing" ? "underline" : ""}`}
            onClick={() => handleTabClick("Licensing")}
          >
            Licensing
          </Button>
          <Button
            className={`text-blue-500 ${activeTab === "Datapacks" ? "underline" : ""}`}
            onClick={() => handleTabClick("Datapacks")}
          >
            Datapacks
          </Button>
          <Button
            className={`text-blue-500 ${activeTab === "DocumentStore" ? "underline" : ""}`}
            onClick={() => handleTabClick("DocumentStore")}
          >
            Document Store
          </Button>
        </div>

        {/* Conditionally render the active section */}
        {activeTab === "TenantInfo" && (
          <TenantInfoForm onClose={onClose} />
        )}
        {activeTab === "Licensing" && (
               <LicenseManagementModal open={licenseModalOpen} onClose={() => setLicenseModalOpen(false)} />

        )}
     {activeTab === "Datapacks" && (
          <DeployDatapacks openModal={datapacksModalOpen} handleCloseModal={() => setDatapacksModalOpen(false)} />
        )}
        {activeTab === "DocumentStore" && (
          <DocumentStoreForm onClose={onClose} />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UnifiedModal;
