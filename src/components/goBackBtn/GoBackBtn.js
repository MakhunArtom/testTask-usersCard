import { useNavigate } from "react-router-dom";

import { BackBtn } from "./GoBackBtn.styled";

export const GoBackBtn = ({ children }) => {
  const navigate = useNavigate();

  const handelBack = () => {
    navigate("/");
  };

  return <BackBtn onClick={handelBack}>{children}</BackBtn>;
};
