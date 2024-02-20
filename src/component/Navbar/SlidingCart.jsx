import { useContext } from "react";
import { ShoppingCart, X } from "phosphor-react";
import { Link } from "react-router-dom";
import { Cart } from "../../store/Context";
import "./SlidingCart.css";

function SlidingCart({ toggleShowCart }) {
  let { state } = useContext(Cart);

  return (
    <div className={`sliding-cart_container`}>
      <CartTop toggleShowCart={toggleShowCart} />
      <CartMain cart={state} />
      <CartCheckOut cart={state} toggleShowCart={toggleShowCart} />
    </div>
  );
}

function CartTop({ toggleShowCart }) {
  return (
    <div className="cart-top">
      <ShoppingCart size={22} />
      <h2>Your Shopping Carts</h2>
      <div className="close-shopping-cart" onClick={toggleShowCart}>
        <X size="22px" />
      </div>
    </div>
  );
}

function CartMain({ cart }) {
  const products = cart.map((product) => {
    return <CartProducts product={product} key={product.id} />;
  });

  return (
    <div className="cart-main_container">
      {products.length < 1 ? (
        <div style={{ textAlign: "center", fontSize: "1.6rem" }}>
          Your cart is empty :({" "}
        </div>
      ) : (
        products
      )}
    </div>
  );
}

function CartProducts({ product }) {
  let { dispatch } = useContext(Cart);
  function inputHandler(e) {
    dispatch({
      type: "ADDPRODTQUANTITY",
      payload: {
        qty: e.target.value,
        id: product.id,
      },
    });
  }

  function removeProduct() {
    dispatch({ type: "REMOVEFROMCARD", payload: { id: product.id } });
  }

  return (
    <div className="cart-product">
      <img src={product.image} />
      <div className="cart-product_info">
        <h3>{product.title}</h3>
        <p>Category: {product.category}</p>
        <p className="qty">
          Qty:
          <input
            type="number"
            value={product.qty}
            onChange={inputHandler}
            id="qty"
          />
        </p>
      </div>
      <p className="cart-product_price">
        ${(product.price * product.qty).toFixed(2)}
      </p>
      <span className="cart-product_x" onClick={removeProduct}>
        <X size="16px" />
      </span>
    </div>
  );
}

function CartCheckOut({ cart, toggleShowCart }) {
  const totalPrice = cart.reduce((accumulator, current) => {
    return accumulator + current.price * current.qty;
  }, 0);

  return (
    <div className="cart-checkout_container">
      <h3>Checkout</h3>
      <p>${totalPrice.toFixed(2)}</p>
      <Link to="checkout" onClick={toggleShowCart}>
        Go to Checkout
      </Link>
    </div>
  );
}

export default SlidingCart;
