import React from 'react'

export default function Header() {
//     const initialize = () => {
//   //Basic Actions Section
//   const onboardButton = document.getElementById('connectButton');
//   const getAccountsButton = document.getElementById('getAccounts');
//   const getAccountsResult = document.getElementById('getAccountsResult');

//   //Created check function to see if the MetaMask extension is installed
//   const isMetaMaskInstalled = () => {
//     //Have to check the ethereum binding on the window object to see if it's installed
//     const { ethereum } = window;
//     return Boolean(ethereum && ethereum.isMetaMask);
//   };

//   //We create a new MetaMask onboarding object to use in our app
//   const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

//   //This will start the onboarding proccess
//   const onClickInstall = () => {
//     onboardButton.innerText = 'Onboarding in progress';
//     onboardButton.disabled = true;
//     //On this object we have startOnboarding which will start the onboarding process for our end user
//     onboarding.startOnboarding();
//   };

//   const onClickConnect = async () => {
//     try {
//       // Will open the MetaMask UI
//       // You should disable this button while the request is pending!
//       await ethereum.request({ method: 'eth_requestAccounts' });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const MetaMaskClientCheck = () => {
//     //Now we check to see if Metmask is installed
//     if (!isMetaMaskInstalled()) {
//       //If it isn't installed we ask the user to click to install it
//       onboardButton.innerText = 'Click here to install MetaMask!';
//       //When the button is clicked we call th is function
//       onboardButton.onclick = onClickInstall;
//       //The button is now disabled
//       onboardButton.disabled = false;
//     } else {
//       //If MetaMask is installed we ask the user to connect to their wallet
//       onboardButton.innerText = 'Connect';
//       //When the button is clicked we call this function to connect the users MetaMask Wallet
//       onboardButton.onclick = onClickConnect;
//       //The button is now disabled
//       onboardButton.disabled = false;
//     }
//   };

//   //Eth_Accounts-getAccountsButton
//   getAccountsButton.addEventListener('click', async () => {
//     //we use eth_accounts because it returns a list of addresses owned by us.
//     const accounts = await ethereum.request({ method: 'eth_accounts' });
//     //We take the first address in the array of addresses and display it
//     getAccountsResult.innerHTML = accounts[0] || 'Not able to get accounts';
//   });

//   MetaMaskClientCheck();
// };

// window.addEventListener('DOMContentLoaded', initialize);
// const ethereumButton = document.querySelector('.enableEthereumButton');

// ethereumButton.addEventListener('click', () => {
//   //Will Start the metamask extension
//   ethereum.request({ method: 'eth_requestAccounts' });
// });

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <button className='btn btn-secondry mx-3 ' id='connectButton'>connect wallet</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
