import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  Navigate,
  NavigateLink,
  Headeer,
  NavigateList,
  NavigateItem,
} from "./Header.styled";

import { DropBar } from "../../components/dropBar/DropBar";

export const Header = ({ setUsers, setFilter }) => {
  const [isTweets, setIsTweets] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setFilter("all");
    setIsTweets((prev) => {
      if (location.pathname === "/tweets") {
        return true;
      }

      return false;
    });
  }, [location, setFilter]);

  return (
    <Headeer>
      <Navigate>
        <NavigateList>
          <NavigateItem>
            <NavigateLink to="/">Home</NavigateLink>
          </NavigateItem>
          <NavigateItem>
            <NavigateLink to="/tweets">Tweets</NavigateLink>
          </NavigateItem>
        </NavigateList>
      </Navigate>

      {isTweets && (
        <DropBar setFilter={setFilter} setUsers={setUsers}></DropBar>
      )}
    </Headeer>
  );
};
