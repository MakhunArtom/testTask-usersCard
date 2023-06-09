import { useEffect, useState } from "react";

import { counterFollow } from "../../utils/utils";
import { changeFolow, getUsers } from "../../API/index";

import { UserCard } from "../userCard/UserCard";
import { LoadMore } from "../loadMore/LoadMore";
import { Spiner } from "../spiner/Spiner";

import { CardList } from "./UserList.styled";

export const UserList = ({ user: { users, setUsers, filter } }) => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const shuldrenderLoadMore = users.length < 20 && !isLoading;
  const filterStatus = filter === "all";

  useEffect(() => {
    setIsLoading(true);
    getUsers(page)
      .then((resp) => setUsers((prev) => [...prev, ...resp]))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [page, setUsers]);

  const handelPageChang = () => setPage((prev) => (prev += 1));

  const handelFolowerChang = ({ target }, isFolow, followers) => {
    const userId = target.dataset.id;

    let resault = counterFollow(followers, isFolow);

    changeFolow(userId, !isFolow, resault)
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
      .catch((err) => setError(err.message));
  };

  return (
    <>
      <CardList>
        {error ? (
          <h1>{error}</h1>
        ) : (
          <UserCard
            filter={filter}
            users={users}
            handelFolowerChang={handelFolowerChang}
          />
        )}
      </CardList>

      {isLoading && <Spiner></Spiner>}

      {shuldrenderLoadMore && filterStatus && (
        <LoadMore handelPageChang={handelPageChang}></LoadMore>
      )}
    </>
  );
};
