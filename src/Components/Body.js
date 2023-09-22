
// importing restraunt list
;
import { restaurantList } from '../config';

// importing restranunt card
import { Restraunt_card } from './Restraunt_card';

  

import { useState,useEffect } from "react";

import UI from "./ShimmerUI";

const filterData = (searchText, restaurants) => {
  console.log("search Text is ",searchText);
  return restaurants.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
}



// BODY PART
const Body=()=>{

 

    // we need to filter restraunt so we need to update UI thats why creating this below state variable
    const [restraunts,setrestraunts]=useState(restaurantList);
    const [allrestraunts,setallrestraunt]=useState([]);
    const [searchText,setsearchText]=useState(); // setsearchText is a function that is used to modify
   
    /*

    by default this called everytime when UI updated 
    but don't want this we want only when specific event occur
    useEffect(()=>{
      console.log("use Effect called");
    }); 
    
    THIS BELOW CODE MEIN CALLBACK FUNCTION ONCE HI CALL HOGA 
    KUNKI VOH KISI PE DEPEND NHI KR RAHA TOH VOH EK HI BAAR CALL HOGA INTIALY
    SECOND TIME AGAR SEARCHTEXT CHANGE BHI HUA TOH NHI CALL HOGA BECUASE IT IS NOT DEPENDENT ON ANYTHINNG
    useEffect(()=>{
      console.log("use Effect called");
    },[]); 


    */


    // IN THIS BELOW CODE CALLBACK FUNCTION WILL BE CALLED WHEN SEARCHTEXT CHANGED
    // MEANS IT IS DEPENDENT ON SEARCHTEXT

    /*
    useEffect(()=>{
      console.log("use Effect called");
    },[searchText]);  // this callback will be called after render and after every re-render
    
    console.log("render is called"); // it will be called before render and before every re-render
*/

    useEffect(()=>{
      getRestraunt();
    },[]);


    async function getRestraunt(){
      const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const json=await data.json();
      console.log("JSON IS ",json);
      setrestraunts(json?.data?.cards[2]?.data?.data?.cards);
      setallrestraunt(json?.data?.cards[2]?.data?.data?.cards);
    }
    
    console.log("UI IS ",UI);
    
    if(restraunts?.length==0){
      return <h1>No restraunt is aviable with this name</h1>
    }

    return (allrestraunts.length==0)?<UI></UI> :(
      
        <>    
        

        

        <div className='search-container'>

        <input type='text' className='search-input' placeholder='Search' value={searchText} 
       onChange = {(e) => setsearchText(e.target.value)}
      
        ></input> 
        <h1>searchText</h1>
        <button className='search-btn'  onClick={
            // need to filter the data
            
            ()=>{
                    // filter restraunt list according to input text
                    const data=filterData(searchText,allrestraunts);
                    console.log("data is ",data);
                    setrestraunts(data);
            }}
        > Search</button>   
        </div>    
       <div className="rest_card_body">

      {  restraunts.map((res)=>{
        //console.log("res is ",res);
          return <Restraunt_card restraunt={res.data} key={res.data.id}></Restraunt_card>
        })}
       
       
       </div>
       </>
    )
}

export default Body;