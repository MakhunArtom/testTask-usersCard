import { useEffect, useState } from "react";

import { delimiter } from "../../utils/utils";
import { getUsers } from "../../API/getUsers";
import {
  CardList,
  CardItem,
  Avatar,
  Wraper,
  WraperText,
  Bottom,
  Logo,
  LoadMore,
} from "./Card.styled";
import { changeFolow } from "../../API/changeFolow";

export const Card = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const shuldrenderLoadMoreButton = users.length > 0 && !isLoading;

  const handelPageChang = () => setPage((prev) => (prev += 1));

  const handelFolowerChang = ({ target }, isFolow, followers) => {
    const userId = target.dataset.id;

    const counterFollow = (quntity) => {
      let quntytiFollow = Number(quntity);

      if (!isFolow) {
        quntytiFollow += 1;
      } else {
        quntytiFollow -= 1;
      }

      return quntytiFollow;
    };

    let resault = counterFollow(followers);

    changeFolow(userId, !isFolow, resault)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((prev) => {
          return prev.map((el) => {
            if (el.id === data.id) {
              el.isFolow = data.isFolow;
              el.followers = data.followers;
            }
            return el;
          });
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoading(true);
    getUsers(page)
      .then((resp) => setUsers((prev) => [...prev, ...resp]))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [page]);

  return (
    <>
      <CardList>
        {users.map(({ user, tweets, followers, avatar, id, isFolow }) => {
          return (
            <CardItem key={id}>
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
            </CardItem>
          );
        })}
      </CardList>

      {isLoading && <span>Loader....</span>}

      {shuldrenderLoadMoreButton && (
        <LoadMore type="button" onClick={handelPageChang}>
          Load More
        </LoadMore>
      )}
    </>
  );
};
