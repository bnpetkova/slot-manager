import React, { useState, useEffect } from "react";
import { TextInput, Label, Select, Table, Checkbox } from "flowbite-react";

const DatapacksPanel = ({ datapacks }) => {
  const [filterText, setFilterText] = useState("");
  const [filterAll, setFilterAll] = useState("all");
  const [checked, setChecked] = useState({});
  const [checkAllLabel, setCheckAllLabel] = useState("Check all");

  const handleFilterTextChange = (e) => setFilterText(e.target.value);
  const handleFilterAllChange = (e) => setFilterAll(e.target.value);

  const filteredDatapacks = datapacks.filter((datapack) => {
    const matchText =
      datapack.name.toLowerCase().includes(filterText.toLowerCase()) ||
      datapack.description.toLowerCase().includes(filterText.toLowerCase());

    if (!matchText) {
      return false;
    }

    if (filterAll === "all") {
      return true;
    }

    return (
      (filterAll === "checked" && checked[datapack.id]) ||
      (filterAll === "unchecked" && !checked[datapack.id])
    );
  });

  const handleCheckboxChange = (id) => {
    setChecked((prevChecked) => ({
      ...prevChecked,
      [id]: !prevChecked[id],
    }));
  };

  const handleToggleCheckAll = () => {
    const isCheckingAll = checkAllLabel === "Check all";
    const updatedChecked = {};
    filteredDatapacks.forEach((datapack) => {
      updatedChecked[datapack.id] = isCheckingAll;
    });
    setChecked((prevChecked) => ({
      ...prevChecked,
      ...updatedChecked,
    }));
  };

  useEffect(() => {
    const atLeastOneChecked = Object.values(checked).some((isChecked) => isChecked);

    setCheckAllLabel(atLeastOneChecked ? "Uncheck all" : "Check all");
  }, [checked, filteredDatapacks]); 

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 items-center">
        <div>
          <Label htmlFor="filterText">Filter (Name, Description)</Label>
          <TextInput
            id="filterText"
            placeholder="Enter name or description"
            value={filterText}
            onChange={handleFilterTextChange}
          />
        </div>
        <div>
          <Label htmlFor="filterAll">Filter</Label>
          <Select
            id="filterAll"
            value={filterAll}
            onChange={handleFilterAllChange}
          >
            <option value="all">All</option>
            <option value="checked">Checked</option>
            <option value="unchecked">Unchecked</option>
          </Select>
        </div>
        <div className="flex-grow">
          <span
            color="gray"
            size="sm"
            onClick={handleToggleCheckAll}
            className="inline text-sm p-2.5 text-blue-600 cursor-pointer hover:underline"
          >
            {checkAllLabel}
          </span>
        </div>
      </div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {filteredDatapacks.map((datapack) => (
            <Table.Row key={datapack.id}>
              <Table.Cell>
                <Checkbox
                  className="mr-2"
                  checked={checked[datapack.id] || false}
                  onChange={() => handleCheckboxChange(datapack.id)}
                />
                {datapack.name}
              </Table.Cell>
              <Table.Cell>{datapack.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default DatapacksPanel;
