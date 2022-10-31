import React, { createContext, useCallback, useEffect, useState } from 'react';
import { getIssueList } from '../api/api';

export const IssueListContext = createContext({
  issueList: [],
  isLoading: true,
  isEndData: false,
  isError: false,
  handleNextPage: () => {},
});

// eslint-disable-next-line react/prop-types
export function IssueListContextProvider({ children }) {
  const [issueList, setIssueList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [isEndData, setEndData] = useState(false);
  const [isError, setError] = useState(false);

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handleIssueList = useCallback(() => {
    setLoading(true);
    getIssueList(page)
      .then((res) => {
        setIssueList((prev) => [...prev, ...res]);
        setLoading(false);
        if (res.length === 0) setEndData(true);
      })
      .catch(() => {
        setError(true);
      });
  }, [page]);

  useEffect(() => {
    handleIssueList();
  }, [handleIssueList]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <IssueListContext.Provider value={{ issueList, isLoading, isEndData, isError, handleNextPage }}>
      {children}
    </IssueListContext.Provider>
  );
}
