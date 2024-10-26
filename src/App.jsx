import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import MainSection from './components/MainSection/MainSection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';

const App = () => {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const incrementCoins = () => {
    setCoins(coins + 100);
  };

  const choosePlayer = (player) => {
    if (coins < player.biddingPrice) {
      toast.error("Not enough coins!");
      return;
    }

    if (selectedPlayers.length >= 6) {
      toast.error("You can't select more than 6 players!");
      return;
    }

    if (selectedPlayers.some(p => p.playerId === player.playerId)) {
      toast.error("Player already selected!");
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins - player.biddingPrice);
  };

  const removePlayer = (playerId) => {
    const updatedPlayers = selectedPlayers.filter(player => player.playerId !== playerId);
    setSelectedPlayers(updatedPlayers);
  };

  return (
    <div>
      <Navbar coins={coins} />
      <Banner incrementCoins={incrementCoins} />
      <MainSection choosePlayer={choosePlayer} selectedPlayers={selectedPlayers} removePlayer={removePlayer} />
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

export default App;
