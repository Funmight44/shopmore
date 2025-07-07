import { Link } from "react-router-dom";



const OrderSuccess = ({order}) => {
    if(!order) return <p>Order Information is missing</p>

    return ( 
         <section className="order-success">
            <div>
                <p>Thank you {order.fullName} for the order!</p>
                <p>Your Order ID: {order.id}</p>          
            </div>
            <div>
                <p>Your order is confirmed.</p>
                <p>Please check your mail ({order.email}) for the eBook.</p>
                <p>Payment ID: xyz_123456789</p>
            </div>
            <Link to="/" type="button">Continue Shopping <i className="ml-2 bi bi-cart"></i></Link>
        </section>
     );
}
 
export default OrderSuccess;