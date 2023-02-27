import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
       <HelmetProvider>
         <BrowserRouter>
         {/* <AuthGuard> */}
            <App />
         {/* </AuthGuard> */}
          
        </BrowserRouter>
   </HelmetProvider>
  </React.StrictMode>
);
reportWebVitals();
