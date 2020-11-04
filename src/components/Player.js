import React from "react";
import Body from "./Body";
import Sidebar from "./Sidebar";
import "./Player.css";
import Footer from "./Footer";


function Player({ spotify }) {
  return (
    <div className='player'>
      <div className='player__body'>
        <Sidebar />
        <Body spotify={spotify}/>
        <Footer />
      </div>
    </div>
  );
}

export default Player;
