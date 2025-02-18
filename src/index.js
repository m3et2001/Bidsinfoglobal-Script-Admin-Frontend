import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss"
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient(
  {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
}
)

root.render(
  // <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <QueryClientProvider client={queryClient}>

        <App />
      </QueryClientProvider>
    </StateProvider>
  // </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
