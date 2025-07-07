
// import products from '../data/products.json'

import Card from '../components/card';
import Responsive from '../components/responsive';
import SessionHeading from '../components/sessionHeading';
import Carousel from 'react-multi-carousel';
import { useCart } from '../context';
import UseFetch from '../hooks/UseFetch';
import UseTitle from '../hooks/useTitle';


const MenCategory = () => {
       const {data:menCate, loading, error} = UseFetch('http://localhost:4000/menCate')
    
        UseTitle("Men Category")
        const {addToCart} = useCart();
        

    return ( 
        <div className="menCategory" id='menCategory'>
            {loading && <p>Products Loading.....</p>}
            {error && <p>{error}</p>}
            <SessionHeading title={"Men Category"}/>
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
                {menCate.map((item, index) => <Card key={index} item={item} addToCart={addToCart} category="menCate"/> )}
            </Carousel>
        </div>
     );
}
 
export default MenCategory;