import Navbar from "./Navbar";

const Cart = ({ currentCartTotal }) => {
  return (
    <div className="Cart">
      <Navbar currentCartTotal={currentCartTotal} />
    </div>
  );
};

export default Cart;
