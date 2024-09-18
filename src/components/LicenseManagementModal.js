import React from "react";
import { Modal, Button, Label, TextInput, Select } from "flowbite-react";

const LicenseManagementModal = ({ open, onClose }) => {
  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header>License Tenant</Modal.Header>
      <Modal.Body>
        <div className="space-y-4">
          <div>
            <Label htmlFor="licenseType">License Type</Label>
            <Select id="licenseType">
              <option value="Standard">Standard</option>
              <option value="Full">Full</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="expirationDate">Expiration Date</Label>
            <TextInput id="expirationDate" placeholder="Enter expiration date" />
          </div>
          {/* Additional fields here */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Update</Button>
        <Button color="gray" onClick={onClose}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LicenseManagementModal;
