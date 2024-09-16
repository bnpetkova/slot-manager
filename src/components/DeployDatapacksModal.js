import React, { useState } from "react";
import {
  Modal,
  TextInput,
  Label,
  Select,
  Table,
  Button,
  Checkbox,
} from "flowbite-react";

const datapacks = [
  { id: 1, name: "Datapack A", description: "Description for Datapack A" },
  { id: 2, name: "Datapack B", description: "Description for Datapack B" },
  { id: 3, name: "Datapack C", description: "Description for Datapack C" },
];

const DeployDatapacks = ({ openModal, handleCloseModal }) => {
  const [filterText, setFilterText] = useState("");
  const [filterAll, setFilterAll] = useState("all");
  const [checked, setChecked] = useState(false);

  const handleFilterTextChange = (e) => setFilterText(e.target.value);
  const handleFilterAllChange = (e) => setFilterAll(e.target.value);

  const filteredDatapacks = datapacks.filter((datapack) => {
    const matchText =
      datapack.name.toLowerCase().includes(filterText.toLowerCase()) ||
      datapack.description.toLowerCase().includes(filterText.toLowerCase());
    const matchAll = filterAll === "all" || matchText;
    return matchAll;
  });

  const handleCheckboxChange = (id) => {
    setChecked((prevChecked) => ({
      ...prevChecked,
      [id]: !prevChecked[id],
    }));
  };
  const handleUncheckAll = () => {
    const uncheckedItems = {};
    datapacks.forEach((datapack) => {
      uncheckedItems[datapack.id] = false;
    });
    setChecked(uncheckedItems);
  };

  return (
    <Modal show={openModal} onClose={handleCloseModal}>
      <Modal.Header>Deploy Datapacks</Modal.Header>
      <Modal.Body>
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
                <option value="filtered">Checked</option>
                <option value="filtered">Unchecked</option>
              </Select>
            </div>
            <div className="flex-grow">
              <span color="gray" size="sm" onClick={handleUncheckAll}
                 className="inline text-sm p-2.5  text-blue-600 cursor-pointer hover:underline">
              Uncheck all
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
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeployDatapacks;
