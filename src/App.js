import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='flex justify-center items-center h-screen bg-blue-100'>
      {/* LOGIN */}
      {/* Register */}

      {/* route == /login <Login />*/}
      {/* route == /register <Register />*/}
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login /> }/>
      <Route path='/register' element={<Register /> }/>
      </Routes>
      </BrowserRouter>
      <Login />
    </div>
  );
}




export default App;