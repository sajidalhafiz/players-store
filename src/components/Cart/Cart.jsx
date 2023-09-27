import PlayerList from '../PlayerList/PlayerList';
import './Cart.css';

const Cart = ({totalPlayers}) => {
    console.log(totalPlayers)
    return (
        <div className='cart-container'>
            <h2>Order Summary</h2>
            {/* selected total players */}
            <h3>Total Players: {totalPlayers.length}</h3>
            <PlayerList></PlayerList>
        </div>
    );
};

export default Cart;