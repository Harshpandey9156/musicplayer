import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Library from "./library";
import Feed from "./feed";
import Trending from "./trending";
import Player from "./player";
import Favorites from "./favorites";


function Home() {
    return (
      <Router>
        <Routes>
            <Route path="/library" element={<Library/>}></Route>
            <Route path="/feed" element={<Feed/>}></Route>
            <Route path="/trending" element={<Trending/>}></Route>
            <Route path="/player" element={<Player/>}></Route>
            <Route path="/favorites" element={<Favorites/>}></Route>


        </Routes>
      </Router>
    );
  }
  
  export default Home;