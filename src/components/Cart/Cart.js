// fontawesom section 

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// css part 
import "./Cart.css"

const Cart = (props) => {
    // object destructuring 

    const {cart}=props;
    
    // reduce method to get the total 

const total=cart.reduce((prevVal,currVal)=> prevVal+ currVal.salary,0)


    return (
        // all result itmes in cart 

        <div className="cart-item">
            <h2> <FontAwesomeIcon icon={faUser}/>  selcted : <span>  {cart.length} </span></h2>
            <h2>Total Cost :<span> $ {total} </span></h2>

            {/* map method to show data from handle button  */}

           {
               cart.map(person=>{
                  return(
                      <div key={person.id} className="slected-persons">
                          <img src={person.img} alt="" />
                          <h3><span>{person.name}</span></h3>
                      </div>
                  )
               })
           }

        </div>
    );
};

export default Cart;