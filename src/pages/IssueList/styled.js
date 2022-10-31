import styled from "styled-components";

export const IssuesContainer = styled.div`
  font-size: 14px;
  color: #4e4e4e;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 0;

  > div {
    padding: 30px;
    max-width: 700px;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
`;

export const Notification = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  font-size: 16px;
`;