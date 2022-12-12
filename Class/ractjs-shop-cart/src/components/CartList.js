import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);
  let user_id = 100;
  // console.log(CART);

  const orderHandle = () => {
    axios
      .post(
        "http://localhost/React_Final/Class/ractjs-shop-cart/api/order.php",
        {
          items: CART,
          user: user_id,
        }
      )
      .then((response) => {
        //console.log(response.data);
        alert(response.data);
      });
  };

  return (
    <div>
      {CART?.map((cartItem, cartindex) => {
        return (
          <div>
            <img src={cartItem.url} width={40} />
            <span> {cartItem.name} </span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });
                setCART(_CART);
              }}
            >
              -
            </button>
            <span> {cartItem.quantity} </span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              +
            </button>
            <span> Rs. {cartItem.price * cartItem.quantity} </span>
          </div>
        );
      })}

      <p>
        {" "}
        Total <span></span>
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
      </p>
      <button onClick={orderHandle}>Order Submit</button>
    </div>
  );
}

export default CartList;
