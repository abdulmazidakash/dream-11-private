import PropTypes from 'prop-types';
import PlayerCard from './PlayerCard';
import SelectedPlayerCard from './SelectedPlayerCard';
import players from '../../data/players.json';

const MainSection = ({ choosePlayer, selectedPlayers, removePlayer }) => {
  return (
    <div className="w-11/12 mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Available Players</h2>
      <div className="grid grid-cols-3 gap-4">
        {players.map(player => (
          <PlayerCard key={player.playerId} player={player} choosePlayer={choosePlayer} />
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-8 mb-4">Selected Players</h2>
      <div className="grid grid-cols-1 gap-4">
        {selectedPlayers.map(player => (
          <SelectedPlayerCard key={player.playerId} player={player} removePlayer={removePlayer} />
        ))}
      </div>
    </div>
  );
};

MainSection.propTypes = {
  choosePlayer: PropTypes.func.isRequired,
  selectedPlayers: PropTypes.arrayOf(
    PropTypes.shape({
      playerId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string,
      image: PropTypes.string,
      role: PropTypes.string.isRequired,
      biddingPrice: PropTypes.number
    })
  ).isRequired,
  removePlayer: PropTypes.func.isRequired,
};

export default MainSection;
