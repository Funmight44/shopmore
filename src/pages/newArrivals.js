import Card from "../components/card";
import SessionHeading from "../components/sessionHeading";

// import products from '../data/products.json'
import Carousel from "react-multi-carousel";
import Responsive from "../components/responsive";
import { useCart } from "../context";
import UseFetch from "../hooks/UseFetch";



const NewArrivals = () => {
   const {data:mixedCategory, error, loading} = UseFetch(' http://localhost:4000/mixedCategory')



   const {addToCart} = useCart();

    return ( 
        <div className="new-arrivals">
           {loading && <p>Loading Products.....</p>}
           {error && <p>{error}</p>}
           <SessionHeading title={'New Arrivals'}/>
           
           <Carousel 
           responsive={Responsive}
           autoPlay={false}
           swipeable={true}
           draggable={false}
           showDots={false}
           infinite={false}
           partialVisbile={false}
           itemClass={"carousal-items"}
           >
               
               {mixedCategory.map((item) =>  <Card key={item.id} item={item} addToCart={addToCart} category="mixedCategory"/> )}
           </Carousel>
         
        </div>
     );
}
 
export default NewArrivals;