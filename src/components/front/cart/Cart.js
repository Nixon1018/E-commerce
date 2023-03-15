import { cartContext } from "../../../App"
import { useContext } from "react"
import { Link } from "react-router-dom"
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

const Cart = (props) =>{
    const {cart,setCart} = useContext(cartContext)
    return(
        <div className="products"><Link to="/"><div className="Product-addbutton"><button>Back</button></div></Link>
        {
            
            props.productitems.map((productitem)=>

            {if(cart.indexOf(productitem.id)!=-1){
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
                        <button onClick={()=>val(cart,setCart,productitem.id)}>Remove</button>
                    </div>     
                    </div> 
                )
            }}
                    
            )}
        </div>)
}

export default Cart