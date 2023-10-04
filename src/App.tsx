import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
import SplashPage from './pages/SplashPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/write" element={<WritePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
