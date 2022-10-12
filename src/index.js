import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './AuthScreen/Login';
import Boss from './dashboard/Boss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/Boss" element={<Boss />} />

        <Route path="/Login" element={<Login />} />
      </Routes>

    </Router>

  </React.StrictMode>
);

reportWebVitals();
