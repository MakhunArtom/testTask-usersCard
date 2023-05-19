import { useEffect, useState } from "react";

import { delimiter } from "../utils/utils";

import {
  CardList,
  CardItem,
  Avatar,
  Wraper,
  WraperText,
  Bottom,
} from "./Card.styled";

export const Card = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://64673f692ea3cae8dc294a1e.mockapi.io/folower")
      .then((resp) => resp.json())
      .then((res) => setUsers(res));
  }, []);

  return (
    <CardList>
      {users.map(({ user, tweets, followers, avatar, id }) => {
        return (
          <CardItem key={id}>
            <Avatar />
            <Wraper>
              {/* <h2>{user}</h2> */}
              <WraperText>{delimiter(tweets)} tweets</WraperText>
              <WraperText>{delimiter(followers)} followers</WraperText>
              <Bottom>Folow</Bottom>
            </Wraper>
          </CardItem>
        );
      })}
    </CardList>
  );
};
