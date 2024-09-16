import React, { useState } from "react";
import { Button, Modal, Label, TextInput, Select } from "flowbite-react";

const LicenseManagement = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Button onClick={handleOpenModal} className="text-blue-500 underline">
        Licensing
      </Button>
      <Modal show={openModal} onClose={handleCloseModal}>
        <Modal.Header>License Management</Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <Label htmlFor="licenseType">License Type</Label>
            <Select id="licenseType">
              <option value="Standard">Standard</option>
              <option value="Full">Full</option>
            </Select>
          </div>
          <div className="mb-4">
            <Label htmlFor="expirationDate">Expiration Date</Label>
            <TextInput id="expirationDate" type="date" />
          </div>
          <div className="mb-4">
            <Label htmlFor="licenseCategory">License Categories</Label>
            <TextInput id="licenseCategory" placeholder="Enter license categories" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Save</Button>
          <Button color="gray" onClick={handleCloseModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LicenseManagement;
