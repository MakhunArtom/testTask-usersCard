import styled from "styled-components";

export const DropBarWraper = styled.div`
  position: relative;
`;

export const DropBarBtn = styled.button`
  display: inline-block;
  width: 100px;
  padding: 5px;

  color: black;
  background-color: #5cd3a8;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  transition: background-color 250ms, color 250ms;

  &:hover,
  &:focus {
    background-color: #1943cf;
    color: #ffffff;
  }
`;

export const DropBarMenuWraper = styled.div`
  position: absolute;
  bottom: -65px;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  /* background-color: red; */

  z-index: 9999;
`;

export const StyledDropBarMenuItem = styled.button`
  width: 100px;
  margin-right: auto;
  margin-left: auto;

  padding: 3px;

  color: black;
  background-color: #5cd3a8;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  transition: background-color 250ms, color 250ms;

  &:hover,
  &:focus {
    background-color: #1943cf;
    color: #ffffff;
  }
`;
