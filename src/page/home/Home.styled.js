import styled from "styled-components";

import heroBk from "../../img/bakcraund.jpg";

export const PageSection = styled.section`
  padding: 300px 0 200px 0;

  background-image: linear-gradient(
      rgba(47, 48, 58, 0.5),
      rgba(47, 48, 58, 0.5)
    ),
    url(${heroBk});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const PageTitel = styled.h1`
  max-width: 505px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  font-weight: 600;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
`;

export const JoinToUs = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 200px;
  height: 50px;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  cursor: pointer;

  color: black;
  background-color: #5cd3a8;

  transition: background-color 250ms, color 250ms;

  &:hover,
  &:focus {
    background-color: #1943cf;
    color: #ffffff;
  }
`;
