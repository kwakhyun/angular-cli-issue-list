import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MarkdownPreview from '@uiw/react-markdown-preview';
import convertDay from '../../utils/convertDay';
import { Loading } from '../IssueList/styled';
import { IssueDetailContaier, IssueInfomation, UserAvatar } from './styled';
import { getIssueDetail } from '../../api/api';

function IssueDetail() {
  const navigate = useNavigate();
  const { issuenumber } = useParams();
  const [issue, setIssue] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getIssueDetail(issuenumber)
      .then((res) => {
        if (res.state !== 'open') navigate('/error');
        setIssue(res);
        setLoading(false);
      })
      .catch(() => {
        navigate('/error');
      });
  }, [issuenumber, navigate]);

  if (loading) return <Loading>로딩중...</Loading>;

  return (
    <IssueDetailContaier>
      <div>
        <IssueInfomation>
          <UserAvatar avatar={issue.user.avatar_url} />
          <div>
            <div>
              #{issue.number} {issue.title}
            </div>
            <div>
              작성자: {issue.user.login}, 작성일: {convertDay(issue.created_at)}
            </div>
          </div>
          <div>코멘트: {issue.comments}</div>
        </IssueInfomation>
      </div>
      <MarkdownPreview source={issue.body} />
    </IssueDetailContaier>
  );
}

export default IssueDetail;
