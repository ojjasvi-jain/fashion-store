import { useContext } from "react";
import { Cart } from "../../store/Context";
import "./ProductCard.css";

function ProductCard({ product }) {
  let { dispatch } = useContext(Cart);

  function handleAddToCart(product) {
    dispatch({ type: "ADDTOCARD", payload: product });
  }

  return (
    <div className="product-card_wrapper">
      <div className="product-card_img">
        <img src={product?.image} />
      </div>

      <div className="product-card_description">
        <h3>{product.title}</h3>
        <p>{product?.description}</p>
        <span className="product-card_bottom">
          <button
            className="add-cart_btn"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
          <b className="product-card_price">${product?.price}</b>
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
