import { useState, useEffect } from 'react';
import Player from '../Player/Player';
import './Store.css';
import Cart from '../Cart/Cart';

const Store = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);

    return (
        <div className='store-container'>
            <div className="player-container">
                {
                    players.map(player => <Player
                        key={player.id}
                        player={player}
                    ></Player>)
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Store;