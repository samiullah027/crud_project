import styled from "styled-components";

export const ImgWrapper = styled.img`
  width: 100%;
  height: 600px;
`;

export const ButtonWrapper = styled.button`
  position: relative;
  bottom: 60px;
  margin-left: 30px;
  padding: 8px 16px;
  color: white;
  background-color: black;
  border: none;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    background-color: #009688;
  }
`;
