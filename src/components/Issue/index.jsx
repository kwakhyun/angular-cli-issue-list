import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import convertDay from '../../utils/convertDay';

// eslint-disable-next-line react/prop-types
function Issue({ issuenumber, title, owner, createdAt, comments, isAdvertisement }) {
  const navigate = useNavigate();
  const handleRedirectIssue = () => navigate(`/issue/${issuenumber}`);

  return (
    <>
      <IssueContainer>
        <div>
          <div>
            <button type="button" onClick={handleRedirectIssue}>
              #{issuenumber} {title}
            </button>
          </div>
          <div>
            <span>
              작성자: {owner}, 작성일: {convertDay(createdAt)}
            </span>
          </div>
        </div>
        <div>코멘트: {comments}</div>
      </IssueContainer>
      {isAdvertisement && (
        <a href="https://www.wanted.co.kr/" target="_blank" rel="noreferrer">
          <AdvertisementContainer>
            <div>광고</div>
          </AdvertisementContainer>
        </a>
      )}
    </>
  );
}

export const IssueContainer = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: auto 70px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  margin-bottom: 20px;

  &:nth-child(4) {
    margin-bottom: 0;
  }

  > div > div > button {
    font-size: 14px;
    color: #4e4e4e;
    outline: none;
    border: none;
    background: none;
    text-align: start;
    margin-bottom: 5px;
    cursor: pointer;
    word-break: break-all;

    &:hover {
      color: #000;
    }
  }

  > div:last-child {
    display: flex;
    align-self: center;
  }
`;

export const AdvertisementContainer = styled.div`
  position: relative;
  cursor: pointer;
  height: 100px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url('https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100');

  > div {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

export default Issue;
