import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from 'components';
import { HomePage, QuestionFeedPage, QuestionListPage } from 'pages';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="list" element={<QuestionListPage />} />
          <Route path="feed" element={<QuestionFeedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
