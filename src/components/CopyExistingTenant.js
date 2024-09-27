import React, { useState } from "react";
import { Modal, Button, Checkbox, Label, TextInput } from "flowbite-react";

function CopyExistingTenant() {
    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => {
        setOpenModal(!openModal);
    }


    return (
        <>
        <Button onClick={toggleModal} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
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