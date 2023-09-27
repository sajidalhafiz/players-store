import PlayerList from '../PlayerList/PlayerList';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart-container'>
            <h2>Order Summary</h2>
            {/* selected total players */}
            <h3>Total Players: </h3>
            <PlayerList></PlayerList>
        </div>
    );
};

export default Cart;