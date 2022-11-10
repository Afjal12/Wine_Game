import logo from './logo.svg';
import './App.css';
import Header from './Common/Header';
import Game from './Components/Index1/Game';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './Components/Utils/ProtectedRoute';
import MetamskConnect from './Context/UseContext';
import ContractFunctions from './Components/Utils/ContractFunctions';
import Dashboard from './Components/Dashboard/Dashboard';
import BuyToken from './Components/BuyToken/BuyToken';

function App() {
  return (

    <MetamskConnect>
      <ContractFunctions>

        <Router>
          <Routes>

            <Route path='/' element={<ProtectedRoute />} >

              <Route path='' element={<Dashboard />} />
              <Route path='bet' element={<Game />} />
              <Route path='buy-token' element={<BuyToken />} />



            </Route>
          </Routes>
        </Router>
      </ContractFunctions>
    </MetamskConnect>
  );
}

export default App;
