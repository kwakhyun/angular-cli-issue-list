import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Error() {
  const navigate = useNavigate();

  return (
    <ErrorContainer>
      <h1>404 NOT FOUND</h1>
      <button type="button" onClick={() => navigate("/")}>메인으로</button>
    </ErrorContainer>
  );
}

export const ErrorContainer = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    margin-bottom: 20px;
  }

  > button {
    color: #4e4e4e;
    font-size: 24px;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }
`;

export default Error;
