import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    <ToastContainer/>
    </>
  );
}

export default App;
