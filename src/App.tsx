import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Profile from './pages/profile';
import { useAppSelector } from './store/hooks';

const App: React.FC = () => {
  // global state
  const user = useAppSelector((state) => state.login.currentUser);

  return (
    <BrowserRouter>
      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" replace />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/auth/login" replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
