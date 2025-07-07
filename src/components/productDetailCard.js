import { useCart } from "../context";

const ProductDetailCard = ({products}) => {
    const {addToCart, removeFromCart} = useCart()
    if(!products) return null
    return ( 
        <div className="product-detail-cards">
            <div className="product-detail-img">
                <img   src={products.imgpath} alt="product" />
            </div>
            <div className="product-detail-descr">
                <h1>{products.title}</h1>
                <p>{products.description}</p>
                <p>{products.price}</p>
                <p>{products.size ? products.size.join(', ') : 'No size available'}</p>

                <p>price</p>
                <p>instock</p>
                <div className="product-btn">
                    <button onClick={() => addToCart(products)}>add</button>
                    <button onClick={() => removeFromCart(products.id)}>remove</button>
                </div>
            </div>
        </div>
     );
}
 
export default ProductDetailCard;