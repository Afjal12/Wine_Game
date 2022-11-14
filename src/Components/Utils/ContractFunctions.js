import { ethers } from 'ethers';
import React from 'react'
import { useEffect } from 'react';
import { createContext } from 'react'
import { Contract_Address } from './CommonConstant';
import SmartContractABI from "../Utils/ContractAbi.json";
import { useContext } from 'react';
import { Web3WalletContext } from '../../Context/UseContext';
import { useState } from 'react';
import { formatEther, parseEther } from 'ethers/lib/utils';




export const ContractFunctionsContext = createContext();

export default function ContractFunctions({ children }) {

    const [matic, setMatic] = useState('');
    const [token, setToken] = useState('');


    function handleSetMatic(e) {
        setMatic(e.target.value) 
        setToken((e.target.value) * 80)
    }


    const { accountAddress, userConnected } = useContext(Web3WalletContext)

    const [readBalanceOf, setreadBalanceOf] = useState('');
    const [readDepositedTokens, setreadDepositedTokens] = useState('');

    const getToken = async (e) => {
        //  Function name - BuyTokens hai -write method ka 
        console.log("get token chal raha hai ");
        e.preventDefault();
       try {
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const daiContract = await new ethers.Contract(Contract_Address, SmartContractABI, signer);
        console.log(daiContract);
        console.log(accountAddress);
        console.log(token);
        console.log(matic);

            const decimal =await daiContract.BuyTokens(accountAddress,token,{
                value: parseEther(matic)
            })
        console.log(decimal);
        // decimal.wait()

       } catch (error) {
        console.log(error);
       }
    }

    useEffect(() => {
        balanceOf()
        depositedTokens()
    }, [userConnected])
    const balanceOf = async () => {
        // Function name -balanceOf hai -read method ka
        try {
            const provider = await new ethers.providers.Web3Provider(window.ethereum);
            const signer = await provider.getSigner();
            const daiContract = await new ethers.Contract(Contract_Address, SmartContractABI, signer);
            let fun = await daiContract.balanceOf(accountAddress);
            let decimal = fun.toString()
            console.log(decimal);
            setreadBalanceOf(decimal);
        } catch (error) {
          console.log(error);  
        }

      

    }
    const depositedTokens = async () => {

        // Function name - DepositedTokens hai - read method ka 
       try {
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const daiContract = await new ethers.Contract(Contract_Address, SmartContractABI, signer);
        let deposit = await daiContract.DepositedTokens(accountAddress);
        let decimal = deposit.toString();
        console.log(decimal);
        setreadDepositedTokens(decimal)

       } catch (error) {
        console.log(error);        
       }
    }

// Contract Function Conponent Data and functions Write method ka Withdraw token

const [withdrawAddress , setWithdrawAddress ] = useState('');
const [withdrawTokens , setWithdrawTokens] = useState('');
const handleWithdraw = (e) => {
    setWithdrawAddress(e.target.value);
}
const handleTokens = (e) => {
    setWithdrawTokens(e.target.value)
}
const ClickWithdrawFunction =async () => {
 
  if (withdrawTokens >= 50) {
    try {
        const provider = await new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();
        const daiContract = await new ethers.Contract(Contract_Address,SmartContractABI,signer);
        console.log(daiContract);
        console.log(withdrawAddress);
        console.log(withdrawTokens);
        let withdraw = await daiContract.withdrawTokens(withdrawAddress,withdrawTokens);
        withdraw.wait()
        console.log(withdraw);
    
    } catch (error) {
        console.log(error);
    }
  } else {
    window.alert('Please check your Token it is less that 50 ')
  }
}

/// Write method ka Deposit-eth function

const [ DepositTokens , setDepositTokens] = useState();
const handleDeposit = (e) =>{
   setDepositTokens(e.target.value)
}

const ClickDepositEth = async() =>{
    if(DepositTokens >= 20){
        try {
            const provider = await new ethers.providers.Web3Provider(window.ethereum) ;
            const signer = await provider.getSigner();
            const daiContract = await new ethers.Contract(Contract_Address,SmartContractABI,signer)
            let Eth = await daiContract.DepositEth(DepositTokens)
            console.log(Eth);
          } catch (error) {
            console.log(error);
          }
    }
    else{
        window.alert('Token must be Greater than 20')
    }
}

    return (
        <ContractFunctionsContext.Provider value={{
            getToken,
            readBalanceOf,
            readDepositedTokens,
            matic,
            setMatic,
            token,
            setToken,
            handleSetMatic,
            handleWithdraw,
            handleTokens,
            ClickWithdrawFunction,
            handleDeposit,
            ClickDepositEth
        }}>
            {children}
        </ContractFunctionsContext.Provider>
    )
}










































// import { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import erc20abi from "./ERC20abi.json";
// import ErrorMessage from "./ErrorMessage";
// import TxList from "./TxList";

