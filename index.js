import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css';
import App from './App.js';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
// in react 18 version we use createRoot method instead of ReactDom
// for connecting frontend with backend we need to make same localhost for both
// so we in frontend package.json make proxy.
const root = createRoot(document.getElementById('root'));
// for using RouterDom we need to wrap our app in BrowserRouter which helps to set up routes(navigation)
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <ChakraProvider>
      <App />
      </ChakraProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

