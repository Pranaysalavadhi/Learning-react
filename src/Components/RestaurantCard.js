// const RestaurantCard = (props) => {
//   console.log(props);
//    return(
//     <div className="res-card" style={{backgroundColor:"#f0f0f0" }}>
//       <img className="res-logo"
//       alt="res-logo" 
//       src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/6/28/835ff53f-f5bd-4ba4-969d-92237ddad7a7_6fff33f7-cea8-4d18-91ba-d63236059c6a.JPG"></img>
//       <h3>{props.resName}</h3>
//       <h4>{props.cousine}</h4>
//       <h4>{props.rating}</h4>
//       <h4>{props.time}</h4>
//     </div>
//    )
// }

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla,
  } = resData;

  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/" +
          cloudinaryImageId
        }
        alt={name}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;