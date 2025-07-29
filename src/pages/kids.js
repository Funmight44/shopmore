import Card from "../components/card";
import { useCart } from "../context";
import UseFetch from "../hooks/UseFetch";
import BASE_URL from "../config";

const Kids = () => {
    const {addToCart} = useCart();
    const {data: kids, loading, error} = UseFetch(`${BASE_URL}/kids`)



    return ( 
        <section className="kids">
            <h2>Explore our kids collection</h2>
            <p className="kids-desc">Discover a wide range of stylish and comfortable clothing for kids of all ages. From playful 
                outfits to trendy accessories, we have everything your little ones need to look their best.</p>
                {loading && <p>Products Loading.....</p>}
                
            <div className="kids-cards">
                { error ? <p>{error}</p> :
                kids.map((item) => <Card key={item.id} item={item} addToCart={addToCart} category="kids"/>)}
            </div>
        </section>
     );
}
 
export default Kids;