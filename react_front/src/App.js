import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginHome from './pages/login/LoginHome'
import HomeMain from './pages/home/HomeMain';
import MainLayout from './component/MainLayout';
import CommunityMain from './pages/community/CommunityMain';
import AddNewPost from './pages/community/AddNewPost';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginHome />} />
          <Route element={<MainLayout />} >
            <Route path="/" element={<HomeMain />} />
            <Route path="/community" element={<CommunityMain />} />
            <Route path="/community/add" element={<AddNewPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
