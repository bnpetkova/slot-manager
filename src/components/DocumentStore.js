// DocumentStoreForm.js
import React from "react";
import { Label, TextInput, Button, Modal } from "flowbite-react";

const DocumentStoreForm = ({ onClose }) => {
  // Define form handling logic here

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Add form fields here */}
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
