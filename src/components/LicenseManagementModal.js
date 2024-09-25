import React from "react";
import { Modal, Button } from "flowbite-react";
import LicenseManagementPanel from "./LicenseManagementPanel";

const LicenseManagementModal = ({ open, onClose, onUpdate, tenantName }) => {
  const handleUpdate = () => {
    onUpdate(tenantName); 
    onClose();
  };
  return (
    <Modal show={open} onClose={onClose} className="" >

      <Modal.Header className="">License Tenant for { tenantName }</Modal.Header>
      <Modal.Body >
      <LicenseManagementPanel/>
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" onClick={handleUpdate}>Update</Button>
        <Button color="gray" onClick={onClose}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LicenseManagementModal;
