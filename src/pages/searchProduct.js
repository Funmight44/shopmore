import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/card";
import { useCart } from "../context";

const SearchProduct = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const {addToCart} = useCart();

  console.log("Query from searchParams:", query);

  useEffect(() => {
    async function fetchAndFilter() {
      if (!query.trim()) {
        setFilteredProducts([]);
        return;
      }

      console.log("Starting fetch for:", query);
      setLoading(true);

      try {
        const [female, men, mixed, kids] = await Promise.all([
          fetch("http://localhost:4000/femaleCate").then((res) => res.json()),
          fetch("http://localhost:4000/menCate").then((res) => res.json()),
          fetch("http://localhost:4000/mixedCategory").then((res) => res.json()),
          fetch("http://localhost:4000/kids").then((res) => res.json()),
        ]);

        const allProducts = [...female, ...men, ...mixed, ...kids];
        console.log("Fetched products:", allProducts.length);

        const filtered = allProducts.filter((item) =>
          item.title?.toLowerCase().includes(query.toLowerCase())
        );

        console.log("Filtered products:", filtered);
        setFilteredProducts(filtered);
      } catch (err) {
        console.error("❌ Fetch failed:", err);
        setFilteredProducts([]);
      }

      setLoading(false);
    }

    fetchAndFilter();
  }, [query]);

  return (
    <section className="search-product">
      <h4>Search results for: <strong>{query}</strong></h4>
      {loading ? (
            <p>Loading products...</p>
        ) : query.length === 0 ? (
            <p>Enter Search Term</p>
        ) : filteredProducts.length === 0 ? (
            <p>No product found</p>
        ) : (
            <div className="product-grid">
            {filteredProducts.map((item) => (
                <Card key={item.id} item={item} addToCart={addToCart} />
            ))}
            </div>
      )}
    </section>
  );
};

export default SearchProduct;
