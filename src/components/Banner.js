import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search";
import  Button  from '@mui/material/Button';

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
             onClick={() => setShowSearch(!showSearch)} 
             className="banner_searchButton"
             variant="outlined"
        >
            {showSearch ? "Hide" : "Search Dates"}
        </Button>
        <div className="banner_info">
            <h1>Get out and stretch your imagination</h1>
            <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
            <Button variant="outlined">Explore Nearby</Button>
        </div>        
      </div>
    </div>
  );
};

export default Banner;