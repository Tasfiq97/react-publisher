import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Persons from '../Persons/Persons';

// css part 

import "./Publication.css"


const Publication = () => {

    // state to show data 
const [publishers,setPublishers]=useState([]);

// state to update data in cart 

const [cart,setCart]=useState([]);

// for fetch data 

useEffect(()=>{
    fetch("./data.json")
    .then(res=>res.json())
    .then(data=>setPublishers(data))
},[])

// select button function 

const handleSelectBtn=(person)=>{
    // for not showing data twice in cart 

if(cart.indexOf(person)===-1){
    const newCart=[...cart,person]
    setCart(newCart)
}
else{
    return
}
 
   
  

}
    return (
        <div>
          <h1>World's Richest Person's will Share their Stories Through us</h1>
        
        <div className="publication-sec">
            
            <div className="publication-right">
                {/* full card section using map  */}

             {
                 publishers.map(publisher=><Persons
                 key={publisher.id}
                 publisher={publisher}
                 handleSelectBtn={handleSelectBtn}
                 ></Persons>)
             }
            </div>
            {/* cart section for adding data  */}
            <div className="cart-sec">
            <Cart
             cart={cart}
            ></Cart>
            </div>
        </div>
        </div>
    );
};

export default Publication;