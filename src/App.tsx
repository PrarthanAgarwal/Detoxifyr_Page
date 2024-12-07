import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Home } from './pages/Home';
import { TermsAndPrivacy } from './pages/TermsAndPrivacy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-privacy" element={<TermsAndPrivacy />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;