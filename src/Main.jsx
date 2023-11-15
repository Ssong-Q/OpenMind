import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from 'components';
import {
  HomePage,
  QuestionFeedPage,
  QuestionListPage,
  AnswerFeedPage,
  NotFoundPage,
} from 'pages';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="list">
            <Route path=":page/:sorted" element={<QuestionListPage />} />
          </Route>
          <Route path="post">
            <Route path=":id" element={<QuestionFeedPage />} />
            <Route path=":id/answer" element={<AnswerFeedPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
