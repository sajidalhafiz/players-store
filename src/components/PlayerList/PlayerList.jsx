import './PlayerList.css';

const PlayerList = ({player}) => {
    return (
        <div className='player'>
            <h4>Name: {player.name}</h4>
            <p>Price: ${player.price}</p>
        </div>
    );
};

export default PlayerList;