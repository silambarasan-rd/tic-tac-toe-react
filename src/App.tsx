import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlayGround from "./components/PlayGround";

function App() {
  return (
    <div className="app-wrapper">
        <div className="container h-100">
            <div className="row h-100">
                <div className="col position-relative">
                    <Header />
                    <PlayGround />
                    <Footer />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
