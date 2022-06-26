import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './api/firebase';
import { ThemeProvider, createTheme } from '@mui/material';
import { Header } from './componetns';
import { ChatPage, ProfilePage, GistPage, SignUpPage, LoginPage } from './pages';
import { store, persistor } from './store';
import { PrivateRoute, PublicRoute } from './componetns';
import './global.css';
/* import { createConversationAPI } from './api/conversations'; */
/* import { deleteConversationAPI } from './api/conversations'; */
/* import { getConversationsAPI } from './api/conversations'; */

const root = ReactDOM.createRoot(document.getElementById('root'));

/* const isAuth = false; */

const theme = createTheme({
  palette: {
    primary: {
      main: "#7a6e67",
    }
  }
});

const App = () => {
  const [session, setSession] = useState(null);

  const isAuth = !!session;

  // TODO: перенсти в think
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    })
  }, []);

  // Смотрим структуру таблицы conversations (firebase)
  /* useEffect(() => {
    getConversationsAPI()
  }, []); */

  /* console.log('session >>> ', session); */

  // Пробное создание комнат в firebase
  /* useEffect(() => {
    createConversationAPI('room1');
    createConversationAPI('room2');
  }, []); */

  // Проверяем работу функции API удаления комнаты
  /* useEffect(() => {
    deleteConversationAPI('room3', '3e47ed0c-e70c-44b8-3076-888e42d8600b')
  }, []); */

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header session={session} />
            <Routes>
              <Route path='/profile' element={
                <PrivateRoute isAuth={isAuth}>
                  <ProfilePage />
                </PrivateRoute>}
              />
              <Route path='/chat/*' element={
                <PrivateRoute isAuth={isAuth}>
                  <ChatPage />
                </PrivateRoute>}
              />
              <Route path='/gists' element={
                <PrivateRoute isAuth={isAuth}>
                  <GistPage />
                </PrivateRoute>}
              />
              <Route path='/sign-up' element={
                <PublicRoute isAuth={isAuth}>
                  <SignUpPage />
                </PublicRoute>}
              />
              <Route path='/login' element={
                <PublicRoute isAuth={isAuth}>
                  <LoginPage />
                </PublicRoute>}
              />
              <Route path='/' element={<h1>HomePage</h1>} />
              <Route path='*' element={<h1>Page 404</h1>} />
              <Route />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/profile' element={
                <PrivateRoute isAuth={isAuth}>
                  <ProfilePage />
                </PrivateRoute>}
              />
              <Route path='/chat/*' element={
                <PrivateRoute isAuth={isAuth}>
                  <ChatPage />
                </PrivateRoute>}
              />
              <Route path='/gists' element={
                <PrivateRoute isAuth={isAuth}>
                  <GistPage />
                </PrivateRoute>}
              />
              <Route path='/sign-up' element={
                <PublicRoute isAuth={isAuth}>
                  <SignUpPage />
                </PublicRoute>}
              />
              <Route path='/' element={<h1>HomePage</h1>} />
              <Route path='*' element={<h1>Page 404</h1>} />
              <Route />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider> */}
    <App />
  </React.StrictMode>
);
