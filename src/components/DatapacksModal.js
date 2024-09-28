import React from "react";
import { Modal, Button } from "flowbite-react";
import DatapacksPanel from "./DatapacksPanel";

const DatapacksModal = ({ datapacks, tenantName, open, onClose, onDeploy }) => {
  
  const handleDeploy = () => {
    onDeploy(tenantName, datapacks);
    onClose();
  };

  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header>Deploy Datapacks for {tenantName}</Modal.Header>
      <Modal.Body>
        <DatapacksPanel datapacks={datapacks} />
      </Modal.Body>
      <Modal.Footer>
        <div className="flex justify-end space-x-4">
          <Button color="gray" onClick={onClose}>
            Close
          </Button>
          <Button 
            color="blue" 
            onClick={handleDeploy} 
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
          >
            Deploy
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default DatapacksModal;
