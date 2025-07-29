import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailCard from "../components/productDetailCard";
import BASE_URL from "../config";

const ProductDetail = () => {
    const {id, category} = useParams()
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  
  useEffect(() => {
        async function getAllProductsDetails() {
            try{
                const response = await fetch(`${BASE_URL}/${category}/${id}`)
                if(!response) throw new Error("product not found")
                const data = await response.json();
                setProducts({...data, category})
                setLoading(false)

            }catch(error){
                setError(error.message)
                setLoading(false)
            }
        }

        getAllProductsDetails();
  }, [id, category])

    return ( 
        <section className="product-details">
            {loading && <p>Loading product.....</p>}

            {error ? (<p>{error}</p>)
           : (<div className="product-detailCards">
                <ProductDetailCard products={products}/>
            </div>)}
        </section>
     );
}
 
export default ProductDetail;