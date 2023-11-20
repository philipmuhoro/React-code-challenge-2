// BotCollection.js
import React from 'react';
import './BotCollection.css';

const BotCollection = ({ bots, onAddToArmy }) => {
  return (
    <div className="BotCollection">
      <h2>Bot Collection</h2>
      <ol>
        {bots.map((bot) => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} width="100" height="100" />
            <div>
            <strong>{bot.name}</strong>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Class: {bot.bot_class}</p>
              <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BotCollection;

