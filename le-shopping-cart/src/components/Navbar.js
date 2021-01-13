import "../style/Navbar.css";

// TODO add icons and links
const Navbar = ({ currentCartTotal }) => {
  const cartString = `Cart ${currentCartTotal.toFixed(2)}`;
  return (
    <div className="Navbar">
      <div className="Home NavbarComponent">
        <a href="/">Home</a>
      </div>
      <div className="ECommerceContent Navbar">
        <div className="Store NavbarComponent">
          <a href="/store">Store</a>
        </div>
        <div className="Cart NavbarComponent">
          <a href="/cart">{cartString}</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
