import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout'
import NotFound from './components/NotFound';
import Login from './components/Login';
import Home from './components/admin/Home';
import DashboardPage from './components/admin/DashboardPage';
import Profile from './components/admin/Profile';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Integration from './components/admin/Integration';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/login" element={<Login />} />

        {/* private routes */}
        <Route index path="/" element={<Home />} />

        <Route path="/dashboard" element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>} 
        />

        <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>} 
        />

        <Route path="/integration" element={
        <ProtectedRoute>
          <Integration />
        </ProtectedRoute>} 
        />

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
