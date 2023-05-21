import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Conteiner = styled.div`
  width: 1300px;
  padding: 0 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const NavList = styled.nav`
  width: 100%;
  padding: 20px 0;
  padding-left: 50px;

  border-bottom: 2px solid blue;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;

  width: 70px;
  padding: 5px 5px;

  color: black;
  background-color: #5cd3a8;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;

  transition: background-color 250ms, color 250ms;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &:hover,
  &:focus {
    background-color: #1943cf;
    color: #ffffff;
  }
`;
