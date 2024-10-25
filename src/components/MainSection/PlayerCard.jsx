import PropTypes from 'prop-types';

const PlayerCard = ({ player, choosePlayer }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md flex flex-col items-center">
      <img src={player.image} alt={player.name} className="w-32 h-32 object-cover rounded-full mb-4" />
      <h3 className="text-lg font-semibold">{player.name}</h3>
      <p>{player.country}</p>
      <p>Role: {player.role}</p>
      <p>Price: {player.biddingPrice} coins</p>
      <button onClick={() => choosePlayer(player)} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-400">
        Choose Player
      </button>
    </div>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.shape({
    playerId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    biddingPrice: PropTypes.number.isRequired,
  }).isRequired,
  choosePlayer: PropTypes.func.isRequired,
};

export default PlayerCard;
