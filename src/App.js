import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from "./Components/FiltredProducts/FilteredProducts";
import SingleProduct from "./Components/FiltredProducts/SingleProduct";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {authUser ? <Route
            path="/"
            element={<Main />}
          ></Route> : <Route
            path="/"
            element={<Login />}
          ></Route>}

          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          ></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
