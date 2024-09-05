import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Banner from "./Banner";
import "./Home.css";
import Card from "./Card";
import { listListing } from "../actions/listingAction";
const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector(state => state.listingList)
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);


  return (
    <div className="home">
      <Banner />
      <div className="home-section-text">
        <h2>Vacation rentals for every style</h2>
        <p>Get the amount of space that is right for you</p>
      </div>
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-1165647150107589830/original/7d77ddf4-65f8-463b-a1ee-fdbef71e68d8.jpeg?im_w=1200"
          title="Tiny Home"
          description="Entire rental unit in Randburg"
          price="R3,950 / month"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/50f071fe-c2b7-48d9-a339-d8d2fff6f580.jpg?im_w=1200"
          title="Guest suite in Alberton"
          description="Tranquil guest suite in Brackendowns"
          price="R 670 / night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/adeff934-8361-435f-8115-5448d77b5180.jpg??im_w=1200"
          title="Entire apartment close to airport"
          description="Entire guesthouse in Bedfordview"
          price="R 870  / night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-583164298497838370/original/8aed5e7d-21fe-4a05-b528-30b4dda0aa4a.jpeg?im_w=1200"
          title="D&DLuxury Rivonia Apartments with inverter"
          description="Entire rental unit in Sandton, South Africa"
          price="R1,213 / night"
        />
         <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-1134126846407406490/original/c5373df7-b8bb-4775-94f3-f5df9be43f68.jpeg?im_w=1200"
          title="D&DLuxury Rivonia Apartments with inverter"
          description="Entire rental unit in Sandton, South Africa"
          price="R1,213 / night"
        />
      </div>

      <div className="home-section-text">
        <h2>Top-rated vacation rentals in Johannesburg</h2>
        <p>Guests agree: these vacation rentals are highly rated for location, cleanliness, and more.</p>
      </div>

      <div className="home_section">
      <Card
          src="https://stylecaster.com/wp-content/uploads/2019/09/blue-jay-modern-airbnb.jpeg?w=1200&h=800&crop=1.jpg?im_w=1200"
          title="One Siam/Platinum"
          description="Entire rental unit in Alberton"
          price="R100 / night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/6e5cdf7e-1a0c-4daf-8133-99c2f7408767.jpg?im_w=1200"
          title="Golf Studio in Safe Estate,Fibre,Generator"
          description="Entire cottage in Johannesburg, South Africa"
          price="R645 / night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-567964025724875051/original/dd679db7-100a-486c-ba28-29d9e628fdb0.jpeg?im_w=1200"
          title="ENTIRE 1 Bedroom apartment with pool"
          description="Entire rental unit in Johannesburg, South Africa"
          price="R697 / night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/6589de4f-28fb-4cb5-a500-ce4d7c7dda81.jpg?im_w=1200"
          title="Highlife, 15MinToAirport,LoadShed FreeWiFi, Shopping"
          description="Entire condo in Germiston, South Africa"
          price="R897 / night"
        />
          <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY2MTYzNDg4MjE2ODY1Nw%3D%3D/original/a332d020-4315-4f63-af71-444d46474939.png?im_w=1200"
          title="Highlife, 15MinToAirport,LoadShed FreeWiFi, Shopping"
          description="Entire condo in Germiston, South Africa"
          price="R897 / night"
        />
      </div>
    </div>
  );
};
export default Home;
