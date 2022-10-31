import { Route, Routes } from 'react-router-dom';
import Error from '../components/Error';
import IssueDetail from '../pages/IssueDetail';
import IssueList from '../pages/IssueList';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<IssueList />} />
      <Route path="/issue/:issuenumber" element={<IssueDetail />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
export default Router;
