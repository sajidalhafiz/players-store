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
        for (const plr of selectedPlayer) {
            if (plr.id === player.id) {
                return alert("Current Player: " + player.name)
            }
        }
        
        let newSelectedPlayer = [...selectedPlayer, player];
        setSelectedPlayer(newSelectedPlayer);
    }

    // total price calculation
    let totalPrice = 0;
    for (const player of selectedPlayer) {
        totalPrice += player.price;
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
            <div className='cart-container'>
                <h2>Order Summary</h2>
                <h3>Total Players: {selectedPlayer.length}</h3>
                <Cart
                    selectedPlayer={selectedPlayer}
                ></Cart>
                <h3>Total Price: ${totalPrice}</h3>
            </div>
        </div>
    );
};

export default Store;