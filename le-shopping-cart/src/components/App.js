import { useState } from "react";
import "../style/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Store from "./Store";
import Cart from "./Cart";

const App = () => {
  const [currentCartTotal, setCurrentCartTotal] = useState(0.0);

  const handleCartUpdate = (newTotal) => {
    setCurrentCartTotal(newTotal);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            <Homepage currentCartTotal={currentCartTotal} />;
          }}
        />
        <Route
          exact
          path="/store"
          render={() => {
            <Store
              currentCartTotal={currentCartTotal}
              handleCartUpdate={handleCartUpdate}
            />;
          }}
        />
        <Route
          exact
          path="/cart"
          render={() => {
            <Cart currentCartTotal={currentCartTotal} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
