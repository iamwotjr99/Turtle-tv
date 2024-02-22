import './App.css'
import LoginHome from './pages/login/LoginHome'
import HomeMain from './pages/home/HomeMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginHome />} />
          <Route path='/' element={<HomeMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
