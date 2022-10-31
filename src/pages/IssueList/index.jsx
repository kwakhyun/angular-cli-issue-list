import { useContext, useRef } from 'react';
import { IssueListContext } from '../../contexts/IssueContext';
import useInfinityScroll from '../../hooks/useInfinityScroll';
import Issue from '../../components/Issue';
import Error from '../../components/Error';
import { IssuesContainer, Loading, Notification } from './styled';

function IssueList() {
  const { issueList, isLoading, isEndData, isError, handleNextPage } = useContext(IssueListContext);

  const obsRef = useRef(null);

  useInfinityScroll(obsRef, isLoading, isEndData, handleNextPage);

  if (isError) return <Error />;

  return (
    <IssuesContainer>
      <div>
        {issueList.map((e, i) => (
          <Issue
            key={e.id}
            issuenumber={e.number}
            title={e.title}
            owner={e.user.login}
            createdAt={e.created_at}
            comments={e.comments}
            isAdvertisement={i === 3}
          />
        ))}
        {isEndData && <Notification>더 이상 불러올 데이터가 없습니다.</Notification>}
        <div ref={obsRef}>{isLoading && <Loading>로딩중...</Loading>}</div>
      </div>
    </IssuesContainer>
  );
}

export default IssueList;
