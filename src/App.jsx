import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout'
import NotFound from './components/NotFound';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}

        {/* private routes */}

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
