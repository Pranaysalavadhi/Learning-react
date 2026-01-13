import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://png.pngtree.com/png-vector/20221218/ourmid/pngtree-simple-and-modern-food-logo-vector-design-png-image_6527848.png" alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
   return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0" }}>
      <img className="res-logo"
      alt="res-logo" 
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/6/28/835ff53f-f5bd-4ba4-969d-92237ddad7a7_6fff33f7-cea8-4d18-91ba-d63236059c6a.JPG"></img>
      <h3>{props.resName}</h3>
      <h4>{props.cousine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.time}</h4>
    </div>
   )
}
const Body = () => {
  return(
     <div className="body">
     <div className="search">Search</div>
     <div className="res-container">
       <RestaurantCard
        resName="Meghana foods"
        cousine="mushroom curry, south india, Asian"
        rating="4.4 rating"
        time="30 minutes"
       />
       <RestaurantCard
       resName="KFC"
       cousine="Burger, lolly pops"
       rating="4.5 rating"
       time="35 minutes"/>
       
     </div>
     </div>
  )
 
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
