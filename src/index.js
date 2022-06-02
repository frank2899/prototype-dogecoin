import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MoralisProvider } from "react-moralis";
import reportWebVitals from './reportWebVitals';
import OpenseaProvider from './context/opensea.context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider appId="KT7sKeaetW88ew2PhaotERfvK0kiTULaKD3606YH" serverUrl="https://l2ynqfhdvd0k.usemoralis.com:2053/server">
      <OpenseaProvider>
        <App />
      </OpenseaProvider>
    </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
