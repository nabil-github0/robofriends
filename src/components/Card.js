import React from "react";
import "../containers/App.css"

const Card =({name , email, id})=>{
    return(
        <div className="tc bg-green dib br3  grow bw2 ma3  shadow-5">
        <img src={`https://robohash.org/${id}?300x300`} alt="Robtos"/>
            <div>
                <h1 className="nabil">{name}</h1>
                <p className="f4">{email}</p>
            </div>
        </div>
    )
}

export default Card;