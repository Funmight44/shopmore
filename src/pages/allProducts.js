import { useEffect, useState } from "react";
import Card from "../components/card";
import { useCart } from "../context";
import BASE_URL from "../config";

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [error, setError] = useState(null);
    const{addToCart} = useCart()


    useEffect(() => {
        async function getAllProducts() {
            try{
                const [mixedCat, femaleCat, menCat, kids] = await Promise.all([
                    fetch( `${BASE_URL}/femaleCate`),
                    fetch (`${BASE_URL}/menCate`),
                    fetch  ( `${BASE_URL}/mixedCategory`),
                    fetch(`${BASE_URL}/kids`)
                ]);

                if (!mixedCat.ok || !femaleCat.ok || !menCat.ok || !kids) throw new Error("Failed to Fetch Products");
                const [mixedCatData, femaleCatData, menCateData, kidsData] = await Promise.all([
                    mixedCat.json(), 
                    menCat.json(),
                    femaleCat.json(),
                    kids.json()
                ]);

                const combinedproducts = [...mixedCatData, ...femaleCatData, ...menCateData, ...kidsData];
                setAllProducts(combinedproducts)

            }catch(error){
                setError(error.message)
            }
        }
        getAllProducts();
    }, [])

    return ( 
        <section className="all-products">
            {error && <p style={{ color: "red" }}>{error}</p> }
                {allProducts.map((item) => <Card key={item.id} item={item} addToCart={addToCart} />)  }
        </section>
     );
}
 
export default AllProducts;