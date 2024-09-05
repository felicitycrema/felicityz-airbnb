import React from 'react';
import { Button } from '@mui/material';
import './SearchPage.css';
import SearchResult from './SearchResult';

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays - 26 August to 30 August . 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <div className="searchPage_results">
        <SearchResult 
        img="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAdade2bb6fc23563ba31562e4794793182b7cf2c0e8bcdb6da17bd1a988459792221c95b50732b9364611436842d36ad06c6a?w=2400&fit=crop&auto=enhance,format,compress&q=80"
        location="Stunning villa in the heart of London"
        title="Stay at the spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . WIFI . kitchen . Free parking"
        star={4.73}
        price="$49 / night"
        total="$117 total"
        />
         <SearchResult 
        img="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA166079cbf7aa985f2e62074d310267c73b6da5a84a27a2ce247b9ac16f3fb056d7d559a314c61f59d49155105ad74c0d79f6?fit=crop&auto=enhance,format,compress&q=80&w=1600&ar=1:1"
        location="Bosveld In Die Stad 2 Guesthouse"
        title="Guest House in Randhart, Alberton"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . WIFI . kitchen . Free parking"
        star={4.8}
        price="$20 / night"
        total="$117 total"
        />
         <SearchResult 
        img="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJGZlYzMwNTdjLTBlMDEtNDVhZC05M2JjLWFkMmU2OGZjMWNkNg?fit=crop&auto=enhance,format,compress&q=80&w=1600&ar=1:1"
        location="Greenfields Guest House"
        title="Greenfields Guest House is a guest house establishment that is situated in Alberton. The guest house is ideal for guests looking for comfortable lodging, for either a leisure or corporate breakaway."
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . WIFI . kitchen . Free parking"
        star={5}
        price="$64 / night"
        total="$117 total"
        />
         <SearchResult 
        img="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA813e2583ef4c83ea4bd854f54eac9bd9c05539da2e1b89a34b238c29a7052b91fff05fd55be407e95e9de745f283fb064cda?fit=crop&auto=enhance,format,compress&q=80&w=1600&ar=1:1"
        location="Bosveld In Die Stad Guest House in Randhart, Alberton"
        title="Bosveld In Die Stad is a charming guest house located in Alberton, a small town situated in Gauteng. The town offers easy access to major highways and is within easy reach of Johannesburg and other major cities."
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . WIFI . kitchen . Free parking"
        star={4.73}
        price="$47 / night, for 2 ppl"
        total="R117 total"
        />
      </div>
    </div>
  );
};

export default SearchPage;