import { delimiter } from "../../utils/utils";

import {
  CardUser,
  Avatar,
  Wraper,
  WraperText,
  Bottom,
  Logo,
} from "./UserCard.styled";

export const UserCard = ({ users, handelFolowerChang }) => {
  return (
    <>
      {users.map(({ tweets, followers, id, isFolow }) => {
        return (
          <CardUser key={id}>
            <Logo />
            <Avatar />
            <Wraper>
              <WraperText>{delimiter(tweets)} tweets</WraperText>
              <WraperText>{delimiter(followers)} followers</WraperText>
              <Bottom
                type="button"
                data-id={id}
                folowing={isFolow}
                onClick={(e) => handelFolowerChang(e, isFolow, followers)}
              >
                {isFolow ? "following" : "follow"}
              </Bottom>
            </Wraper>
          </CardUser>
        );
      })}
    </>
  );
};
