import {
  Navigate,
  NavigateLink,
  Headeer,
  NavigateList,
  NavigateItem,
} from "./Header.styled";

import { DropBar } from "../../components/dropBar/DropBar";

export const Header = () => {
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

      <DropBar></DropBar>
    </Headeer>
  );
};
