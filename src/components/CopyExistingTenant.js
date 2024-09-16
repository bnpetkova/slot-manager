import React, { useState } from "react";
import { Modal, Button, Checkbox, Label, TextInput } from "flowbite-react";

function CopyExistingTenant() {
    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => {
        setOpenModal(!openModal);
    }


    return (
        <>
        <Button onClick={toggleModal} className="bg-blue-500 text-white">
        Copy Existing Tenant
      </Button>
      
      <Modal show={openModal} onClose={toggleModal}>
        <Modal.Header>
          Copy Existing Tenant
        </Modal.Header>
        
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <Label htmlFor="copyTenant" value="Copy Tenant" />
              <TextInput id="copyTenant" placeholder="Enter existing tenant" required />
            </div>
            
            <div>
              <Label htmlFor="newTenantName" value="New Tenant Name" />
              <TextInput id="newTenantName" placeholder="Enter new tenant name" required />
            </div>
            
            <div>
              <Label htmlFor="clientDomain" value="Client Domain" />
              <TextInput id="clientDomain" placeholder="Enter client domain" required />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="overwriteExisting" />
              <Label htmlFor="overwriteExisting">Overwrite Existing</Label>
            </div>
          </div>
        </Modal.Body>
        
        <Modal.Footer>
          <Button onClick={toggleModal} className="bg-blue-500 text-white">
            Save
          </Button>
          <Button color="gray" onClick={toggleModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default CopyExistingTenant;