import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './layout/App';
import AppAPropos from './layout/App-apropos';
import Header from './components/Header';
import Error from './layout/Error';
import Footer from './components/Footer'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FicheLogement from './layout/Fiche-logement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/a-propos" element={<AppAPropos />} />
        <Route path="*" element={<Error />} />
        <Route path={`/fiche-logement/:id`} element={<FicheLogement />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
