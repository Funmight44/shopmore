import Carousel from "react-multi-carousel";

import Card from "../components/card";
import Responsive from "../components/responsive";
import SessionHeading from "../components/sessionHeading";
import { useCart } from "../context";
import UseFetch from "../hooks/UseFetch";
import UseTitle from "../hooks/useTitle";
// import products from "../data/products.json"


const FemaleCategory= () => {
    // const{femaleCate} = products
    UseTitle("Female Category")
    const {data:femaleCate, loading, error} = UseFetch(' http://localhost:4000/femaleCate')
    

    const {addToCart} = useCart();



    return ( 
        <div className="FemaleCat" id="femaleCategory">
            {loading && <p>Products Loading....</p>}
            {error && <p>{error}</p>}
            <SessionHeading title={"Female Category"}/>
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
                {femaleCate.map((item, index) => <Card key={index} item={item} addToCart={addToCart} category="femaleCate"/> )}
            </Carousel>
        </div>
     );
}
 
export default FemaleCategory;