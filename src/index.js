import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { Provider } from 'react-redux';
import { store } from "./app/store/useCart";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './features/i18n/i18n';

const stripePromise = loadStripe(
  'pk_test_51QSN24F0vtTqyExL1FYAvmUAwues9k4TSEHGNcodQaiZrmKOzLi2qR01u4MpmuXUeTQYDCc7SveqWdJHBloMuHRz00WIVew8vy',
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <Provider store={store}>
        <App />
      </Provider>,
    </Elements>
  </React.StrictMode>
);

