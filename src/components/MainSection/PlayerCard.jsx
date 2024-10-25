import PropTypes from 'prop-types';
import { FaUser } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";

const PlayerCard = ({ player, choosePlayer }) => {
  return (
    <div className="border text-start rounded-lg p-4 bg-white shadow-md flex flex-col items-center">
      <img src={player.image} alt={player.name} className="w-50 h-50 object-cover rounded-lg mb-4" />

	  <div className='flex gap-2 items-center'>
	  <FaUser />
      <h3 className="text-lg font-semibold text-left">{player.name}</h3>
	  </div>

      <div className='justify-between flex gap-4'>
	  <div className='flex gap-2 items-center'>
	  	<CiFlag1 />
	  	<p>{player.country}</p>
	  </div>  
      <div>
	  	<button className='btn'>Role: {player.role}</button>
	  </div>
	  </div>
	  <h2 className='text-start'>Rating</h2>
	  <div className='flex justify-between gap-4'>
	  <h2>Left-handed-bat</h2>
	  <h2>Left-handed-bat</h2>
	  </div>
      <div className='flex justify-between items-center gap-4'>
	  <p>Price: {player.biddingPrice} coins</p>
      <button onClick={() => choosePlayer(player)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400">
        Choose Player
      </button>
	  </div>
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
