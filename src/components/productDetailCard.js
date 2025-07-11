import { useCart } from "../context";


const ProductDetailCard = ({ products }) => {
  const { addToCart, removeFromCart } = useCart();

  if (!products) return null;

  return (
    <section className="product-detail-card">
      <div className="product-image">
        <img src={products.imgpath} alt={products.title} />
      </div>

      <div className="product-info">
        <h1>{products.title}</h1>
        <p className="product-description">{products.description}</p>

        <div className="product-meta">
          <p><strong>Price:</strong> ${products.price}</p>
          <p><strong>Sizes:</strong> {products.size ? products.size.join(", ") : "No size available"}</p>
          <p><strong>{products.inStock ? "inStock ✅" : "Out Of Stock ❌"}</strong></p>
        </div>

        <div className="action-buttons">
          <button className="add-btn" onClick={() => addToCart(products)}>🛒 Add to Cart</button>
          <button className="remove-btn" onClick={() => removeFromCart(products.id)}>🗑️ Remove</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailCard;
