import React, { useContext } from "react";
import"./Products.css";
import { filterContext,cartContext } from "../../../App";

const val = (cart,setCart,id) =>{
    if(cart.indexOf(id) === -1){
        setCart([...cart,id])
    }
    else{
        const temp = [...cart]
        temp.splice(cart.indexOf(id),1)
        setCart([...temp])
    }
}


const btnVal = (cart,id) =>{
    if(cart.indexOf(id) === -1){
        return true
    }
    return false
}
const Product = ({productitems}) =>{
    const {cart,setCart} = useContext(cartContext)
    const {filter} = useContext(filterContext)
    return(
        <div className="products">
            {
                productitems.map((productitem)=>{if(filter.length == 0){
                    return(
                        <div className="card">
                        <div>
                            <img className="product-image" 
                            src={productitem.img} 
                            alt={productitem.name}/>
                        </div>
                        <div className="productname" >
                            <h3>
                                {productitem.name}
                            </h3>
                        </div>
                        <div className="productprice" >
                            <h3>
                                Price:{productitem.price}
                            </h3>
                        </div>
                        <div className="Product-addbutton">
                            <button onClick={()=>val(cart,setCart,productitem.id)}>{btnVal(cart,productitem.id)?"Add to Cart":"Remove"}</button>
                        </div>     
                    </div>  
                    )
                }else{
                    if(filter.indexOf(productitem.color) != -1 || filter.indexOf(productitem.type) != -1){
                        return(
                            <div className="card">
                            <div>
                                <img className="product-image" 
                                src={productitem.img} 
                                alt={productitem.name}/>
                            </div>
                            <div className="productname" >
                                <h3>
                                    {productitem.name}
                                </h3>
                            </div>
                            <div className="productprice" >
                                <h3>
                                    Price:{productitem.price}
                                </h3>
                            </div>
                            <div className="Product-addbutton">
                                <button onClick={()=>val(cart,setCart,productitem.id)}>{btnVal(cart,productitem.id)?"Add to Cart":"Remove"}</button>
                            </div>     
                        </div>  
                        )
                    }
                }}
                       
                )}
        </div>
    );
}
export default Product;