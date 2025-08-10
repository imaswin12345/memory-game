import React, { useEffect, useState } from 'react';
import './MemoryGame.css';

// Image data - update these to match your actual image files
const cardImages = [
  { src: '/images/emoji1.png', matched: false },
  { src: '/images/emoji2.png', matched: false },
  { src: '/images/emoji3.png', matched: false },
  { src: '/images/emoji4.png', matched: false },
  { src: '/images/emoji5.png', matched: false },
  { src: '/images/emoji6.png', matched: false },
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleChoice = (card) => {
    if (disabled || card.matched || card === choiceOne) return;
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(resetTurn, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className="memory-game">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      
      <div className="card-grid">
        {cards.map(card => (
          <div 
            className={`card ${(choiceOne === card || choiceTwo === card || card.matched) ? 'flipped' : ''}`}
            key={card.id}
            onClick={() => handleChoice(card)}
          >
            <div className="front">
              <img 
                src={card.src} 
                alt="Card" 
                onError={(e) => {
                  e.target.src = '/images/default.png';
                }}
              />
            </div>
            <div className="back"></div>
          </div>
        ))}
      </div>
      
      <div className="stats">
        <p>Turns: {turns}</p>
      </div>
    </div>
  );
}

export default MemoryGame;