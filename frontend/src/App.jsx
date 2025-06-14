import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import ConsentForm from './components/ConsentForm';
import ConsentLinkPage from './components/ConsentLinkPage';
import LogsPage from './components/LogsPage';
import SignUpPage from './components/SignUpPage';
import Navbar from './components/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/consent/:token" element={<ConsentLinkPage />} />
        <Route path="/give-consent" element={<ConsentForm />} />
        <Route path="/logs" element={<LogsPage />} />
      </Routes>
    </Router>
  );
};

export default App;