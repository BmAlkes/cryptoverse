import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar";
import "./App.css";
import Homepage from "./pages/homepage";
import Exchanges from "./pages/exchanges";
import Cryptocurrencies from "./pages/cryptocurrencies";
import CryptoDetails from "./pages/cryptodetails";
import News from "./pages/news";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
