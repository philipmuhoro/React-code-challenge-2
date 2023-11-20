import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots') // Fetch bots from the backend API.
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots', error));
  }, []);
  // Check if the bot is not already in the army, only selected once
  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };
  
  // Remove the bot from the army
  const releaseFromArmy = (bot) => {
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };
 // Remove the bot from the backend API
 const dischargeBot = (botId) => {
  fetch(`http://localhost:3000/bots${botId}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then(() => {
      // Remove the bot from the army
      const updatedArmy = army.filter((b) => b.id !== botId);
      setArmy(updatedArmy);
    })
    .catch((error) => console.error('Error discharging bot', error));
};
return (
  <div>
    <BotCollection bots={bots} onAddToArmy={addToArmy} />
    <YourBotArmy army = {army} onReleaseFromArmy={releaseFromArmy} onDischarge={dischargeBot}/>
  </div>
);
};

export default App;

