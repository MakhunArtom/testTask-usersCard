import { Routes, Route } from "react-router-dom";

import { NavList, StyledLink } from "./App.styled";

import { Tweets } from "../page/tweets/Tweets";
import { Home } from "../page/home/Home";

export const App = () => {
  return (
    <>
      <NavList>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/tweets">Tweets</StyledLink>
      </NavList>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
