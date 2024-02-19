import './App.css'
import LoginHome from './pages/login/LoginHome'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
