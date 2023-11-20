import React from 'react';
import './YourBotArmy.css';

const YourBotArmy = ({ army, onReleaseFromArmy, onDischarge }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <ol>
        {army.map((bot) => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} width="100" height="100" />
            <strong>{bot.name}</strong>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Class: {bot.bot_class}</p> 
            <button onClick={() => onReleaseFromArmy(bot)}>Release</button>{' '}
            <button onClick={() => onDischarge(bot.id)}>X</button>
           
          </li>
        ))}
      </ol>
    </div>
  );
};

export default YourBotArmy;
