import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

const Filters = () => {
  return (
    <div className="flex gap-2">
      <Dropdown>
        <DropdownTrigger>
          <Button color="default" variant="bordered">
            Filter <BiChevronDown />
          </Button>
        </DropdownTrigger>
        <DropdownMenu color="default">
          <DropdownItem key="new">New file</DropdownItem>
          <DropdownItem key="copy">Copy link</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button color="default" variant="bordered">
            Filter <BiChevronDown />
          </Button>
        </DropdownTrigger>
        <DropdownMenu color="default">
          <DropdownItem key="new">New file</DropdownItem>
          <DropdownItem key="copy">Copy link</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button color="default" variant="bordered">
            Filter <BiChevronDown />
          </Button>
        </DropdownTrigger>
        <DropdownMenu color="default">
          <DropdownItem key="new">New file</DropdownItem>
          <DropdownItem key="copy">Copy link</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownTrigger>
          <Button color="default" variant="bordered">
            Filter <BiChevronDown />
          </Button>
        </DropdownTrigger>
        <DropdownMenu color="default">
          <DropdownItem key="new">New file</DropdownItem>
          <DropdownItem key="copy">Copy link</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Filters;
