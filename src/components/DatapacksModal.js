import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import DatapacksPanel from "./DatapacksPanel";

const DatapacksModal = ({ datapacks, tenantName, open, onClose, onDeploy }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleDeploy = () => {
    if (isChecked) {
      onDeploy(tenantName, datapacks);
      onClose();
    }
  };


  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header>Deploy Datapacks for {tenantName}</Modal.Header>
      <Modal.Body>
        <DatapacksPanel datapacks={datapacks} />
        <div className="mt-4">
          <input
            type="checkbox"
            id="deployCheckbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="deployCheckbox" className="ml-2">
            Confirm Deployment
          </label>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button color={isChecked ? "blue" : "gray"} onClick={handleDeploy}>
          Deploy
        </Button>
        <Button color="gray" onClick={onClose}>
          Close
        </Button>
        </Modal.Footer>
    </Modal>
  );
};

export default DatapacksModal;
