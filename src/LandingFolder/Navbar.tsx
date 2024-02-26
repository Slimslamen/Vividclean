import React from "react";
import {
  Dropdown,
  DropdownHeader,
  DropdownItem,
  Navbar as FlowbiteNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function Navbar(): JSX.Element {
  return (
    <FlowbiteNavbar fluid rounded className="ml-10 mr-28">
      <NavbarBrand href="#">
        <img
          src="src/assets/Vivid.png"
          className="mr-3 h-6 sm:h-20"
          alt="Vivid Clean Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Hållbar Renlighet, Ditt Hem i Perfekt Harmoni
        </span>
      </NavbarBrand>
      <NavbarCollapse className="flex justify-center">
      <Dropdown
          arrowIcon={false}
          inline
          className="w-auto"
          label={
            <NavbarLink className="text-xl" href="#" active>
            Städning
          </NavbarLink>
          }
        >
          <DropdownHeader>
            <span className="block text-xl">Allt för ditt hem</span>
          </DropdownHeader>
          <DropdownItem className="text-xl">Fönsterputs</DropdownItem>
          <DropdownItem className="text-xl">Diamanttvätt</DropdownItem>
          <DropdownItem className="text-xl">Basic städning</DropdownItem>
          <DropdownItem className="text-xl">Toppstädning</DropdownItem>   
        </Dropdown>
        <NavbarToggle />
        <Dropdown
          arrowIcon={false}
          inline
          className="w-auto"
          label={
            <NavbarLink className="text-xl" href="#" active>
           Vivid Clean
          </NavbarLink>
          }
        >
          <DropdownItem className="text-xl">Om oss</DropdownItem>
          <DropdownItem className="text-xl">Kontakta oss</DropdownItem>
          <DropdownItem className="text-xl">FAQ</DropdownItem> 
        </Dropdown>
        <NavbarToggle />
        <Dropdown
          arrowIcon={false}
          inline
          className="w-auto"
          label={
            <NavbarLink className="text-xl" href="#" active>
            Logga in
          </NavbarLink>
          }
        >
          <DropdownHeader>
            <span className="block text-xl">För företag</span>
          </DropdownHeader>
          <DropdownItem className="text-xl">Ny kund</DropdownItem>
          <DropdownItem className="text-xl">Boka ditt städ</DropdownItem> 
        </Dropdown>
        <NavbarToggle />
        <Dropdown
          arrowIcon={false}
          inline
          className="w-auto"
          label={
            <NavbarLink className="text-xl" href="#" active>
           Vivid Clean
          </NavbarLink>
          }
        >
          <DropdownItem className="text-xl">Om oss</DropdownItem>
          <DropdownItem className="text-xl">Kontakta oss</DropdownItem>
          <DropdownItem className="text-xl">FAQ</DropdownItem> 
        </Dropdown>
        <NavbarToggle />
      </NavbarCollapse>     
    </FlowbiteNavbar>
  );
}
