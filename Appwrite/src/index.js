import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';
// import { detectOverflow } from '@popperjs/core';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = document.querySelector('#jss-server-side');
// root.render(
//   <React.StrictMode>
//     <DarkModeContextProvider>
//     <App />
//     </DarkModeContextProvider>
//   </React.StrictMode>
// );

root.render();
const { Component, pageProps } = this.props;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import api from './api/api';
// import { useEffect, useReducer } from 'react';

// export const FetchState = {
//   FETCH_INIT: 0,
//   FETCH_SUCCESS: 1,
//   FETCH_FAILURE: 2,
// };

// export const useGetTodos = (stale) => {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case FetchState.FETCH_INIT:
//         return { ...state, isLoading: true, isError: false };
//       case FetchState.FETCH_SUCCESS:
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//           todos: action.payload,
//         };
//       case FetchState.FETCH_FAILURE:
//         return { ...state, isLoading: false, isError: true };
//       default:
//         throw new Error();
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, {
//     isLoading: false,
//     isError: false,
//     todos: [],
//   });

//   useEffect(() => {
//     let didCancel = false;
//     const getTodos = async () => {
//       dispatch({ type: FetchState.FETCH_INIT });
//       try {
//         const data = await api.listDocuments(
//           process.env.REACT_APP_COLLECTION_ID
//         );
//         if (!didCancel) {
//           dispatch({ type: FetchState.FETCH_SUCCESS, payload: data.documents });
//         }
//       } catch (e) {
//         if (!didCancel) {
//           dispatch({ type: FetchState.FETCH_FAILURE });
//         }
//       }
//     };
//     getTodos();
//     return () => (didCancel = true);
//   }, [stale]);

//   return [state];
// };

// export const useGetUser = () => {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case FetchState.FETCH_INIT:
//         return { ...state, isLoading: true, isError: false };
//       case FetchState.FETCH_SUCCESS:
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//           user: action.payload,
//         };
//       case FetchState.FETCH_FAILURE:
//         return { ...state, isLoading: false, isError: true };
//       default:
//         throw new Error();
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, {
//     isLoading: false,
//     isError: true,
//     data: [],
//   });

//   useEffect(() => {
//     let didCancel = false;
//     const getTodos = async () => {
//       dispatch({ type: FetchState.FETCH_INIT });
//       try {
//         const account = await api.getAccount();
//         if (!didCancel) {
//           dispatch({ type: FetchState.FETCH_SUCCESS, payload: account });
//         }
//       } catch (e) {
//         if (!didCancel) {
//           dispatch({ type: FetchState.FETCH_FAILURE });
//         }
//       }
//     };
//     getTodos();
//     return () => (didCancel = true);
//   }, []);

//   return [state, dispatch]; 
// };


