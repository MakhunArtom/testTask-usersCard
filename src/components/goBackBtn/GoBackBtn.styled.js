import styled from "styled-components";

export const BackBtn = styled.button`
  position: absolute;
  top: 10px;
  left: 45px;

  display: inline-block;
  width: 50px;
  height: 30px;

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
