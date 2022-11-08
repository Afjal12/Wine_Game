import logo from './logo.svg';
import './App.css';
import Header from './Common/Header';
import Game from './Components/Index1/Game';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import ProtectedRoute from './Components/Utils/ProtectedRoute';
import MetamskConnect from './Context/UseContext';

function App() {
  return (

    <MetamskConnect>
      <Router>
        <Routes>

          <Route path='/' element={<ProtectedRoute />} >

            <Route path='bet' element={<Game />} />
          


          </Route>
        </Routes>
      </Router>
    </MetamskConnect>
  );
}

export default App;
