import './App.css';
import { useState } from 'react';
import CardDeck from './lib/CardDeck';
import Card from './Card';
import PlayCard from './lib/PlayCard';
import PokerHand from './lib/PokerHand';

function App() {
    const [cards, setCards] = useState<PlayCard[]>([]);

    const dealCards = () => {
        const deck = new CardDeck();
        const dealtCards: PlayCard[] = [];

        for (let i = 0; i < 5; i++) {
            const card = deck.getCard();
            if (card) {
                dealtCards.push(card);
            }
        }

        setCards(dealtCards);
    };

    return (
        <div className="App playingCards faceImages">
            <h1>Poker</h1>
            <button onClick={dealCards}>Раздать карты</button>
            <div className="playingCards faceImages">
                {cards.length === 0 ? (
                    <p>Нажмите кнопку "Раздать карты" для начала игры.</p>
                ) : (
                    <>
                        <p>Текущая комбинация: {new PokerHand(cards).getOutcome()}</p>
                        {cards.map((card, index) => (
                            <Card
                                key={index}
                                rank={card.rank}
                                suit={card.suit}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
