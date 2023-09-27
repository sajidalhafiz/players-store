import { useState, useEffect } from 'react';
import Player from '../Player/Player';
import './Store.css';
import Cart from '../Cart/Cart';

const Store = () => {

    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);

    const handleAddToCart = (player) => {
        // console.log("added to cart", player)
        let newSelectedPlayer = [...selectedPlayer, player];
        setSelectedPlayer(newSelectedPlayer);
        // console.log(selectedPlayer)
    }
    
    return (
        <div className='store-container'>
            <div className="player-container">
                {
                    players.map(player => <Player
                        key={player.id}
                        player={player}
                        handleAddToCart={handleAddToCart}
                    ></Player>)
                }
            </div>
            <div>
                <Cart
                    totalPlayers={selectedPlayer}
                ></Cart>
            </div>
        </div>
    );
};

export default Store;