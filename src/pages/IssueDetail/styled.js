import styled from "styled-components";
import { IssuesContainer } from "../IssueList/styled";

export const IssueDetailContaier = styled(IssuesContainer)`
  > div {
    width: 100%;
  }

  > div:first-child > div {
    padding-bottom: 30px;
  }

  > div:last-child > code {
    position: relative;
  }
`;

export const IssueInfomation = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 50px auto 70px;
  border-bottom: 1px solid #ccc;

  > div {
    display: flex;
  }

  > div:first-child {
    align-self: center;
  }

  > div:nth-child(2) {
    display: block;
    word-break: break-all;
  }

  > div:nth-child(2) > div:first-child {
    padding-bottom: 15px;
  }

  > div:last-child {
    align-self: center;
  }
`;

export const UserAvatar = styled.div`
  background-image: url(${props => props.avatar});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50px;
  width: 50px;
`;