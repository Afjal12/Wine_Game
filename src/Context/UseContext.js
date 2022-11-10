import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MetaMaskOnboarding from '@metamask/onboarding'
import { ethers } from 'ethers';


export const Web3WalletContext = createContext();

export default function MetamskConnect({ children }) {

  const [userConnected, setUserConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState("");
  const [walletConnected, setWalletConnected] = useState("");
  const [WalletBalance, setWalletBalance] = useState();
  const [networkName , setNetworkName] = useState('')
  const onboarding = new MetaMaskOnboarding();

  // const data = useContext(Web3WalletContext)

  const ProvidermetamaskLogin = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    if (window?.ethereum == undefined) {
      onboarding.startOnboarding();
      return window.alert('Download Metamask Wallet Extension');
    }
    // eslint-disable-next-line
    if (typeof window?.ethereum !== "undefined") {
      getMetamaskAccount().then(async (response) => {
        if (response) {
          // setMetamaskAccountAddress(response);
          setUserConnected(true);
          setAccountAddress(response);
          setWalletConnected("Metamask Wallet");
          localStorage.setItem('wallet', "METAMASK");
          //   successPopup("Wallet Connected")
          //   await getProfileData()
          // navigate("/service-profile")
          getMetamaskBalance(response);
        }
      });
      
    }
    else if (typeof window?.ethereum !== "undefined" && (window?.ethereum?.networkVersion !== "5" || window?.ethereum?.networkVersion !== '69')) {
      //   errorPopup('Change Network To Kovan Or Arbitrum Ethereum.')
    } else {
      //   errorPopup("Please Add Metamask Wallet")
    }
    
  }
  const disconnectUser = async () => {
    setAccountAddress('');
    setUserConnected(false);
    setWalletConnected("");
    setNetworkName('');
    setWalletBalance('');
    localStorage.removeItem('wallet');
    // successPopup("Disconnected wallet")
  }


  const getMetamaskAccount = async () => {
    let metamaskAccounts;
    try {
      metamaskAccounts = await window?.ethereum?.request({
        method: "eth_requestAccounts",
      });
      console.log(metamaskAccounts, "Metamask Account");
      if (window?.ethereum?.networkVersion == '5'  || window?.ethereum?.networkVersion == '69' || window?.ethereum?.networkVersion == '80001') {
        return metamaskAccounts[0] 
      } else {
        window.alert("Connect to Goerli or Arbitrum Ethereum")
        throw "Connect to Goerli Network"
      }
      // let balance = await window.ethereum.metaMask.getBalanceOf(metamaskAccounts[0])
      // console.log(balance, "metamask");
    } catch (error) {
      console.error(error, "hi")
      // eslint-disable-next-line
      if (error.code == -32002) {
        window.alert('Please Manually connnect to metamask')
      }
    }

  }

  const getMetamaskBalance = async (response) => {


      let balance = await window?.ethereum?.request({
        method: 'eth_getBalance',
        params: [await response, 'latest']
      }).then(balance => {
        // Return string value to convert it into int balance
        console.log('Metamask Balance Hex Value', balance)
        // Yarn add ethers for using ethers utils or
        // npm install ethers
        console.log('Metamask Balance Decimal value' ,ethers.utils.formatEther(balance))
        if(window?.ethereum?.networkVersion == '80001'){

          setWalletBalance(ethers?.utils?.formatEther(balance) +' '+ 'MATIC') 
          setNetworkName('Mumbai')
        }
        else if(window?.ethereum?.networkVersion == '69'){

          setWalletBalance(ethers?.utils?.formatEther(balance) +' '+ 'ETH') 
          setNetworkName('Kovan')
        }
       else if(window?.ethereum?.networkVersion == '5'){

          setWalletBalance(ethers?.utils?.formatEther(balance) +' '+ 'ETH') 
          setNetworkName('Gorli')
        }
        // Format the string into main latest balance
      })
      
    }


  return (
    <>
      <Web3WalletContext.Provider value={{
        example: "example",
        userConnected,
        accountAddress,
        walletConnected,
        networkName,
        ProvidermetamaskLogin,
        disconnectUser,
        getMetamaskAccount,
        WalletBalance
      }} >
        {children}
      </Web3WalletContext.Provider>
    </>
  )
}
