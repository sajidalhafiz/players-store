import './Player.css';

const Player = (props) => {
    // console.log(props)
    const { photo, name, age, number, position, price } = props.player;

    return (
        <div className='player-card'>
            <img src={photo} alt="" />
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Player Number: {number}</p>
            <p>Position: {position}</p>
            <h2>Price: ${price}</h2>
            <button>Add To Cart</button>
        </div>
    );
};
export default Player;