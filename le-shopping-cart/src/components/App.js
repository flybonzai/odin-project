import {useState} from "react";
import "../style/App.css";
import {Route, Switch} from "react-router-dom";
import Homepage from "./Homepage";
import Store from "./Store";
import Cart from "./Cart";

const App = () => {
    const [currentCartTotal, setCurrentCartTotal] = useState(0.0);

    const handleCartUpdate = (newTotal) => {
        setCurrentCartTotal(newTotal);
    };

    return (
        <div className={App}>
            yooooo
            <Switch>
                <Route exact path="/">
                    <Homepage currentCartTotal={currentCartTotal}/>;
                <Route/>
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
                            <Cart currentCartTotal={currentCartTotal}/>;
                        }}
                    />
            </Switch>
        </div>
);
};

export default App;
