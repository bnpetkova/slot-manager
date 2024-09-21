import React, { useState } from "react";
import { Modal, Button, TextInput } from "flowbite-react";

const DeleteTenantModal = ({ open, onClose, tenantName, tenantDynamo, onDeleteConfirm }) => {
  const [enteredTenantName, setEnteredTenantName] = useState("");
  const [enteredTenantDynamo, setEnteredTenantDynamo] = useState("");

  const handleDelete = () => {
    if (enteredTenantName === tenantName && enteredTenantDynamo === tenantDynamo) {
      onDeleteConfirm();
      onClose();
    } else {
      alert("Please enter the correct tenant and database names to confirm.");
    }
  };

  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header>Deleting {tenantName}</Modal.Header>
      <Modal.Body>
        <p>
          You are about to delete <strong>{tenantName}</strong>. Please type the name to confirm you are sure.
        </p>
        <TextInput
          placeholder={`Enter ${tenantName}`}
          value={enteredTenantName}
          onChange={(e) => setEnteredTenantName(e.target.value)}
        />

        <p className="mt-4">
          You are going to delete <strong>{tenantDynamo}</strong>. Please type the name of the database to confirm.
        </p>
        <TextInput
          placeholder={`Enter ${tenantDynamo}`}
          value={enteredTenantDynamo}
          onChange={(e) => setEnteredTenantDynamo(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button color="red" onClick={handleDelete}>
          Confirm Delete
        </Button>
        <Button color="gray" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteTenantModal;
