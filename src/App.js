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
import Coin from './Components/Index2/Coin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Common/Sidebar/Sidebar';

function App() {
  return (

    <MetamskConnect>
      <ContractFunctions>

        <Router>
          <Routes>

            <Route path='/' element={<ProtectedRoute />} >
              <Route path='' element={<Dashboard />} />
              <Route path='bet' element={<Game />} />
              <Route path='coin' element={<Coin />} />
              <Route path='buy-token' element={<BuyToken />} />
              <Route path="sidebar" element={<Sidebar />} />
            </Route>
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Router>
      </ContractFunctions>
    </MetamskConnect>
  );
}

export default App;
