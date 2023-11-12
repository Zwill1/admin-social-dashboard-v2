import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout'
import NotFound from './components/NotFound';
import Login from './components/Login';
import Home from './components/admin/Home';
import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profile';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />

        {/* private routes */}
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
