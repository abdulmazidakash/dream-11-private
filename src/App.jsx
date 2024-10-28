
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import MainSection from './components/MainSection/MainSection';
import Footer from './components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [coins, setCoins] = useState(0); // Start with initial coins
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const incrementCoins = () => {
    setCoins(coins + 6000);
  };

  const choosePlayer = (player) => {
    // Check if the player limit has been reached
    if (selectedPlayers.length >= 6) {
      toast.error("You can't select more than 6 players!");
      return;
    }

    // Check if the user has enough coins
    if (coins < player.biddingPrice) {
      toast.error("Not enough coins!");
      return;
    }

    // Check if the player is already selected
    if (selectedPlayers.some(p => p.playerId === player.playerId)) {
      toast.error("Player already selected!");
      return;
    }

    // Add player and deduct coins
    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins - player.biddingPrice);

    // Show success message
    toast.success(`${player.name} has been added to your team!`);
  };

  const removePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.playerId !== player.playerId));
    setCoins(coins + player.biddingPrice); // Restore the coins
    toast.info(`${player.name} has been removed from your team.`);
  };

  return (
    <div>
      <Navbar coins={coins} />
      <Banner incrementCoins={incrementCoins} />
      <MainSection 
        choosePlayer={choosePlayer} 
        selectedPlayers={selectedPlayers} 
        removePlayer={removePlayer} 
      />
      <ToastContainer 
        position="top-center" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
};

export default App;
