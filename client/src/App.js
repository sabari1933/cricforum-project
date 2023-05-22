import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Landing} from './components/Landingpage/Landing';
import {Login} from './components/Login/login';
import Signup from './components/Signup/Signup';
import Format from './components/Formatpage/Format';
import { Teamname } from './components/Teamname/Teamname';
import {Teamplayers} from './components/Teamplayers/Teamplayers';
import { Playerdetails } from './components/Playerdetails/Playerdetails';
function App() {
  return (
  <>

<BrowserRouter>
<Routes>
  <Route path='/' element={[<Landing/>]}/>
  <Route path='/signup' element={[<Signup/>]}/>
  <Route path='/login' element={[<Login/>]}/>
  <Route path='/format' element={[<Format/>]}/>
  <Route path='/team' element={[<Teamname/>]}/>
  <Route path='/teamplayers' element={[<Teamplayers/>]}/>
  <Route path='/playerdetails' element={[<Playerdetails/>]}/>
</Routes>
</BrowserRouter>

    

  </>
  );
}

export default App;
