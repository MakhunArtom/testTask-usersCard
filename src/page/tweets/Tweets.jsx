import { Conteiner } from "../../App/App.styled";
import { PageSection } from "./Tweets.styled";

import { GoBackBtn } from "../../components/goBackBtn/GoBackBtn";
import { UserList } from "../../components/userList/UserList";

export const Tweets = () => {
  return (
    <PageSection>
      <Conteiner>
        <GoBackBtn>BACK</GoBackBtn>
        <UserList></UserList>
      </Conteiner>
    </PageSection>
  );
};