// export default function App() {
//   const [txs, setTxs] = useState([]);
//   const [contractListened, setContractListened] = useState();
//   const [error, setError] = useState();
//   const [contractInfo, setContractInfo] = useState({
//     address: "-",
//     tokenName: "-",
//     tokenSymbol: "-",
//     totalSupply: "-"
//   });
//   const [balanceInfo, setBalanceInfo] = useState({
//     address: "-",
//     balance: "-"
//   });

//   useEffect(() => {
//     if (contractInfo.address !== "-") {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const erc20 = new ethers.Contract(
//         contractInfo.address,
//         erc20abi,
//         provider
//       );

//       erc20.on("Transfer", (from, to, amount, event) => {
//         console.log({ from, to, amount, event });

//         setTxs((currentTxs) => [
//           ...currentTxs,
//           {
//             txHash: event.transactionHash,
//             from,
//             to,
//             amount: String(amount)
//           }
//         ]);
//       });
//       setContractListened(erc20);

//       return () => {
//         contractListened.removeAllListeners();
//       };
//     }
//   }, [contractInfo.address]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//     const provider = new ethers.providers.Web3Provider(window.ethereum);

//     const erc20 = new ethers.Contract(data.get("addr"), erc20abi, provider);

//     const tokenName = await erc20.name();
//     const tokenSymbol = await erc20.symbol();
//     const totalSupply = await erc20.totalSupply();

//     setContractInfo({
//       address: data.get("addr"),
//       tokenName,
//       tokenSymbol,
//       totalSupply
//     });
//   };

//   const getMyBalance = async () => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     await provider.send("eth_requestAccounts", []);
//     const erc20 = new ethers.Contract(contractInfo.address, erc20abi, provider);
//     const signer = await provider.getSigner();
//     const signerAddress = await signer.getAddress();
//     const balance = await erc20.balanceOf(signerAddress);

//     setBalanceInfo({
//       address: signerAddress,
//       balance: String(balance)
//     });
//   };

//   const handleTransfer = async (e) => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     await provider.send("eth_requestAccounts", []);
//     const signer = await provider.getSigner();
//     const erc20 = new ethers.Contract(contractInfo.address, erc20abi, signer);
//     await erc20.transfer(data.get("recipient"), data.get("amount"));
//   };

//   return (
//     <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
//       <div>
//         <form className="m-4" onSubmit={handleSubmit}>
//           <div className="credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
//             <main className="mt-4 p-4">
//               <h1 className="text-xl font-semibold text-gray-700 text-center">
//                 Read from smart contract
//               </h1>
//               <div className="">
//                 <div className="my-3">
//                   <input
//                     type="text"
//                     name="addr"
//                     className="input input-bordered block w-full focus:ring focus:outline-none"
//                     placeholder="ERC20 contract address"
//                   />
//                 </div>
//               </div>
//             </main>
//             <footer className="p-4">
//               <button
//                 type="submit"
//                 className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
//               >
//                 Get token info
//               </button>
//             </footer>
//             <div className="px-4">
//               <div className="overflow-x-auto">
//                 <table className="table w-full">
//                   <thead>
//                     <tr>
//                       <th>Name</th>
//                       <th>Symbol</th>
//                       <th>Total supply</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <th>{contractInfo.tokenName}</th>
//                       <td>{contractInfo.tokenSymbol}</td>
//                       <td>{String(contractInfo.totalSupply)}</td>
//                       <td>{contractInfo.deployedAt}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             <div className="p-4">
//               <button
//                 onClick={getMyBalance}
//                 type="submit"
//                 className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
//               >
//                 Get my balance
//               </button>
//             </div>
//             <div className="px-4">
//               <div className="overflow-x-auto">
//                 <table className="table w-full">
//                   <thead>
//                     <tr>
//                       <th>Address</th>
//                       <th>Balance</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <th>{balanceInfo.address}</th>
//                       <td>{balanceInfo.balance}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </form>
//         <div className="m-4 credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
//           <div className="mt-4 p-4">
//             <h1 className="text-xl font-semibold text-gray-700 text-center">
//               Write to contract
//             </h1>

//             <form onSubmit={handleTransfer}>
//               <div className="my-3">
//                 <input
//                   type="text"
//                   name="recipient"
//                   className="input input-bordered block w-full focus:ring focus:outline-none"
//                   placeholder="Recipient address"
//                 />
//               </div>
//               <div className="my-3">
//                 <input
//                   type="text"
//                   name="amount"
//                   className="input input-bordered block w-full focus:ring focus:outline-none"
//                   placeholder="Amount to transfer"
//                 />
//               </div>
//               <footer className="p-4">
//                 <button
//                   type="submit"
//                   className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
//                 >
//                   Transfer
//                 </button>
//               </footer>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="m-4 credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
//           <div className="mt-4 p-4">
//             <h1 className="text-xl font-semibold text-gray-700 text-center">
//               Recent transactions
//             </h1>
//             <p>
//               <TxList txs={txs} />
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
