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
          <div>
            <Label htmlFor="platinum">Platinum</Label>
            <TextInput id="platinum" placeholder="Enter platinum value" />
          </div>
          <div>
            <Label htmlFor="sdTenantId">SD Tenant ID</Label>
            <TextInput id="sdTenantId" placeholder="Enter SD Tenant ID" />
          </div>
          <div>
            <Label htmlFor="apiTier">API Tier</Label>
            <TextInput id="apiTier" placeholder="Enter API Tier" />
          </div>
          <div>
            <Label htmlFor="apiDiscountRate">API Discount Rate</Label>
            <TextInput id="apiDiscountRate" placeholder="Enter API Discount Rate" />
          </div>
          <div>
            <Label htmlFor="apiPriceFor500k">API Price for 500K</Label>
            <TextInput id="apiPriceFor500k" placeholder="Enter API Price for 500K" />
          </div>
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
