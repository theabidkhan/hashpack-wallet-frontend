'use client';
import { useEffect, useState } from 'react';
import { HashConnect, HashConnectTypes } from "hashconnect";
import axios from "axios";


let hashconnect = new HashConnect();

let appMetadata: HashConnectTypes.AppMetadata = {
name: "dApp Example",
description: "An example hedera app",
icon: "https://absolute.url/to/icon.png",
};

const PairHashPack = () => {
const [accountId, setAccountId] = useState<string>('');


useEffect(() => {
 const PairHashPack = async () => {
  let initData: HashConnectTypes.InitilizationData = await hashconnect.init(appMetadata, "mainnet", true);
  console.warn('initdata',initData);

  hashconnect.foundExtensionEvent.once((walletMetadata: HashConnectTypes.WalletMetadata) => {
   console.log(walletMetadata);
   console.log('found extenstion works');
    hashconnect.connectToLocalWallet();
  });

//   setTimeout(()=> {
//     if(!hashconnect.foundExtensionEvent) {
//         window.location.href = 'https://hashpack.com';
//     }
//   },3000);

  let accountIdPromise = new Promise<string>((resolve) => {
   hashconnect.pairingEvent.once((pairingData) => {
    const accountId = pairingData.accountIds[0];
    setAccountId(accountId);
    console.log('hashaccountid is:', accountId);
    resolve(accountId);
   });
  });

  accountIdPromise.then((accountId) => {
   axios
    .post("http://localhost:5000/api/user/loginEmitter", { accountId })
    .then((response) => {
     const json = JSON.stringify(response.data.message);
     console.log(json);
    
    })
    .catch((error) => {
      if(error.response.data.message === 'User is not Emitter'){ 
            console.log(error.response.data.message);
            
          setTimeout(() => {
            localStorage.clear();
            window.location.reload();
          }, 3000);
      }
     console.log(error);
    });
  });

  const event3 = await accountIdPromise;
  console.log('event3', event3);
 };

 PairHashPack();
},[]);

return (
<>

</>
);
};

export default PairHashPack;