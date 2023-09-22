import { restaurantList } from '../config';
import { Img_cdn_url } from '../config';


// restraunt card which is inside body
export const Restraunt_card=({restraunt})=>{
   // console.log("restruant is ",restraunt);
    const {name,cuisines,lastMileTravelString,cloudinaryImageId}=restraunt;
     return  <div className="card">
      
           <img
          src={
            Img_cdn_url +
          cloudinaryImageId
          }
          ></img>  
          <p>{name}</p>
          
          <p>{lastMileTravelString} minutes</p>
        
      </div>
  }
  