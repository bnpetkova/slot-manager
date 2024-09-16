import React from "react";
import { Modal, Button, Label, TextInput, Checkbox } from "flowbite-react";
import { useForm } from "react-hook-form";

function TenantInfoModal  ({ open, onClose }) {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Tenant Info Submitted:", data);
    onClose();
  }

  return (
    <Modal show={open} onClose={onClose}>
      <Modal.Header>Tenant Info</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="tenantName">Tenant Name</Label>
            <TextInput id="tenantName" placeholder="Enter tenant name"
              {...register("tenantName", { required: "Tenant name is required" })} />
              {errors.tenantName && <p className="text-red-500">{errors.tenantName.message}</p>}
          
        </div>
          <div>
            <Label htmlFor="clientDomain">Client Domain</Label>
            <TextInput id="clientDomain" placeholder="Enter client domain"
              {...register("clientDomain", { required: "Client domain is required" })} />
            {errors.clientDomain && <p className="text-red-500">{errors.clientDomain.message}</p>}
          </div>
          <div>
            <Label htmlFor="flavor">Flavor</Label>
            <TextInput id="flavor" placeholder="Enter flavor"
              {...register("flavor", { required: "Flavor is required" })} />
             {errors.flavor && <p className="text-red-500">{errors.flavor.message}</p>}
          </div>
          <div>
            <Label htmlFor="adminUser">Admin User</Label>
            <TextInput id="adminUser" placeholder="Enter admin user"
              {...register("adminUser", { required: "Admin user is required" })} />
            {errors.adminUser && <p className="text-red-500">{errors.adminUser.message}</p>}
          </div>
          <div>
            <Label htmlFor="adminPassword">Admin Password</Label>
            <TextInput id="adminPassword" placeholder="Enter admin password" type="password"
            {...register("adminPassword", {
              required: "Admin password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters long" }
            })} />
             {errors.adminPassword && <p className="text-red-500">{errors.adminPassword.message}</p>}
          </div>
          <div className="flex items-center">
            <Checkbox id="useSnapshot"  {...register("useSnapshot")}/>
            <Label htmlFor="useSnapshot" className="ml-2">Use Snapshot</Label>
          </div>
          <div className="flex items-center">
            <Checkbox id="overwriteExisting" {...register("overwriteExisting")} />
            <Label htmlFor="overwriteExisting" className="ml-2">Overwrite Existing</Label>
          </div>
          <Modal.Footer>
        <Button onClick={onClose}>Create</Button>
        <Button color="gray" onClick={onClose}>Cancel</Button>
          </Modal.Footer>
          </form>
      </Modal.Body>
  
      
    </Modal>
  );
};

export default TenantInfoModal;
