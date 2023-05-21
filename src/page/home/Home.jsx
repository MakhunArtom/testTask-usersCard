import { useNavigate } from "react-router-dom";

import { PageSection, JoinToUs, PageTitel } from "./Home.styled";
import { Conteiner } from "../../App/App.styled";

export const Home = () => {
  const navigate = useNavigate();

  const handelBack = () => {
    navigate("/tweets");
  };

  return (
    <PageSection>
      <Conteiner>
        <PageTitel>Recruit followers. Raise your self-esteem!</PageTitel>
        <JoinToUs type="button" onClick={handelBack}>
          JOIN TO US
        </JoinToUs>
      </Conteiner>
    </PageSection>
  );
};
