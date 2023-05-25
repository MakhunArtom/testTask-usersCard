import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Headeer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;

  border-bottom: 2px solid blue;
`;

export const Navigate = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavigateList = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavigateItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const NavigateLink = styled(NavLink)`
  display: inline-block;

  width: 70px;
  padding: 5px 5px;

  color: black;
  background-color: #5cd3a8;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;

  transition: background-color 250ms, color 250ms;

  &:hover,
  &:focus {
    background-color: #1943cf;
    color: #ffffff;
  }
`;
