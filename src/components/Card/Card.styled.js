import styled from "styled-components";
import bk from "../../img/backgraund.png";
import avatar from "../../img/Boy.svg";
import logo from "../../img/Logo.svg";

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;

  list-style: none;
`;

export const CardItem = styled.li`
  position: relative;

  margin-right: auto;
  margin-left: auto;
  width: 380px;
  height: 460px;
  flex-basis: calc((100% - 3 * 48) / 3);

  background-image: url(${bk}),
    linear-gradient(115deg, #471ca9 -1%, #5736a3 54%, #4b2a99 79%);
  background-repeat: no-repeat;
  background-position: 50% 10%;
  box-shadow: -3px 7px 21px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: inline-block;
    width: 100%;
    height: 8px;
    background-color: #ffffff;
  }
`;

export const Avatar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80px;
  height: 80px;

  background-image: url(${avatar});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wraper = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 36px;
  width: 100%;
`;

export const WraperText = styled.span`
  margin-bottom: 16px;

  &:nth-child(2) {
    margin-bottom: 26px;
  }

  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Bottom = styled.button`
  display: inline-block;
  width: 196px;
  height: 50px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1, 22;
  text-transform: uppercase;
  color: #373737;

  background-color: ${({ folowing }) => (folowing ? "#5cd3a8" : "#ebd8ff")};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  cursor: pointer;

  transition: background-color 250ms;

  &:hover {
    background-color: #5cd3a8;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  width: 79px;
  height: 22px;

  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  fill: red;
  stroke: #f44336;
  stroke-width: 3px;
`;

export const LoadMore = styled.button`
  display: block;
  width: 196px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;

  font-weight: 600;
  font-size: 18px;
  line-height: 1, 22;
  text-transform: uppercase;
  color: #373737;

  background-color: #5cd3a8;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
