import { useState } from "react";
import { restaurentData } from "../constant";
import RestaurentCard from "./RestaurentCard";


const FilterData =(searcInputText, restaurentData )=>{
    return restaurentData.filter((item)=>item.data.name.toLowerCase().includes(searcInputText));
}


const Body =()=>{
    const [booleanText, setBooleanText]= useState('False');
    const [searchInputText, setSearchInputText] = useState('');
    const [restaurantList, setRestaurentList] = useState(restaurentData);

    return(
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value ={searchInputText} onChange ={(e)=>{
                setSearchInputText(e.target.value);
                console.log(e.target.value);
                if(e.target.value ===''){
                    setRestaurentList(restaurentData)
                }
            }} />
                <button className="search-btn" onClick={()=>{
                    const data = FilterData(searchInputText, restaurantList);
                    setRestaurentList(data);
                }}>Search</button>
           
        </div>
        <section className="card-List">
            {
                restaurantList.map((restaurant)=>{
                    return <RestaurentCard {...restaurant.data} key ={restaurant.data.id} />
                })
            }
        </section>
        </>
    )

}

export default Body;