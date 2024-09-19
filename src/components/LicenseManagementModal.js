import React from "react";
import { Modal, Button, Label, TextInput, Select } from "flowbite-react";

const LicenseManagementModal = ({ open, onClose }) => {
  return (
    <Modal show={open} onClose={onClose} className="z-50">
       <Modal.Header >License Tenant</Modal.Header>
      <Modal.Body className="max-h-[60vh] overflow-y-auto">
        <div className="space-y-4">

          <div className="py-2 border">
            <Label htmlFor="licenseType">License Type</Label>
            <Select id="licenseType">
              <option value="Standard">Standard</option>
              <option value="Full">Full</option>
            </Select>
          </div>

          <div className="py-2 border ">
            <Label htmlFor="expirationDate">Expiration Date</Label>
            <TextInput id="expirationDate" placeholder="Enter expiration date" />
          </div>

          <div>
            <Label htmlFor="expirationDate">Platinium</Label>
            <TextInput id="expirationDate" placeholder="Enter a number" />
          </div>

          <div>
            <Label htmlFor="expirationDate">Gold</Label>
            <TextInput id="expirationDate" placeholder="Enter a number" />
          </div>

          <div>
            <Label htmlFor="expirationDate">Bronze</Label>
            <TextInput id="expirationDate" placeholder="Enter a number" />
          </div>

          <div>
            <Label htmlFor="expirationDate">Portal</Label>
            <TextInput id="expirationDate" placeholder="Enter a number" />
          </div>

          <div>
            <Label htmlFor="expirationDate">Portal Plus</Label>
            <TextInput id="expirationDate" placeholder="Enter a number" />
          </div>

          <div>
            <Label htmlFor="expirationDate">Mobile</Label>
            <TextInput id="expirationDate" placeholder="Enter a number" />
          </div>

          <div>
            <Label htmlFor="expirationDate">PMV</Label>
            <TextInput id="expirationDate" placeholder="Enter a number" />
          </div>

          <div>
            <Label htmlFor="expirationDate">SD Tenant ID</Label>
            <TextInput id="expirationDate" placeholder="SD Tenant ID" />
          </div>

          <div>
            <Label htmlFor="expirationDate">API Tier</Label>
            <TextInput id="expirationDate" placeholder="Enter a number" />
          </div>

          <div>
            <Label htmlFor="expirationDate">API Discount Rate</Label>
            <TextInput id="expirationDate" placeholder="Enter a number" />
          </div>

          <div>
            <Label htmlFor="expirationDate">API Price per 500K</Label>
            <TextInput id="expirationDate" placeholder="Enter a number" />
          </div>
          {/* Additional fields here */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" onClick={onClose}>Update</Button>
        <Button color="gray" onClick={onClose}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LicenseManagementModal;
