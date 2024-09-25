import { Label, TextInput, Select } from "flowbite-react";

const LicenseManagementPanel = () => {
  return (
    <div className="py-3">
      <div className="py-6">
        <Label htmlFor="licenseType">License Type</Label>
        <Select id="licenseType">
          <option value="Standard">Standard</option>
          <option value="Full">Full</option>
        </Select>
      </div>

      <div className="py-3">
        <Label htmlFor="expirationDate">Expiration Date</Label>
        <TextInput id="expirationDate" placeholder="Enter expiration date" />
      </div>

      <div>
        <Label htmlFor="platinium">Platinium</Label>
        <TextInput id="platinium" placeholder="Enter a number" />
      </div>

      <div>
        <Label htmlFor="gold">Gold</Label>
        <TextInput id="gold" placeholder="Enter a number" />
      </div>

      <div>
        <Label htmlFor="bronze">Bronze</Label>
        <TextInput id="bronze" placeholder="Enter a number" />
      </div>

      <div>
        <Label htmlFor="portal">Portal</Label>
        <TextInput id="portal" placeholder="Enter a number" />
      </div>

      <div>
        <Label htmlFor="portalPlus">Portal Plus</Label>
        <TextInput id="portalPlus" placeholder="Enter a number" />
      </div>

      <div>
        <Label htmlFor="mobile">Mobile</Label>
        <TextInput id="mobile" placeholder="Enter a number" />
      </div>

      <div>
        <Label htmlFor="pmv">PMV</Label>
        <TextInput id="pmv" placeholder="Enter a number" />
      </div>

      <div>
        <Label htmlFor="sdTenantId">SD Tenant ID</Label>
        <TextInput id="sdTenantId" placeholder="SD Tenant ID" />
      </div>

      <div>
        <Label htmlFor="apiTier">API Tier</Label>
        <TextInput id="apiTier" placeholder="Enter a number" />
      </div>

      <div>
        <Label htmlFor="apiDiscountRate">API Discount Rate</Label>
        <TextInput id="apiDiscountRate" placeholder="Enter a number" />
      </div>

      <div>
        <Label htmlFor="apiPricePer500K">API Price per 500K</Label>
        <TextInput id="apiPricePer500K" placeholder="Enter a number" />
      </div>
    </div>
  );
};
export default LicenseManagementPanel;
