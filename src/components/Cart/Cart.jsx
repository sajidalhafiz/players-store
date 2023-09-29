import PlayerList from '../PlayerList/PlayerList';
import './Cart.css';

const Cart = ({ selectedPlayer }) => {
    console.log(selectedPlayer)
    return (
        <div className='player-list-container'>
            {
                selectedPlayer.map(player => <PlayerList
                    key={player.id}
                    player={player}
                ></PlayerList>)
            }
        </div>
    );
};

export default Cart;