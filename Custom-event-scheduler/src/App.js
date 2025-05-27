import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Calendar } from './pages';
import './App.css';

const App = () => (
  <div>
    <BrowserRouter>
      <div className="flex relative">
        <div className="w-full min-h-screen">
          <div>
            <Routes>
              <Route path="/" element={<Calendar />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
