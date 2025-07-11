import Card from "../components/card";
import { useCart } from "../context";
import UseFetch from "../hooks/UseFetch";

const Kids = () => {
    const {addToCart} = useCart();
    const {data: kids, loading, error} = UseFetch("http://localhost:4000/kids")



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