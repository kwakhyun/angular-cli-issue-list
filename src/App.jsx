import { BrowserRouter } from 'react-router-dom';
import { IssueListContextProvider } from './contexts/IssueContext';
import Router from './router/Router';

function App() {
  return (
    <IssueListContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </IssueListContextProvider>
  );
}

export default App;
