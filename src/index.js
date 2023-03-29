import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import './index.css';
import router from './router'
import { Provider } from 'react-redux';
import store, {persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
// import App from './pages/Products/';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Run({ isStrict, children }) {
  if(isStrict) return (
    <React.StrictMode>
      {children}
    </React.StrictMode>
  )
  return children
}
root.render(
  // {/* props di masukan sebagai atribut component */}
  <Run isStrict={false}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </Run>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
