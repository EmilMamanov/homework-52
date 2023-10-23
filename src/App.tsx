import './App.css';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';
import PokerHand from './lib/PokerHands';
import { useState } from 'react';

const cardDeck = new CardDeck();

function App() {
    const [drawnCards, setDrawnCards] = useState<Card[]>([]);

    const drawCard = () => {
        try {
            const card = cardDeck.getCard();
            setDrawnCards([...drawnCards, card]);
        } catch (error) {
            console.error(error);
        }
    };

    const drawMultipleCards = () => {
        try {
            const numCards = 5;
            const cards = cardDeck.getCards(numCards);
            setDrawnCards([...drawnCards, ...cards]);
        } catch (error) {
            console.error(error);
        }
    };

    const pokerHand = new PokerHand(drawnCards);
    const outcome = pokerHand.getOutcome();

    return (
        <div className="App playingCards faceImages">
            <h1>Poker</h1>
            <button onClick={drawCard}>Draw a Card</button>
            <button onClick={drawMultipleCards}>Draw 5 Cards</button>
            <div className="drawn-cards">
                <h2>Drawn Cards:</h2>
                <ul>
                    {drawnCards.map((card, index) => (
                        <li key={index}>{`${card.rank} of ${card.suit}`}</li>
                    ))}
                </ul>
            </div>

            <div className="poker-hand">
                <h2>Poker Hand:</h2>
                <p>{outcome}</p>
            </div>
        </div>
    );
}

export default App;
