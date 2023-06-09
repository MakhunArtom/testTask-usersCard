import { useState } from "react";
import {
  DropBarBtn,
  DropBarWraper,
  DropBarMenuWraper,
  StyledDropBarMenuItem,
} from "./DropBar.styled";

import { getUsers, getFolow } from "../../API/index";

export const DropBar = ({ setUsers, setFilter }) => {
  const [open, setOpen] = useState(false);

  const hendelFilterBtn = ({ target: { textContent } }) => {
    switch (textContent) {
      case "Get All":
        setUsers([]);
        setFilter("all");

        setOpen((prev) => !prev);

        getUsers().then((resp) => setUsers((prev) => [...prev, ...resp]));

        break;

      case "Get Folow":
        setUsers([]);
        setFilter("folow");

        setOpen((prev) => !prev);

        getFolow().then((resp) =>
          setUsers(() => resp.filter(({ isFolow }) => isFolow === false))
        );

        break;

      case "Get Folowing":
        setUsers([]);
        setFilter("folowing");

        setOpen((prev) => !prev);

        getFolow().then((resp) =>
          setUsers(() => resp.filter(({ isFolow }) => isFolow === true))
        );

        break;

      default:
        return;
    }
  };

  return (
    <DropBarWraper onClick={hendelFilterBtn}>
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
