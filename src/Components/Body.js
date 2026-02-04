import RestaurantCard from "./RestaurantCard";
import { RestaurantListMock } from "../Mocks/Mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  // optional chaining
  const restaurants =
    RestaurantListMock?.data?.data?.cards[1]?.card?.card
      ?.gridElements?.infoWithStyle?.restaurants;

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() =>{
    setListOfRestaurants(restaurants);
  },[]);

//  const fetchdata = async () => {
//   try {
//     const data = await fetch(
//       "https://namastedev.com/api/v1/listRestaurants"
//     );

//     const json = await data.json();
//     console.log(json);
//   } catch (error) {
//     console.error("Failed to fetch data", error);
//   }
// };

if(restaurants.length === 0)
  return <Shimmer/>

  return(
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn"
        onClick={() => {
             const filteredList = restaurants.filter(
              (res) => res.info.avgRating > 4.5);
             setListOfRestaurants(filteredList);
        }}
        >Top rated restaruants
        </button>
      </div>

   <div className="search">Search</div>
    <div className="res-container">
      {listOfRestaurants.map((res) => (
        <RestaurantCard
          key={res.info.id}
          resData={res.info}
        />
      ))}
    </div>
    </div>
  );
};

export default Body;