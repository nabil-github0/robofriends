import React from "react";
import Card from "./Card";

const CardList =({robots})=>{   
    return (
        <div>
        {
        robots.map((user,i)=>{
        return <Card key={i} id={robots[i].id} email={robots[i].email} name={robots[i].name}/>
    })
        }
        </div>
    )
}

export default CardList;