import PropTypes from 'prop-types';

const SelectedPlayerCard = ({ player, removePlayer }) => {
  return (
    <div className="border rounded-lg p-4 flex items-center justify-between bg-gray-100 shadow-md">
      <img src={player.image} alt={player.name} className="w-16 h-16 object-cover rounded-full mr-4" />
      <div>
        <h3 className="text-lg font-semibold">{player.name}</h3>
        <p>{player.role}</p>
      </div>
      <button onClick={() => removePlayer(player.playerId)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
        Remove
      </button>
    </div>
  );
};

SelectedPlayerCard.propTypes = {
  player: PropTypes.shape({
    playerId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  removePlayer: PropTypes.func.isRequired,
};

export default SelectedPlayerCard;
