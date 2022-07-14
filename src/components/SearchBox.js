import React from "react";

const SearchBox = ({searceField, searchChange})=>{
    return(
        <div className="pa2">
        <input onChange={searchChange} className="pa3 ba b--green bg-lightest-blue" type="searce" placeholder="Searce Robots"/>
        </div>
        
    )
}

export default SearchBox;