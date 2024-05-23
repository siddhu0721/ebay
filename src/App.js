import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
import React from "react";
import Home from "./Home";
import ProductPreview from "./ProductPreview";
import Chat from "./Chat";
import Map from "./Map";
import { UserProvider } from "./UserContext";


function App() {
  return (
    <Router>
      <UserProvider>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/ebay" element={<Home />} />
            <Route path="/userprofile" element={<UserProfile/>}/>
            <Route path="/product/:id" element={<ProductPreview/>}/>
            <Route path="/product/:id/chat" element={<Chat/>}/>
            <Route path="/product/:id/location" element={<Map/>}></Route>
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
