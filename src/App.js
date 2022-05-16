import { Fragment } from 'react';
import {Routes ,Route} from 'react-router-dom';
import Login from './components/login/Login';
import Sign_up from './components/sign_up/Sign_up';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Sign_Up' element={<Sign_up />} />
      </Routes>
    </Fragment>
  );
}

export default App;
