import React, { useEffect } from "react";
import "./Filter.css";
import { filterContext } from "../../../App";
import { useContext } from "react";

const val = (filter,setFilter,name) =>{
    if(filter.indexOf(name) === -1){
        setFilter([...filter,name])
    }
    else{
        const temp = [...filter]
        temp.splice(filter.indexOf(name),1)
        setFilter([...temp])
        document.getElementById(name).style.backgroundColor = "#000"
    }
}


const Filter =() =>{
    const {filter,setFilter} = useContext(filterContext)

    useEffect(()=>{
        filter.map(item=>
                document.getElementById(item).style.backgroundColor = "grey"
                )
    },[filter,setFilter])
    console.log(filter)
    return(
    <div className="filter">
        <div className="filterbytype">
        <h3>Filter By Type</h3>
        <br/>
        <button id="Sneaker" onClick={()=>val(filter,setFilter,"Sneaker")}>Sneaker</button>
        <br/><br/>
        <button id="Shoes" onClick={()=>val(filter,setFilter,"Shoes")}>Shoes</button>
        </div>
        <div className="filterbycolour">
        <h3>Filter By Colour</h3>
        <br/>
        <button id="Black" onClick={()=>val(filter,setFilter,"Black")}>Black</button>
        <br/><br/>
        <button id="White" onClick={()=>val(filter,setFilter,"White")}>White</button>
        <br/><br/>
        <button id="Green" onClick={()=>val(filter,setFilter,"Green")}>Green</button>
        </div>
    </div>
    );
}
export default Filter;