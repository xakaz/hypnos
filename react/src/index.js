import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from "./context/UserContext";
import { HotelContextProvider } from './context/HotelContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
      <HotelContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </HotelContextProvider>
    </BrowserRouter>
);

