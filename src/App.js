import ArticlesPage from './pages/ArticlesPage';
import DealbookPage from './pages/DealbookPage';
import HomePage from './pages/HomePage';
import SurveysPage from './pages/SurveysPage';
import UserPage from './pages/UserPage';
import UserPassPage from './pages/UserPassPage';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route element={<HomePage />} path='/home' />
      <Route element={<ArticlesPage />} path='/articles' />
      <Route element={<DealbookPage />} path='/dealbook' />
      <Route element={<SurveysPage />} path='/surveys' />
      <Route element={<UserPage />} path='/user' />
      <Route element={<UserPassPage />} path='/passchange' />
    </Routes>
  );
}

export default App;
