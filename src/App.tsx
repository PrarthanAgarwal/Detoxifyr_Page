import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { TermsAndPrivacy } from './pages/TermsAndPrivacy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-privacy" element={<TermsAndPrivacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;