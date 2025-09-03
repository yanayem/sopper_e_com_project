import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import NotFoundPage from './Page/NotFoundPage';
import { Toaster } from 'react-hot-toast';

const App = () => {
  useEffect(() => {
    document.title = "Positivus";
  }, []); 

  return (
  <div className="font-grotesk">
    <Toaster position="top-right" />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
};

export default App;
