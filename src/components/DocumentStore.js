import React from "react";
import { Label, TextInput, Button, Modal } from "flowbite-react";
import "../styles/UnifiedModal.css";

const DocumentStoreForm = ({ onClose }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="modal-fixed-size">
      <div>
        <Label htmlFor="documentName">Document Name</Label>
        <TextInput id="documentName" placeholder="Enter document name" />
      </div>
      <Modal.Footer>
        <Button color="gray" type="submit">Submit</Button>
        <Button color="gray" onClick={onClose}>Cancel</Button>
      </Modal.Footer>
    </form>
  );
};

export default DocumentStoreForm;
