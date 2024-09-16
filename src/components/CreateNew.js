import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import TenantInfoModal from "./TenantInfoModal";
import LicenseManagementModal from "./LicenseManagementModal";
import DeployDatapacks from "./DeployDatapacksModal";

const CreateNew = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openTenantInfoModal, setOpenTenantInfoModal] = useState(false);
  const [openLicenseModal, setOpenLicenseModal] = useState(false);
  const [openDatapacksModal, setOpenDatapacksModal] = useState(false);
  const handleOpenDatapacksModal = () => setOpenDatapacksModal(true);
  const handleCloseDatapacksModal = () => setOpenDatapacksModal(false);


  const handleCloseAllModals = () => {
    setOpenCreateModal(false);
    setOpenTenantInfoModal(false);
    setOpenLicenseModal(false);
    setOpenDatapacksModal(false);
  };




  return (
    <div>
      <Button onClick={() => setOpenCreateModal(true)} className="text-white bg-blue-500 hover:bg-blue-700">
        Create New
      </Button>

      <TenantInfoModal open={openTenantInfoModal} onClose={() => setOpenTenantInfoModal(false)} />
      <LicenseManagementModal open={openLicenseModal} onClose={() => setOpenLicenseModal(false)} />
      <DeployDatapacks
        openModal={openDatapacksModal}
        handleCloseModal={handleCloseDatapacksModal}
      />
      <Modal show={openCreateModal} onClose={handleCloseAllModals}>
        <Modal.Header>Create New</Modal.Header>
        <Modal.Body>
          <div className="flex space-x-4">
            <Button onClick={() => setOpenTenantInfoModal(true)} className="text-black">Tenant Info</Button>
            <Button onClick={() => setOpenLicenseModal(true)} className="text-black">Licensing</Button>
            <Button onClick={handleOpenDatapacksModal} className="text-blue-500 bg-transparent hover:text-blue-700">
              Datapacks
            </Button>
            <Button  className="text-black">Document Store</Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={handleCloseAllModals}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateNew;
