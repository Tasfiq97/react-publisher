import React from 'react';
// font awesome icons 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

// css part 
import "./Persons.css"
const Persons = (props) => {

// object destructuring 

    const{name,img,country,net_worth,salary,Founder,facebook,twitter}=props.publisher;

    return (
        // showing all data from fetch in this component 

        <div className="publisher-card">
            <img src={img} alt="" />
            <h2> {name}  </h2>
             <p><span>Founder : </span>   {Founder}</p>
            <p><span>Net Worth : </span>  {net_worth}</p>
            <p><span>Country :  </span>   {country}</p>
            <p><span>Cost  : </span>    $ {salary}</p>

             {/* icons and buttons  */}

            <a href={twitter} className="btn-select" target="blank" >
                <FontAwesomeIcon style={{padding:"8px,16px",marginTop:"30px"}} icon={faTwitter}/>
                 </a>
                 <a href={facebook} className="btn-select" target="blank">
                <FontAwesomeIcon style={{padding:"8px,15px"}} icon={faFacebook}/>
                 </a>
             
                <button className="btn-select" onClick={()=>props.handleSelectBtn(props.publisher)}>
                <FontAwesomeIcon icon={faCartPlus}/> Select</button>
        </div>
    );
};

export default Persons;