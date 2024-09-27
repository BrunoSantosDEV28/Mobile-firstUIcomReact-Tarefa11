import React from "react";
import Header from "./components/Header";
import GlobalMenu from "./components/GlobalMenu";
import ContextMenu from "./components/ContextMenu";
import MainContent from "./components/MainContent";
import AdArea from "./components/AdArea";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="layout">
        <GlobalMenu />
        <div className="content">
          <ContextMenu />
          <MainContent />
          <AdArea />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
