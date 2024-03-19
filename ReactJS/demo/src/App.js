import logo from './logo.svg';
import Text from './components/Text';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div class="App ">
      {/* <Text/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;