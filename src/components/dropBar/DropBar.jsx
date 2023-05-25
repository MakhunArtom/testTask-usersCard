import { useState } from "react";
import {
  DropBarBtn,
  DropBarWraper,
  DropBarMenuWraper,
  StyledDropBarMenuItem,
} from "./DropBar.styled";

export const DropBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <DropBarWraper>
      <DropBarBtn onClick={() => setOpen((prev) => !prev)}>Fillter</DropBarBtn>

      {open && DropBarMenu()}
    </DropBarWraper>
  );
};

function DropBarMenu() {
  function DropBarMenuItem({ children }) {
    return <StyledDropBarMenuItem>{children}</StyledDropBarMenuItem>;
  }

  return (
    <DropBarMenuWraper>
      <DropBarMenuItem>Get All</DropBarMenuItem>
      <DropBarMenuItem>Get Folow</DropBarMenuItem>
      <DropBarMenuItem>Get Folowing</DropBarMenuItem>
    </DropBarMenuWraper>
  );
}
