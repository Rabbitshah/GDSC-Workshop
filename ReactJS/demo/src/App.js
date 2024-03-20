import logo from './logo.svg';
import Text from './components/Text';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './screens/HomePage';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App ">
      {/* <Text/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login setIsLogin={setIsLogin}/>}/>
        <Route path='/register' element={<Register isLogin={isLogin}/>}/>
        <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;