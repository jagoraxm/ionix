import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Logout from './Components/Logout';

const App = () => {

  const user = useSelector(selectUser)

  return (
    <div>
      { user ? <Logout /> : <Login /> }
    </div>
  );
}

export default App;
