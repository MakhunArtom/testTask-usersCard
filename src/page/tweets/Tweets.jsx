import { Conteiner } from "../../App/App.styled";
import { PageSection } from "./Tweets.styled";

import { GoBackBtn } from "../../components/goBackBtn/GoBackBtn";
import { UserList } from "../../components/userList/UserList";
import { useEffect } from "react";

export const Tweets = (props) => {
  const { setUsers } = props;

  useEffect(() => {
    return () => {
      setUsers([]);
    };
  }, [setUsers]);

  return (
    <PageSection>
      <Conteiner>
        <GoBackBtn>BACK</GoBackBtn>
        <UserList user={props}></UserList>
      </Conteiner>
    </PageSection>
  );
};
