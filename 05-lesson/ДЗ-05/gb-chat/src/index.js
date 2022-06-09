import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import { Header } from './componetns';
import { ChatPage, ProfilePage } from './pages';
import { store } from './store';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: "#7a6e67",
    }
  }
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/chat/*' element={<ChatPage />} />
            <Route path='/' element={<h1>HomePage</h1>} />
            <Route path='*' element={<h1>Page 404</h1>} />
            <Route />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

/* 
      <App
        app_header={<Header />}
        messages={<MessageList />}
        users={<UserList />}
      />
*/