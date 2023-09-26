import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: black;
  color: white;
  border: 1px solid;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  min-width: 100%;
`;

export const FooterButton = styled.button`
  background-color: ${({color}) => color};
  padding: 10px;
  text-align: center;
`;
