import Navbar from "./Navbar";
import Products from "./Products";

const Store = ({ currentCartTotal, handleCartUpdate }) => {

  const handleClick = (evt) => {
    
  }

  return (
    <div className="Store">
      <Navbar currentCartTotal={currentCartTotal} />
      <ul>
        {Products.products.map((product) => {
          return (
            <li>
              {product.name}: ${product.price.toFixed(2)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Store;
