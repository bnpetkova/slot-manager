// TenantInfoForm.js
import React from "react";
import { Label, TextInput, Checkbox } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import "../styles/UnifiedModal.css";

const TenantInfoForm = ({ onSubmit, onClose, onSetFormSubmit }) => {
  const { register, handleSubmit: reactHookFormHandleSubmit, formState: { errors } } = useForm();
  const onFormSubmit = (data) => {
    onSubmit(data); 
  };
  useEffect(() => {
    onSetFormSubmit(reactHookFormHandleSubmit(onSubmit));
  }, [onSetFormSubmit, reactHookFormHandleSubmit, onSubmit]);


  return (
    <form onSubmit={reactHookFormHandleSubmit(onFormSubmit)} className="modal-fixed-size">
      <div>
        <Label htmlFor="tenantName">Tenant Name</Label>
        <TextInput
          id="tenantName"
          placeholder="Enter tenant name"
          {...register("tenantName", { required: "Tenant name is required" })}
        />
        {errors.tenantName && (
          <p className="text-red-500">{errors.tenantName.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="clientDomain">Client Domain</Label>
        <TextInput
          id="clientDomain"
          placeholder="Enter client domain"
          {...register("clientDomain", { required: "Client domain is required" })}
        />
        {errors.clientDomain && (
          <p className="text-red-500">{errors.clientDomain.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="flavor">Flavor</Label>
        <TextInput
          id="flavor"
          placeholder="Enter flavor"
          {...register("flavor", { required: "Flavor is required" })}
        />
        {errors.flavor && (
          <p className="text-red-500">{errors.flavor.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="adminUser">Admin User</Label>
        <TextInput
          id="adminUser"
          placeholder="Enter admin user"
          {...register("adminUser", { required: "Admin user is required" })}
        />
        {errors.adminUser && (
          <p className="text-red-500">{errors.adminUser.message}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="adminPassword">Admin Password</Label>
        <TextInput
          id="adminPassword"
          placeholder="Enter admin password"
          type="password"
          {...register("adminPassword", {
            required: "Admin password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
        {errors.adminPassword && (
          <p className="text-red-500">{errors.adminPassword.message}</p>
        )}
      </div>
      <div className="flex items-center">
        <Checkbox id="useSnapshot" {...register("useSnapshot")} />
        <Label htmlFor="useSnapshot" className="ml-2">
          Use Snapshot
        </Label>
      </div>
      <div className="flex items-center">
        <Checkbox id="overwriteExisting" {...register("overwriteExisting")} />
        <Label htmlFor="overwriteExisting" className="ml-2">
          Overwrite Existing
        </Label>
      </div>
     
    </form>
  );
};

export default TenantInfoForm;
