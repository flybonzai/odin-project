import Navbar from './Navbar';

const Store = ({currentCartTotal, handleCartUpdate}) => {
    return (
        <div className="Store">
            <Navbar currentCartTotal={currentCartTotal} />
        </div>
    );
}

export default Store;