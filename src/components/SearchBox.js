import React from "react";
import "../containers/App.css"

const SearchBox = ({searceField, searchChange})=>{
    return(
        <div className="pa2">
        <input onChange={searchChange} className="ba b--green bg-lightest-blue" type="searce" placeholder="Searce Robots"/>
        </div>
        
    )
}

export default SearchBox;